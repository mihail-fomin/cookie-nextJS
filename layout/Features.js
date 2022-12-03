import { HeartIcon, TruckIcon, CakeIcon, SwatchIcon } from '@heroicons/react/24/outline'

export default function Features() {
	return (
		<section className='pt-10 text-red-700 bg-red-100'>
			<div className='container mx-auto ' >
				<h2 className='pb-10 text-5xl text-center text-red-700 font-fancy'>Я предлагаю</h2>
				<div className='grid grid-cols-4 gap-4 text-center text-red-700 pb-14'>
					<div> <HeartIcon className="w-24 h-24 mx-auto text-red-700" /></div>
					<div> <TruckIcon className="w-24 h-24 mx-auto text-red-700" /></div>
					<div> <CakeIcon className="w-24 h-24 mx-auto text-red-700" /></div>
					<div> <SwatchIcon className="w-24 h-24 mx-auto text-red-700" /></div>
					<div>Только натуральные и свежие продукты</div>
					<div>Доставка по Магнитогорску и пригороду</div>
					<div>Большое многообразие начинок</div>
					<div>Оригинальный декор</div>
				</div>
			</div >
		</section>

	)
}