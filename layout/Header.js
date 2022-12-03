import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export default function Header({ className = "" }) {
	return (
		<header
			className={twMerge(
				"sticky top-0",
				"shadow-lg shadow-red-700",
				"bg-red-400",
				className
			)}
		>
			<div className='container px-4 mx-auto h-28 '>
				<div className='relative flex justify-end h-full '>
					<div className='absolute top-0 left-0 z-10 w-40 h-40 bg-white rounded-b-full drop-shadow-xl '>
						<div className='relative m-auto w-36 h-36'>
							<Image
								src={'/images/icons/logo.png'}
								alt='mary'
								fill
								priority
							/>
						</div>
					</div>
					<menu className='flex items-center gap-4 text-3xl '>
						<a className='hover:underline' href='#'>Обо мне</a>
						<a className='hover:underline' href='#'>Ассортимент</a>
						<a className='hover:underline' href='#'>Отзывы</a>
						<a className='hover:underline' href='#'>Контакты</a>
					</menu>
				</div>
			</div>
		</header>
	)
}
