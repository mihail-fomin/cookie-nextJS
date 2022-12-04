import Image from 'next/image'
import React from 'react';

export default function Cakes() {

	return (
		<section className='bg-red-400 '>
			<h3 className='py-10 text-4xl text-center text-white font-fancy'>Торты / Cakes</h3>
			<div className='grid grid-cols-2'>
				<div className='relative h-[600px] overflow-hidden'>
					<Image
						objectFit="cover"
						src='/images/goods/cakes/cake_2.jpg'
						alt='cakeImage'
						fill
						priority
					/>
					<div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full opacity-0 hover:opacity-100 bg-gradient-to-b from-red-400 to-red-100'>
						<div className='relative bg-white rounded-full w-28 aspect-square'>
							<Image
								src={'/images/icons/logo.png'}
								alt='mary'
								fill
							/>
						</div>
						<div>Торт "Сникерс"</div>
						<div className='flex items-center pt-2'>
							<div className='relative w-8 aspect-square'>
								<Image
									objectFit="cover"
									src='/images/icons/icons/weight.png'
									alt='weight:'
									fill
									priority
								/>
							</div>
							<div className='px-4'>3 кг</div>
						</div>
						<div className='flex items-center '>
							<div className='relative w-8 aspect-square'>
								<Image
									objectFit="cover"
									src='/images/icons/icons/ruble.png'
									alt='cost:'
									fill
									priority
								/>
							</div>
							<div className='px-4'>4500 р</div>
						</div>

					</div>
				</div>
				<div className='relative h-[600px] overflow-hidden'>
					<Image
						objectFit="cover"
						src='/images/goods/cakes/cake_2.jpg'
						alt='cakeImage'
						fill
						priority
					/>
					<div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full opacity-0 hover:opacity-100 bg-gradient-to-b from-red-400 to-red-100'>
						<div className='relative bg-white rounded-full w-28 aspect-square'>
							<Image
								src={'/images/icons/logo.png'}
								alt='mary'
								fill
							/>
						</div>
						<div>Торт "Сникерс"</div>
						<div className='flex items-center pt-2'>
							<div className='relative w-8 aspect-square'>
								<Image
									objectFit="cover"
									src='/images/icons/icons/weight.png'
									alt='weight:'
									fill
									priority
								/>
							</div>
							<div className='px-4'>3 кг</div>
						</div>
						<div className='flex items-center '>
							<div className='relative w-8 aspect-square'>
								<Image
									objectFit="cover"
									src='/images/icons/icons/ruble.png'
									alt='cost:'
									fill
									priority
								/>
							</div>
							<div className='px-4'>4500 р</div>
						</div>
					</div>
				</div>
				<div className='relative h-[600px] overflow-hidden'>
					<Image
						objectFit="cover"
						src='/images/goods/cakes/cake_2.jpg'
						alt='cakeImage'
						fill
						priority
					/>
					<div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full opacity-0 hover:opacity-100 bg-gradient-to-b from-red-400 to-red-100'>
						<div className='relative bg-white rounded-full w-28 aspect-square'>
							<Image
								src={'/images/icons/logo.png'}
								alt='mary'
								fill
							/>
						</div>
						<div>Торт "Сникерс"</div>
						<div className='flex items-center pt-2'>
							<div className='relative w-8 aspect-square'>
								<Image
									objectFit="cover"
									src='/images/icons/icons/weight.png'
									alt='weight:'
									fill
									priority
								/>
							</div>
							<div className='px-4'>3 кг</div>
						</div>
						<div className='flex items-center '>
							<div className='relative w-8 aspect-square'>
								<Image
									objectFit="cover"
									src='/images/icons/icons/ruble.png'
									alt='cost:'
									fill
									priority
								/>
							</div>
							<div className='px-4'>4500 р</div>
						</div>
					</div>
				</div>
				<div className='relative h-[600px] overflow-hidden'>
					<Image
						objectFit="cover"
						src='/images/goods/cakes/cake_2.jpg'
						alt='cakeImage'
						fill
						priority
					/>
					<div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full opacity-0 hover:opacity-100 bg-gradient-to-b from-red-400 to-red-100'>
						<div className='relative bg-white rounded-full w-28 aspect-square'>
							<Image
								src={'/images/icons/logo.png'}
								alt='mary'
								fill
							/>
						</div>
						<div>Торт "Сникерс"</div>
						<div className='flex items-center pt-2'>
							<div className='relative w-8 aspect-square'>
								<Image
									objectFit="cover"
									src='/images/icons/icons/weight.png'
									alt='weight:'
									fill
									priority
								/>
							</div>
							<div className='px-4'>3 кг</div>
						</div>
						<div className='flex items-center '>
							<div className='relative w-8 aspect-square'>
								<Image
									objectFit="cover"
									src='/images/icons/icons/ruble.png'
									alt='cost:'
									fill
									priority
								/>
							</div>
							<div className='px-4'>4500 р</div>
						</div>

					</div>
				</div>
			</div>
		</section >
	);
}