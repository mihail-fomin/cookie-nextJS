import ReactPlayer from 'react-player'
import Accordeon from './ChocolateAccordeon'

export default function Chocolate() {
	return (
		<section className='pt-10 text-redColor bg-color300'>
			<div className='container mx-auto'>
				<h3 className='pb-10 text-4xl text-center font-fancy'>Шоколад / Chocolate</h3>
				<div className='flex gap-8 pb-10 space-between ' >
					<Accordeon />
					< div className='w-1/3 overflow-hidden rounded-3xl' >
						<ReactPlayer
							className='rounded-xl'
							playing='true'
							muted='true'
							controls='true'
							loop='true'
							url='/videos/1.mp4'
							width='100%'
							height='100%'
						/>
					</div >
				</div>
			</div>
		</section >
	)
}

