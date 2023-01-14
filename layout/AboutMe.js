import Image from 'next/image'

export default function AboutMe() {
	return (
		<section className='py-10 text-red-700 bg-red-100' id='about'>
			<div className='container px-4 mx-auto' >
				<h2 className='text-5xl text-center font-fancy after:block after:bg-redColor after:h-1 after:w-24 after:my-10 after:mx-auto'>Обо мне</h2>
				<div className='container flex gap-10 pb-12 mx-auto'>
					<div className='flex-none overflow-hidden rounded-full h-60 w-60 ring-2 ring-red-700 ring-offset-2'>
						<Image
							objectFit="cover"
							src='/images/mary.jpg'
							alt='mary'
							width='240'
							height='240'
							priority
						/>
					</div>
					<div div className='flex-auto text-3xl leading-normal'>
						Добро пожаловать в кондитерскую MaryGreatCookie! Как вы уже догадались, зовут меня Маша! Я готовлю для вас десерты с 2018 года. С радостью помогу Вам подобрать начинки и сделаю особенный дизайн по Вашему заказу для любого Вашего праздничного (и не только) события :)
					</div>
				</div>
			</div>
		</section>

	)
}