// import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/images/logo/logo.png'
import introImage from '../public/images/box.jpg'

export default function Home() {
  return (
    <body className='bg-mainColor'>
      {/* Header */}
      <header className="shadow-lg shadow-redColor">
        <div className="container relative flex justify-end mx-auto h-28">
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
      </header>

      {/* Intro */}
      <div className='container relative flex flex-col justify-center h-screen mx-auto text-center'>
        <h1 className='pb-8 font-serif text-7xl '>MaryGreatCookie</h1>
        <h2
          className='font-sans text-5xl leading-normal after:block after:bg-white after:h-1 after:w-24 after:my-10 after:mx-auto'>
          "В году 365 поводов для торта, и я помогу Вам сделать его особенным"
        </h2>
        <button
          className='inline-block w-64 p-2 mx-auto text-xl transition duration-200 ease-linear border rounded-lg hover:bg-white hover:text-redColor md:ease-in"'>
          Узнать больше
        </button>
      </div>
    </body >
  )
}
