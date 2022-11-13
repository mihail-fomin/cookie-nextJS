// import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/images/icons/logo.png'
import introImage from '../public/images/box.jpg'
import mary from '../public/images/mary.jpg'
import { HeartIcon } from '@heroicons/react/24/outline'
import { TruckIcon } from '@heroicons/react/24/outline'
import { CakeIcon } from '@heroicons/react/24/outline'
import { SwatchIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'
import disc from '../public/images/icons/icons/compact-disk.png'

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
                  alr='logo'
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
            "В году 365 поводов для торта, и я помогу Вам сделать его особенным"
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
              alr='mary'
              layout="fill"
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

      {/* Assortment */}
      <div className='container mx-auto '>
        <h2
          className='font-sans text-5xl text-center after:block after:bg-white after:h-1 after:w-24 after:my-10 after:mx-auto'>
          Ассортимент
        </h2>

        {/* Chocolate */}
        <h3 className='pb-10 font-sans text-4xl text-center'>Шоколад / Chocolate</h3>
        <div className='flex gap-8'>

          {/* Accordion */}
          <div className='w-3/5'>

            <Disclosure>  {/* Item-1 */}
              <Disclosure.Button className="block w-full p-2 border"> {/* Accordion-header */}
                <div className='flex gap-4'>
                  <div className='w-8'>
                    <Image
                      objectFit="cover"
                      src={disc}
                      alr='disc'
                      priority
                    />
                  </div>
                  <div
                    className='after:rotate-45 '>
                    Шоколадные диски
                  </div>
                  <div className='block w-6 h-6 mx-4 origin-center rotate-45 border-b-2 border-r-2 border-redColor'></div>
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className=""> {/* Accordion-content */}
                <div>
                  Набор шоколадных клубничных дисков с сублимированными ягодами (клубника, малина) и шоколадными шариками криспи.
                </div>
                <div>66 г</div>
                <div>250 р</div>
              </Disclosure.Panel>
            </Disclosure> {/* /Item-1 */}

            <Disclosure> {/* Item-2 */}
              <Disclosure.Button className="block py-2">
                Клубчничный бельгийский
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your entire
                team.
              </Disclosure.Panel>
            </Disclosure> {/* /Item-2 */}
            <Disclosure> {/* Item-3 */}
              <Disclosure.Button className="block py-2">
                Молочный итальянский
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your entire
                team.
              </Disclosure.Panel>
            </Disclosure> {/* /Item-3 */}
            <Disclosure> {/* Item-4 */}
              <Disclosure.Button className="block py-2 ">

                Белый бельгийский
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your entire
                team.
              </Disclosure.Panel>
            </Disclosure> {/* /Item-4 */}
            <Disclosure> {/* Item-5 */}
              <Disclosure.Button className="block py-2">
                Шоколад "Пина колада"
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your entire
                team.
              </Disclosure.Panel>
            </Disclosure> {/* /Item-5 */}
          </div>

          {/* Video */}
          <div className='w-2/5 bg-white'>

          </div>
        </div>
      </div>
    </body >
  )
}
