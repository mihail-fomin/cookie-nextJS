// import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/images/logo/logo.png'

export default function Home() {
	return (
		<body className='bg-mainColor'>
			<header className="shadow-lg shadow-redColor">
				<div className="container flex justify-between mx-auto">
					<div className='w-40 h-40 overflow-hidden bg-white rounded-b-[50%]'>
						<div className='relative m-auto w-36 h-36'>
							<Image
								objectFit="cover"
								src={logo}
								alt='logo'
								priority
							/>
						</div>
					</div>
					<div className='flex justify-between gap-6 my-auto text-xl '>
						<a href='#'>Обо мне</a>
						<a href='#'>Ассортимент</a>
						<a href='#'>Отзывы</a>
						<a href='#'>Контакты</a>
					</div>
				</div>
			</header>

		</body >
	)
}
