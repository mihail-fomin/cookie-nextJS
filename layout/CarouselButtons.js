import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export const PrevButton = ({ enabled, onClick }) => (
	<button
		className="absolute items-center justify-center w-16 h-16 -translate-y-1/2 bg-transparent border-0 cursor-pointer top-1/2 touch-manipulation outline-0 fill-[#b5363e] p-0 left-8"
		onClick={onClick}
		disabled={!enabled}
	>
		<div className='overflow-hidden bg-white rounded-full hover:drop-shadow-lg'>
			<div> <ChevronLeftIcon className="text-red-700 " /></div>
		</div>
	</button >
);

export const NextButton = ({ enabled, onClick }) => (
	<button
		className="absolute items-center justify-center w-16 h-16 -translate-y-1/2 bg-transparent border-0 cursor-pointer top-1/2 touch-manipulation outline-0 fill-[#b5363e] p-0 right-8"
		onClick={onClick}
		disabled={!enabled}
	>
		<div className='overflow-hidden bg-white rounded-full hover:drop-shadow-lg'>
			<div> <ChevronRightIcon className="text-red-700 " /></div>
		</div>
	</button>
);
