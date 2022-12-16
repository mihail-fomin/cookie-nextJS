import Image from 'next/image'
import Carousel from './CupcakeCarousel'


export default function Cupkaes() {
	return (
		<section className='py-10 text-red-700 bg-red-100'>
			< div className='container mx-auto' >
				<h3 className='py-10 text-4xl text-center font-fancy'>Капкейки / Cupcakes</h3>
				<div className="flex flex-col gap-3 p-2 mx-auto my-4 bg-white max-w-1/2 rounded-2xl">
					<p>Вы можете заказать капкейки в количестве от 6 шт и более.</p>
					<div className='flex items-center p2-4 '>
						<div className='w-8 '>
							<img src='/images/icons/icons/ruble.png' alt="costs:"></img>
						</div>
						<div className='px-4'>1 шт - 200 р</div>
					</div>
				</div>
				<Carousel slideCount={5} />
			</div >
		</section>
	)
}
