import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { Link } from 'react-scroll'

function HeaderLink({ children }) {
	return (<Link
		activeClass='active'
		to='about'
		spy={true}
		smooth={true}
		offset={50}
		duration={500}
		className='hover:underline'
		href='#'
	>
		{children}
	</Link>
	)
}

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
						<HeaderLink>
							Обо мне
						</HeaderLink>
						<HeaderLink>
							Ассортимент
						</HeaderLink>
						<HeaderLink>
							Отзывы
						</HeaderLink>
						<HeaderLink>
							Контакты
						</HeaderLink>

					</menu>
				</div>
			</div>
		</header>
	)
}
