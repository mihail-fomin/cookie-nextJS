import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./CarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByIndex } from "../public/images/goods/cupcakes";

const EmblaCarousel = ({ slides }) => {
	const [viewportRef, embla] = useEmblaCarousel({
		loop: true,
		skipSnaps: false
	});
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
	const onSelect = useCallback(() => {
		if (!embla) return;
		setPrevBtnEnabled(embla.canScrollPrev());
		setNextBtnEnabled(embla.canScrollNext());
	}, [embla]);

	useEffect(() => {
		if (!embla) return;
		embla.on("select", onSelect);
		onSelect();
	}, [embla, onSelect]);

	return (
		<div className="relative">
			<div className="w-full overflow-hidden cursor-grab " ref={viewportRef}>
				<div className="flex ml-3 select-none">
					{slides.map((index) => (
						<div className="relative min-w-full pl-3" key={index}>
							<div className="relative overflow-hidden h-60">
								<img
									className="absolute block w-auto min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 max-w-none top-1/2 left-1/2"
									src={mediaByIndex(index)}
									alt="cupcake"
								/>
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
