import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

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
						<Link
							activeClass='active'
							to='about'
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
							className='hover:underline'
							href='#'
						>
							Обо мне
						</Link>
						<Link
							activeClass='active'
							to='assortment'
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
							className='hover:underline'
							href='#'
						>
							Ассортимент
						</Link>
						<Link
							activeClass='active'
							to='reviews'
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
							className='hover:underline'
							href='#'
						>
							Отзывы
						</Link>
						<Link
							activeClass='active'
							to='contacts'
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
							className='hover:underline'
							href='#'
						>
							Контакты
						</Link>
					</menu>
				</div>
			</div>
		</header>
	)
}
