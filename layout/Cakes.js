import React from 'react';


function CakesCell({
	cakeID,
	cakeName,
	cakeWeight,
	cakeCost,
}) {
	return <div className='relative h-[600px] overflow-hidden group'>
		<img
			className="absolute"
			objectFit="cover"
			src={cakeID}
			alt='cakeImage'
			fill
		/>
		<div className="absolute top-0 left-0 flex flex-col items-center justify-center invisible w-full h-full group-hover:visible">
			<div className="absolute w-full h-full opacity-90 bg-gradient-to-b from-red-400 to-red-100" />
			<div className='relative bg-white rounded-full w-28 aspect-square'>
				<div className='p-2'>
					<img
						src={'/images/icons/logo.png'}
						alt='mary'
						fill
					/>
				</div>
			</div>
			<div className="relative">{cakeName}</div>
			<div className='relative flex items-center pt-2'>
				<div className='relative w-8 aspect-square'>
					<img
						objectFit="cover"
						src='/images/icons/icons/weight.png'
						alt='weight:'
						fill
					/>
				</div>
				<div className='px-4'>{cakeWeight}</div>
			</div>
			<div className='relative flex items-center '>
				<div className='relative w-8 aspect-square'>
					<img
						objectFit="cover"
						src='/images/icons/icons/ruble.png'
						alt='cost:'
						fill
					/>
				</div>
				<div className='px-4'>{cakeCost}</div>
			</div>
		</div>
	</div>
}

function CakesGrid() {
	return (
		<div className='grid grid-cols-2'>
			<CakesCell
				cakeID={`/images/goods/cakes/cake_1.jpg`}
				cakeName={'Торт "Апельсин - манго-маракуйя'}
				cakeWeight={'3кг'}
				cakeCost={'4500р'}
			/>
			<CakesCell
				cakeID={`/images/goods/cakes/cake_2.jpg`}
				cakeName={'Торт "Шоколад - хрустящий слой"'}
				cakeWeight={'1кг'}
				cakeCost={'2200р'}
			/>
			<CakesCell
				cakeID={`/images/goods/cakes/cake_3.jpg`}
				cakeName={'Торт "Шоколад - черная смородина"'}
				cakeWeight={'1кг'}
				cakeCost={'2000р'}
			/>
			<CakesCell
				cakeID={`/images/goods/cakes/cake_4.jpg`}
				cakeName={'Торт "Шоколад-малина/вишня"'}
				cakeWeight={'1кг'}
				cakeCost={'2000р'}
			/>
		</div>
	)
}

export default function CakesSection() {
	return (
		<section className='bg-red-400'>
			<h3 className='py-10 text-4xl text-center text-white font-fancy'>Торты / Cakes</h3>
			<CakesGrid />
		</section>
	);
}