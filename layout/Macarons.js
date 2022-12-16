import ReactPlayer from 'react-player'
import Carousel from './MacaronsCarousel'

export default function Cupkaes() {
	return (
		<section className='py-10'>
			<div className='container mx-auto' >
				<h3 className='py-10 text-4xl text-center font-fancy'>Макаронс / Macarons</h3>
				<div className="flex flex-col gap-3 p-2 mx-auto my-4 bg-white max-w-1/2 rounded-2xl">
					<p>Вы можете заказать Макаронс в количестве от 6 шт и более.</p>
					<div className='flex items-center p2-4 '>
						<div className='w-8 '>
							<img src='/images/icons/icons/ruble.png' alt="costs:"></img>
						</div>
						<div className='px-4'>1 шт - 110 р</div>
					</div>
				</div>
				<div className='flex justify-between gap-12'>
					<div className='w-2/3'>
						<Carousel slideCount={6} />
					</div >
					< div className='w-1/3' >
						<div className='overflow-hidden rounded-3xl max-h-xl'>
							<ReactPlayer
								playing='true'
								muted='true'
								controls='false'
								loop='true'
								url='/videos/2.mp4'
								width='100%'
								height='100%'
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</div >
				</div>


			</div>
		</section>

	)
}
