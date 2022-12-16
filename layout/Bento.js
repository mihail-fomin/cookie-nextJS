import Image from 'next/image'
import React from 'react';
import Carousel from './BentoCarousel'

export default function Bento() {

	return (
		<section className='bg-red-100 '>
			<div className='container mx-auto'>
				<h3 className='py-10 text-4xl text-center font-fancy'>Бенто-Торты / Bento cakes</h3>
				<div className='flex'>
					<div className='w-1/3'>
						<ul className='list-disc'>
							<li>Ваниль-арахис-карамель</li>
							<li>Ваниль-малина-кокос</li>
							<li>Шоколад-арахис-карамель</li>
							<li>Шоколад-вишня</li>
							<li>Кокос-черника</li>
						</ul>
						<div className='flex items-center pt-2'>
							<div className='relative w-8 aspect-square'>
								<Image
									objectFit="cover"
									src='/images/icons/icons/weight.png'
									alt='weight:'
									fill
								/>
							</div>
							<div className='px-4'>0.6 кг</div>
						</div>
						<div className='flex items-center '>
							<div className='relative w-8 aspect-square'>
								<Image
									objectFit="cover"
									src='/images/icons/icons/ruble.png'
									alt='cost:'
									fill
								/>
							</div>
							<div className='px-4'>1800 р</div>
						</div>
					</div>
					<div className='w-2/3 py-4'>
						<Carousel slideCount={3} />
					</div>
				</div>


			</div>

		</section >
	);
}