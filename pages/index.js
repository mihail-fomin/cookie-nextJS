import React from 'react'

// SLIDER
import Carousel from "./Carousel";
const SLIDE_COUNT = 4;
const slides = Array.from(Array(SLIDE_COUNT).keys());



import Image from 'next/image'
import logo from '../public/images/icons/logo.png'
//import introImage from '../public/images/box.jpg'
import mary from '../public/images/mary.jpg'
import { HeartIcon } from '@heroicons/react/24/outline'
import { TruckIcon } from '@heroicons/react/24/outline'
import { CakeIcon } from '@heroicons/react/24/outline'
import { SwatchIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'

import discIcon from '../public/images/icons/icons/compact-disk.png'
import chocoIcon1 from '../public/images/icons/icons/chocolate_1.png'
import chocoIcon2 from '../public/images/icons/icons/chocolate_2.png'
import chocoIcon3 from '../public/images/icons/icons/chocolate_3.png'
import weight from '../public/images/icons/icons/weight.png'
import ruble from '../public/images/icons/icons/ruble.png'
import discImage from '../public/images/goods/choco/chocolate_disk.jpg'
import chocoMilkBelg from '../public/images/goods/choco/chocolate_2.jpg'
import chocoItal from '../public/images/goods/choco/chocolate_3.jpg'
import chocoWhiteBelg from '../public/images/goods/choco/chocolate_4.jpg'
import chocoPina from '../public/images/goods/choco/chocolate_5.jpg'


export default function Home() {
	return (
		<body className='bg-mainColor'>
			{/* Header */}
			<header className="absolute top-0 left-0 z-10 w-screen shadow-lg shadow-redColor">
				<div className='container mx-auto'>
					<div className="relative flex justify-end px-5 h-28">
						<div className='absolute top-0 left-0 w-40 h-40  drop-shadow-xl overflow-hidden bg-white rounded-b-[50%]'>
							<div className='relative m-auto w-36 h-36 '>
								<Image
									objectFit="cover"
									src={logo}
									alt='logo'
									priority
								/>
							</div>
						</div>
						<div className='flex gap-6 my-auto text-3xl '>
							<a className='hover:underline' href='#'>Обо мне</a>
							<a className='hover:underline' href='#'>Ассортимент</a>
							<a className='hover:underline' href='#'>Отзывы</a>
							<a className='hover:underline' href='#'>Контакты</a>
						</div>
					</div>
				</div>
			</header>

			{/* Intro */}
			<div className='relative flex flex-col justify-center h-screen mx-auto text-center'>
				<div className='container mx-auto'>
					<h1 className='pb-8 font-serif text-7xl '>MaryGreatCookie</h1>
					<h2
						className='font-sans text-5xl leading-normal after:block after:bg-white after:h-1 after:w-24 after:my-10 after:mx-auto'>
						&quot;В году 365 поводов для торта, и я помогу Вам сделать его особенным&quot;
					</h2>
					<button
						className='inline-block w-64 p-2 mx-auto text-xl transition duration-200 ease-linear border-2 rounded-lg hover:bg-white hover:text-redColor md:ease-in"'>
						Узнать больше
					</button>
				</div>
			</div>

			{/* About */}
			<div className='container mx-auto '>
				<h2 className='font-sans text-5xl text-center after:block after:bg-white after:h-1 after:w-24 after:my-10 after:mx-auto'>Обо мне</h2>
				<div className='container flex gap-10 pb-12 mx-auto'>
					<div className='relative flex-none overflow-hidden rounded-full h-60 w-60 ring-2 ring-redColor ring-offset-2'>
						<Image
							objectFit="cover"
							src={mary}
							alt='mary'
							priority
						/>
					</div>
					<div className='flex-auto text-3xl leading-normal'>
						Добро пожаловать в кондитерскую MaryGreatCookie! Как вы уже догадались, зовут меня Маша! Я готовлю для вас десерты с 2018 года. С радостью помогу Вам подобрать начинки и сделаю особенный дизайн по Вашему заказу для любого Вашего праздничного (и не только) события :)
					</div>
				</div>
			</div>

			{/* Features */}
			<div className='container mx-auto '>
				<h2 className='pb-10 font-sans text-5xl text-center'>Я предлагаю</h2>
				<div className='grid grid-cols-4 gap-4 text-center pb-14'>
					<div> <HeartIcon className="w-24 h-24 mx-auto text-redColor" /></div>
					<div> <TruckIcon className="w-24 h-24 mx-auto text-redColor" /></div>
					<div> <CakeIcon className="w-24 h-24 mx-auto text-redColor" /></div>
					<div> <SwatchIcon className="w-24 h-24 mx-auto text-redColor" /></div>
					<div>Только натуральные и свежие продукты</div>
					<div>Доставка по Магнитогорску и пригороду</div>
					<div>Большое многообразие начинок</div>
					<div>Оригинальный декор</div>
				</div>
			</div>

			{/* Chocolate */}
			<div className='pt-12 text-redColor bg-color300'>
				<div className='container mx-auto bg-color300'>
					<h2
						className='font-sans text-5xl text-center after:block after:bg-white after:h-1 after:w-24 after:my-10 after:mx-auto'>
						Ассортимент
					</h2>


					<h3 className='pb-10 font-sans text-4xl text-center'>Шоколад / Chocolate</h3>
					<div className='flex gap-8 pb-10'>

						{/* Accordion */}
						<div className='w-3/5'>

							<div className='pb-4'>
								<Disclosure>  {/* Item-1 */}
									<Disclosure.Button className="block w-full px-4 py-2 transition ease-in-out border rounded-lg hover:bg-color400"> {/* Accordion-header */}
										<div className='flex justify-between'>
											<div className='flex gap-4'>
												<div className='w-8'>
													<Image
														objectFit="cover"
														src={discIcon}
														alt='discIcon'
														priority
													/>
												</div>
												<div className=''>Шоколадные диски</div>
											</div>
											<div className='block w-6 h-6 mx-4 origin-center rotate-45 border-b-2 border-r-2 border-redColor'></div>
										</div>
									</Disclosure.Button>
									<Disclosure.Panel className="px-4 py-2 border rounded-lg"> {/* Accordion-content */}
										<div className='flex'>
											<div className='pr-4'>
												<Image
													objectFit="cover"
													src={discImage}
													alt='discImage'
													priority
												/>
											</div>
											<div>
												<div>
													Набор шоколадных клубничных дисков с сублимированными ягодами (клубника, малина) и шоколадными шариками криспи.
												</div>
												<div className='flex items-center py-4 '>
													<div className='w-12 h-12'>
														<Image
															objectFit="cover"
															src={weight}
															alt='weight:'
															priority
														/>
													</div>
													<div className='px-4'>66 г</div>
												</div>
												<div className='flex items-center p2-4 '>
													<div className='w-12 h-12'>
														<Image
															objectFit="cover"
															src={ruble}
															alt='cost:'
															priority
														/>
													</div>
													<div className='px-4'>250 р</div>
												</div>
											</div>
										</div>
									</Disclosure.Panel>
								</Disclosure> {/* /Item-1 */}
							</div>
							<div className='pb-4'>
								<Disclosure>  {/* Item-2 */}
									<Disclosure.Button className="block w-full px-4 py-2 transition ease-in-out border rounded-lg hover:bg-color400"> {/* Accordion-header */}
										<div className='flex justify-between'>
											<div className='flex gap-4'>
												<div className='w-8'>
													<Image
														objectFit="cover"
														src={chocoIcon1}
														alt='chocoIcon1'
														priority
													/>
												</div>
												<div className=''>Клубчничный бельгийский</div>
											</div>
											<div className='block w-6 h-6 mx-4 origin-center rotate-45 border-b-2 border-r-2 border-redColor'></div>
										</div>
									</Disclosure.Button>
									<Disclosure.Panel className="px-4 py-2 border rounded-lg"> {/* Accordion-content */}
										<div className='flex'>
											<div className='pr-4'>
												<Image
													objectFit="cover"
													src={chocoMilkBelg}
													alt='chocoMilkBelg'
													priority
												/>
											</div>
											<div>
												<div>
													Клубничный бельгийский шоколад с сублимированными ягодами (клубника и малина) и шоколадными шариками криспи
												</div>
												<div className='flex items-center py-4 '>
													<div className='w-12 h-12'>
														<Image
															objectFit="cover"
															src={weight}
															alt='weight:'
															priority
														/>
													</div>
													<div className='px-4'>100 г</div>
												</div>
												<div className='flex items-center p2-4 '>
													<div className='w-12 h-12'>
														<Image
															objectFit="cover"
															src={ruble}
															alt='cost:'
															priority
														/>
													</div>
													<div className='px-4'>350 р</div>
												</div>
											</div>
										</div>
									</Disclosure.Panel>
								</Disclosure> {/* /Item-2 */}
							</div>
							<div className='pb-4'>
								<Disclosure>  {/* Item-3 */}
									<Disclosure.Button className="block w-full px-4 py-2 transition ease-in-out border rounded-lg hover:bg-color400"> {/* Accordion-header */}
										<div className='flex justify-between'>
											<div className='flex gap-4'>
												<div className='w-8'>
													<Image
														objectFit="cover"
														src={chocoIcon2}
														alt='discIcon'
														priority
													/>
												</div>
												<div className=''>Молочный итальянский</div>
											</div>
											<div className='block w-6 h-6 mx-4 origin-center rotate-45 border-b-2 border-r-2 border-redColor'></div>
										</div>
									</Disclosure.Button>
									<Disclosure.Panel className="px-4 py-2 border rounded-lg"> {/* Accordion-content */}
										<div className='flex'>
											<div className='pr-4'>
												<Image
													objectFit="cover"
													src={chocoItal}
													alt='chocoItal'
													priority
												/>
											</div>
											<div>
												<div>
													Молочный итальянский шоколад с воздушным рисом в карамели и апельсиновыми цукатами.
												</div>
												<div className='flex items-center py-4 '>
													<div className='w-12 h-12'>
														<Image
															objectFit="cover"
															src={weight}
															alt='weight:'
															priority
														/>
													</div>
													<div className='px-4'>100 г</div>
												</div>
												<div className='flex items-center p2-4 '>
													<div className='w-12 h-12'>
														<Image
															objectFit="cover"
															src={ruble}
															alt='cost:'
															priority
														/>
													</div>
													<div className='px-4'>260 р</div>
												</div>
											</div>
										</div>
									</Disclosure.Panel>
								</Disclosure> {/* /Item-3 */}
							</div>
							<div className='pb-4'>
								<Disclosure>  {/* Item-4 */}
									<Disclosure.Button className="block w-full px-4 py-2 transition ease-in-out border rounded-lg hover:bg-color400"> {/* Accordion-header */}
										<div className='flex justify-between'>
											<div className='flex gap-4'>
												<div className='w-8'>
													<Image
														objectFit="cover"
														src={chocoIcon3}
														alt='chocoIcon3'
														priority
													/>
												</div>
												<div className=''>Белый бельгийский</div>
											</div>

											<div className='block w-6 h-6 mx-4 origin-center rotate-45 border-b-2 border-r-2 border-redColor'></div>
										</div>
									</Disclosure.Button>
									<Disclosure.Panel className="px-4 py-2 border rounded-lg"> {/* Accordion-content */}
										<div className='flex'>
											<div className='pr-4'>
												<Image
													objectFit="cover"
													src={chocoWhiteBelg}
													alt='discImage'
													priority
												/>
											</div>
											<div>
												<div>
													Белый бельгийский шоколад с миндалем и кокосовой стружкой.
												</div>
												<div className='flex items-center py-4 '>
													<div className='w-12 h-12'>
														<Image
															objectFit="cover"
															src={weight}
															alt='weight:'
															priority
														/>
													</div>
													<div className='px-4'>100 г</div>
												</div>
												<div className='flex items-center p2-4 '>
													<div className='w-12 h-12'>
														<Image
															objectFit="cover"
															src={ruble}
															alt='cost:'
															priority
														/>
													</div>
													<div className='px-4'>300 р</div>
												</div>
											</div>
										</div>
									</Disclosure.Panel>
								</Disclosure> {/* /Item-4 */}
							</div>
							<div className='pb-4'>
								<Disclosure>  {/* Item-5 */}
									<Disclosure.Button className="block w-full px-4 py-2 transition ease-in-out border rounded-lg hover:bg-color400"> {/* Accordion-header */}
										<div className='flex justify-between'>
											<div className='flex gap-4'>
												<div className='w-8'>
													<Image
														objectFit="cover"
														src={chocoIcon1}
														alt='chocoIcon1'
														priority
													/>
												</div>
												<div className=''>Шоколад &quot;Пина колада&quot;</div>
											</div>

											<div className='block w-6 h-6 mx-4 origin-center rotate-45 border-b-2 border-r-2 border-redColor'></div>
										</div>
									</Disclosure.Button>
									<Disclosure.Panel className="px-4 py-2 border rounded-lg"> {/* Accordion-content */}
										<div className='flex'>
											<div className='pr-4'>
												<Image
													objectFit="cover"
													src={chocoPina}
													alt='chocoPina'
													priority
												/>
											</div>
											<div>
												<div>
													Белый бельгийский шоколад с кусочками сублимированного ананаса и кокосовой стружкой
												</div>
												<div className='flex items-center py-4 '>
													<div className='w-12 h-12'>
														<Image
															objectFit="cover"
															src={weight}
															alt='weight:'
															priority
														/>
													</div>
													<div className='px-4'>100 г</div>
												</div>
												<div className='flex items-center p2-4 '>
													<div className='w-12 h-12'>
														<Image
															objectFit="cover"
															src={ruble}
															alt='cost:'
															priority
														/>
													</div>
													<div className='px-4'>350 р</div>
												</div>
											</div>
										</div>
									</Disclosure.Panel>
								</Disclosure> {/* /Item-5 */}
							</div>
						</div >

						{/* Video */}
						< div className='w-2/5 bg-white' >
						</div >
					</div >

				</div >

			</div >{/* /Chocolate */}

			{/* Cupcakes */}
			<div className='container mx-auto'>
				<h3 className='py-10 font-sans text-4xl text-center'>Капкейки / Cupcakes</h3>
				<p>Вы можете заказать капкейки в количестве от 6 шт и более.</p>
				<div className='flex items-center p2-4 '>
					<div className='w-12 h-12'>
						<Image
							objectFit="cover"
							src={ruble}
							alt='cost:'
							priority
						/>
					</div>
					<div className='px-4'>1 шт - 200 р</div>
				</div>

				<Carousel slides={slides} />

			</div >

		</body >
	)
}
