import Chocolate from './Chocolate'
import Cupkaes from './Cupcakes'
import Macarons from './Macarons'
import Trifle from './Trifle'
import Cakes from './Cakes'
import Bento from './Bento'


export default function Assortment() {
	return (
		<section className='py-10 text-red-700 bg-red-200' >
			<div className='container mx-auto'>
				<h2
					className='text-5xl text-center font-fancy after:block after:bg-white after:h-1 after:w-24 after:mt-10 after:mx-auto'>
					Ассортимент
				</h2>
			</div>
			<Chocolate />
			<Cupkaes />
			<Macarons />
			<Trifle />
			<Cakes />
			<Bento />
		</section>
	)
}
