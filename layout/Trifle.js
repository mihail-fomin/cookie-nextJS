import Carousel from './TrifleCarousel'
import Accordeon from './TrifleAccordeon'

export default function Trifles() {
	return (
		<section className='py-10 bg-red-100'>
			<div className='container mx-auto' >
				<h3 className='py-10 text-4xl text-center font-fancy'>Трайфл / Trifle</h3>
				<div className='flex justify-between gap-12'>
					<Accordeon />
					<Carousel slideCount={3} />
				</div>
			</div>
		</section>
	)
}