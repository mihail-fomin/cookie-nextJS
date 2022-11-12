// import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/images/logo/logo.png'

export default function Home() {
	return (
		<body className=' bg-mainColor'>
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
			<div className='h-screen'>

			</div>
		</body >
	)
}
