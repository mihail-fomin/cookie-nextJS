import React, { useState, useEffect, useCallback, useRef } from "react";
import { PrevButton, NextButton } from "./CarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

function range(n) {
	return Array.from(Array(n).keys())
}

const PARALLAX_FACTOR = 1.5;

const EmblaCarousel = ({ slideCount, options = { loop: false } }) => {
	const autoplay = useRef(
		Autoplay(
			{ delay: 3000, stopOnInteraction: false },
			(emblaRoot) => emblaRoot.parentElement
		)
	);

	const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
	const [parallaxValues, setParallaxValues] = useState([]);


	const scrollNext = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollNext();
		autoplay.current.reset();
	}, [emblaApi]);

	const scrollPrev = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollPrev();
		autoplay.current.reset();
	}, [emblaApi]);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setPrevBtnEnabled(emblaApi.canScrollPrev());
		setNextBtnEnabled(emblaApi.canScrollNext());
	}, [emblaApi]);

	const onScroll = useCallback(() => {
		if (!emblaApi) return;

		const engine = emblaApi.internalEngine();
		const scrollProgress = emblaApi.scrollProgress();

		const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
			if (!emblaApi.slidesInView().includes(index)) return 0;
			let diffToTarget = scrollSnap - scrollProgress;

			if (engine.options.loop) {
				engine.slideLooper.loopPoints.forEach((loopItem) => {
					const target = loopItem.target();
					if (index === loopItem.index && target !== 0) {
						const sign = Math.sign(target);
						if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
						if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
					}
				});
			}
			return diffToTarget * (-1 / PARALLAX_FACTOR) * 100;
		});
		setParallaxValues(styles);
	}, [emblaApi, setParallaxValues]);


	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		onScroll();
		emblaApi.on("select", onSelect);
		emblaApi.on("scroll", onScroll);
		emblaApi.on("resize", onScroll);

	}, [emblaApi, onSelect, onScroll]);

	return (
		<div className="container relative mx-auto">
			<div className="w-3/4 mx-auto overflow-hidden cursor-grab" ref={emblaRef}>
				<div className="flex ml-3 select-none">
					{range(slideCount).map((i) => (
						<div className="relative min-w-[80%] pl-3" key={i}>
							<div className="relative h-[600px] flex items-center justify-center overflow-hidden">
								<div
									className="absolute top-0 bottom-0 left-0 right-0"
									style={{ transform: `translateX(${parallaxValues[i]}%)` }}
								>
									<div className="absolute block w-auto min-w-full min-h-full overflow-hidden -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-none rounded-3xl">
										<Image
											objectFit="cover"
											src={`/images/goods/macarons/macaron_${(i % 6) + 1}.jpg`}
											alt="cupcake"
											fill
										/>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
			<NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
		</div>
	);
};

export default EmblaCarousel;
