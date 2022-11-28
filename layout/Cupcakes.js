import Image from 'next/image'
import Carousel from './CupcakeCarousel'


export default function Cupkaes() {
	return (
		<section className='py-10 bg-color400 text-redColor'>
			< div className='container mx-auto' >
				<h3 className='py-10 text-4xl text-center font-fancy'>Капкейки / Cupcakes</h3>
				<div className="flex flex-col gap-3 p-2 mx-auto my-4 bg-white max-w-1/2 rounded-2xl">
					<p>Вы можете заказать капкейки в количестве от 6 шт и более.</p>
					<div className='flex items-center p2-4 '>
						<div className='relative w-12 h-12'>
							<Image
								objectFit="cover"
								src='/images/icons/icons/ruble.png'
								alt='cost:'
								fill
								priority
							/>
						</div>
						<div className='px-4'>1 шт - 200 р</div>
					</div>
				</div>


				<Carousel slideCount={4} />

			</div >
		</section>

	)
}
