import Image from 'next/image'
import ReactPlayer from 'react-player'
import Carousel from './TrifleCarousel'
import Accordeon from './TrifleAccordeon'


export default function Trifles() {
	return (
		<section className='py-10 bg-red-100'>
			<div className='container mx-auto' >
				<h3 className='py-10 text-4xl text-center font-fancy'>Трайфл / Trifle</h3>
			</div>
			<div className='flex'>
				<Accordeon />
			</div>
		</section>
	)
}