import Chocolate from './Chocolate'
import Cupkaes from './Cupcakes'
import Macarons from './Macarons'


export default function Assortment() {
	return (

		<section div className='py-10 bg-color300 text-redColor' >
			<div className='container mx-auto'>
				<h2
					className='text-5xl text-center font-fancy after:block after:bg-white after:h-1 after:w-24 after:mt-10 after:mx-auto'>
					Ассортимент
				</h2>
			</div>
			<Chocolate />
			<Cupkaes />
			<Macarons />

		</section >
	)
}