import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'


export default function Accordeon() {
 return (
  <div className="w-full px-4 ">
   <div className="flex flex-col w-full max-w-full gap-3 p-2 mx-auto bg-white rounded-2xl">
    <Disclosure>
     {({ open }) => (
      <>
       <Disclosure.Button className="accordion-btn">
        <div className='flex gap-4'>
         <div className='w-8 '>
          <Image
           objectFit="cover"
           src='/images/icons/icons/compact-disk.png'
           alt='discIcon'
           width='32'
           height='32'
           priority
          />
         </div>
         <span>Шоколадные диски</span>
        </div>
        <ChevronUpIcon
         className={`${open ? 'rotate-180 transform' : ''
          } h-12 w-12 text-redColor transition-all`}
        />
       </Disclosure.Button>
       <Disclosure.Panel className="px-4 py-4 bg-red-100 rounded-lg">
        <div className='flex gap-4'>
         <div className='relative w-1/3 pr-4 overflow-hidden rounded-3xl'>
          <Image
           objectFit="cover"
           src='/images/goods/choco/chocolate_disk.jpg'
           alt='discImage'
           fill
           priority
          />
         </div>
         <div className='w-3/5 '>
          Набор шоколадных клубничных дисков с сублимированными ягодами (клубника, малина) и шоколадными шариками криспи.
          <div className='flex'>
           <div className='flex items-center py-4 '>
            <div className='relative w-12 h-12 rounded-xl'>
             <Image
              objectFit="cover"
              src='/images/icons/icons/weight.png'
              alt='weight:'
              fill
              priority
             />
            </div>
            <div className='px-4'>66 г</div>
           </div>
           <div className='flex items-center p2-4 '>
            <div className='relative w-12 h-12'>
             <Image
              objectFit="cover"
              src='/images/icons/icons/ruble.png'
              alt='cost:'
              fill
              priority
             />
            </div>
            <div className='px-4'>250 р</div>
           </div>
          </div>
         </div>
        </div>
       </Disclosure.Panel>
      </>
     )}
    </Disclosure>
    <Disclosure>
     {({ open }) => (
      <>
       <Disclosure.Button className="accordion-btn">
        <div className='flex gap-4'>
         <div className='w-8 '>
          <Image
           objectFit="cover"
           src='/images/icons/icons/chocolate_1.png'
           alt='chocoIcon1'
           width='32'
           height='32'
           priority
          />
         </div>
         <span>Клубчничный бельгийский</span>
        </div>
        <ChevronUpIcon
         className={`${open ? 'rotate-180 transform' : ''
          } h-12 w-12 text-redColor transition-all`}
        />
       </Disclosure.Button>
       <Disclosure.Panel className="px-4 py-4 bg-red-100 rounded-lg">
        <div className='flex gap-4'>
         <div className='relative w-2/5 pr-4 overflow-hidden rounded-3xl'>
          <Image
           objectFit="cover"
           src='/images/goods/choco/chocolate_2.jpg'
           alt='discImage'
           fill
           priority
          />
         </div>
         <div className='w-3/5 '>
          Клубничный бельгийский шоколад с сублимированными ягодами (клубника и малина) и шоколадными шариками криспи.
          <div className='flex'>
           <div className='flex items-center py-4 '>
            <div className='relative w-12 h-12 rounded-xl'>
             <Image
              objectFit="cover"
              src='/images/icons/icons/weight.png'
              alt='weight:'
              fill
              priority
             />
            </div>
            <div className='px-4'>100 г</div>
           </div>
           <div className='flex items-center p2-4 '>
            <div className='relative w-12 h-12'>
             <Image
              objectFit="cover"
              src='/images/icons/icons/ruble.png'
              alt='cost:'
              fill
              priority
             />
            </div>
            <div className='px-4'>350 р</div>
           </div>
          </div>
         </div>
        </div>
       </Disclosure.Panel>
      </>
     )}
    </Disclosure>
    <Disclosure>
     {({ open }) => (
      <>
       <Disclosure.Button className="accordion-btn">
        <div className='flex gap-4'>
         <div className='w-8 '>
          <Image
           objectFit="cover"
           src='/images/icons/icons/chocolate_2.png'
           alt='chocoIcon2'
           width='32'
           height='32'
           priority
          />
         </div>
         <span>Молочный итальянский</span>
        </div>
        <ChevronUpIcon
         className={`${open ? 'rotate-180 transform' : ''
          } h-12 w-12 text-redColor transition-all`}
        />
       </Disclosure.Button>
       <Disclosure.Panel className="px-4 py-4 bg-red-100 rounded-lg">
        <div className='flex gap-4'>
         <div className='relative w-2/5 pr-4 overflow-hidden rounded-3xl'>
          <Image
           objectFit="cover"
           src='/images/goods/choco/chocolate_3.jpg'
           alt='discImage'
           fill
           priority
          />
         </div>
         <div className='w-3/5 '>
          Молочный итальянский шоколад с воздушным рисом в карамели и апельсиновыми цукатами                    <div className='flex'>
           <div className='flex items-center py-4 '>
            <div className='relative w-12 h-12 rounded-xl'>
             <Image
              objectFit="cover"
              src='/images/icons/icons/weight.png'
              alt='weight:'
              fill
              priority
             />
            </div>
            <div className='px-4'>100 г</div>
           </div>
           <div className='flex items-center p2-4 '>
            <div className='relative w-12 h-12'>
             <Image
              objectFit="cover"
              src='/images/icons/icons/ruble.png'
              alt='cost:'
              fill
              priority
             />
            </div>
            <div className='px-4'>250 р</div>
           </div>
          </div>
         </div>
        </div>
       </Disclosure.Panel>
      </>
     )}
    </Disclosure>
    <Disclosure>
     {({ open }) => (
      <>
       <Disclosure.Button className="accordion-btn">
        <div className='flex gap-4'>
         <div className='w-8 '>
          <Image
           objectFit="cover"
           src='/images/icons/icons/chocolate_3.png'
           alt='discIcon3'
           width='32'
           height='32'
           priority
          />
         </div>
         <span>Белый бельгийский</span>
        </div>
        <ChevronUpIcon
         className={`${open ? 'rotate-180 transform' : ''
          } h-12 w-12 text-redColor transition-all`}
        />
       </Disclosure.Button>
       <Disclosure.Panel className="px-4 py-4 bg-red-100 rounded-lg">
        <div className='flex gap-4'>
         <div className='relative w-2/5 pr-4 overflow-hidden rounded-3xl'>
          <Image
           objectFit="cover"
           src='/images/goods/choco/chocolate_4.jpg'
           alt='discImage'
           fill
           priority
          />
         </div>
         <div className='w-3/5 '>
          Белый бельгийский шоколад с миндалем и кокосовой стружкой.
          <div className='flex'>
           <div className='flex items-center py-4 '>
            <div className='relative w-12 h-12 rounded-xl'>
             <Image
              objectFit="cover"
              src='/images/icons/icons/weight.png'
              alt='weight:'
              fill
              priority
             />
            </div>
            <div className='px-4'>100 г</div>
           </div>
           <div className='flex items-center p2-4 '>
            <div className='relative w-12 h-12'>
             <Image
              objectFit="cover"
              src='/images/icons/icons/ruble.png'
              alt='cost:'
              fill
              priority
             />
            </div>
            <div className='px-4'>300 р</div>
           </div>
          </div>
         </div>
        </div>
       </Disclosure.Panel>
      </>
     )}
    </Disclosure>
    <Disclosure>
     {({ open }) => (
      <>
       <Disclosure.Button className="accordion-btn">
        <div className='flex gap-4'>
         <div className='w-8 '>
          <Image
           objectFit="cover"
           src='/images/icons/icons/chocolate_1.png'
           alt='discIcon'
           width='32'
           height='32'
           priority
          />
         </div>
         <span>Шоколад &quot;Пина колада&quot;</span>
        </div>
        <ChevronUpIcon
         className={`${open ? 'rotate-180 transform' : ''
          } h-12 w-12 text-redColor transition-all`}
        />
       </Disclosure.Button>
       <Disclosure.Panel className="px-4 py-4 bg-red-100 rounded-lg">
        <div className='flex gap-4'>
         <div className='relative w-2/5 pr-4 overflow-hidden rounded-3xl'>
          <Image
           objectFit="cover"
           src='/images/goods/choco/chocolate_5.jpg'
           alt='discImage'
           fill
           priority
          />
         </div>
         <div className='w-3/5 '>
          Белый бельгийский шоколад с миндалем и кокосовой стружкой.
          <div className='flex'>
           <div className='flex items-center py-4 '>
            <div className='relative w-12 h-12 rounded-xl'>
             <Image
              objectFit="cover"
              src='/images/icons/icons/weight.png'
              alt='weight:'
              fill
              priority
             />
            </div>
            <div className='px-4'>100 г</div>
           </div>
           <div className='flex items-center p2-4 '>
            <div className='relative w-12 h-12'>
             <Image
              objectFit="cover"
              src='/images/icons/icons/ruble.png'
              alt='cost:'
              fill
              priority
             />
            </div>
            <div className='px-4'>350 р</div>
           </div>
          </div>
         </div>
        </div>
       </Disclosure.Panel>

       {/* <Disclosure.Panel className="px-4 pt-4 pb-2 transition-all">
                <div className='flex gap-4'>
                  <div className='relative w-2/5 h-64 pr-4'>
                    <Image
                      objectFit="cover"
                      src='/images/goods/choco/chocolate_5.jpg'
                      alt='ChocoImage'
                      fill
                      priority
                    />
                  </div>
                  <div className='w-3/5 '>
                    Белый бельгийский шоколад с кусочками сублимированного ананаса и кокосовой стружкой
                    <div className='flex items-center py-4 '>
                      <div className='relative w-12 h-12 rounded-xl'>
                        <Image
                          objectFit="cover"
                          src='/images/icons/icons/weight.png'
                          alt='weight:'
                          fill
                          priority
                        />
                      </div>
                      <div className='px-4'>100 г</div>
                    </div>
                    <div className='flex items-center p2-4 '>
                      <div className='relative w-12 h-12'>
                        <Image
                          objectFit="cover"
                          src='/images/icons/icons/ruble.png'
                          alt='cost:'
                          fill
                          priority
                        />
                      </div>
                      <div className='px-4'>350 р</div>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel> */}
      </>
     )}
    </Disclosure>
   </div >
  </div >
 )
}
