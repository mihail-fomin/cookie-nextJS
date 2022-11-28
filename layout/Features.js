import { HeartIcon, TruckIcon, CakeIcon, SwatchIcon } from '@heroicons/react/24/outline'

export default function Features() {
	return (
		<section className='pt-10 text-redColor bg-color400'>
			<div className='container mx-auto ' >
				<h2 className='pb-10 text-5xl text-center font-fancy text-redColor'>Я предлагаю</h2>
				<div className='grid grid-cols-4 gap-4 text-center pb-14 text-redColor'>
					<div> <HeartIcon className="w-24 h-24 mx-auto text-redColor" /></div>
					<div> <TruckIcon className="w-24 h-24 mx-auto text-redColor" /></div>
					<div> <CakeIcon className="w-24 h-24 mx-auto text-redColor" /></div>
					<div> <SwatchIcon className="w-24 h-24 mx-auto text-redColor" /></div>
					<div>Только натуральные и свежие продукты</div>
					<div>Доставка по Магнитогорску и пригороду</div>
					<div>Большое многообразие начинок</div>
					<div>Оригинальный декор</div>
				</div>
			</div >
		</section>

	)
}