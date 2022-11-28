
export default function Body() {
	return (
		<section className='flex flex-col justify-center h-screen mx-auto text-center bg-mainColor' >
			<div className='container mx-auto'>
				<h1 className='pb-8 font-logo text-7xl '>MaryGreatCookie</h1>
				<h2
					className='text-5xl leading-normal font-fancy after:block after:bg-white after:h-1 after:w-24 after:my-10 after:mx-auto'>
					&quot;В году 365 поводов для торта, и я помогу Вам сделать его особенным&quot;
				</h2>
				<button
					className='inline-block w-64 p-2 mx-auto text-xl transition duration-200 ease-linear border-2 rounded-3xl hover:bg-white hover:text-redColor md:ease-in"'>
					Узнать больше
				</button>
			</div>
		</section>
	)
}