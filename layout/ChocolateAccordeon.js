import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'


export default function Accordeon() {
  return (
    <div className="w-full px-4 ">
      <div className="flex flex-col gap-3 p-2 mx-auto bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="accordion-btn">
                <div className='flex gap-4'>
                  <div className='w-8 '>
                    <img src='/images/icons/icons/compact-disk.png'></img>
                  </div>
                  <span>Шоколадные диски</span>
                </div>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-12 aspect-square text-redColor transition-all`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 py-4 bg-red-100 rounded-lg">
                <div className='flex gap-4'>
                  <div className='w-1/3 '>
                    <img
                      className='overflow-hidden rounded-3xl'
                      src="https://ik.imagekit.io/i7lh9dcka/chocolate/tr:ar-4-3,w-300/chocolate_disk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670513910965" alt="">
                    </img>
                  </div>
                  <div className='w-3/5 '>
                    Набор шоколадных клубничных дисков с сублимированными ягодами (клубника, малина) и шоколадными шариками криспи.
                    <div className='flex'>
                      <div className='flex items-center py-4 '>
                        <div className='w-8'>
                          <img src='/images/icons/icons/weight.png' alt="weight:"></img>
                        </div>
                        <div className='px-4'>66 г</div>
                      </div>
                      <div className='flex items-center p2-4 '>
                        <div className='w-8 '>
                          <img src='/images/icons/icons/ruble.png' alt="costs:"></img>
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
                    <img src='/images/icons/icons/chocolate_1.png' alt="chocoIcon1"></img>
                  </div>
                  <span>Клубчничный бельгийский</span>
                </div>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-12 text-redColor transition-all`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 py-4 bg-red-100 rounded-lg">
                <div className='flex gap-4'>
                  <div className='relative w-2/5 pr-4 overflow-hidden rounded-3xl'>
                    <img
                      className='overflow-hidden rounded-3xl'
                      src="https://ik.imagekit.io/i7lh9dcka/chocolate/tr:w-300/chocolate_2-2?ik-sdk-version=javascript-1.4.3&updatedAt=1670515170803" alt="">
                    </img>
                  </div>
                  <div className='w-3/5 '>
                    Клубничный бельгийский шоколад с сублимированными ягодами (клубника и малина) и шоколадными шариками криспи.
                    <div className='flex'>
                      <div className='flex items-center py-4 '>
                        <div className='w-8'>
                          <img src='/images/icons/icons/weight.png' alt="weight:"></img>
                        </div>
                        <div className='px-4'>100 г</div>
                      </div>
                      <div className='flex items-center p2-4 '>
                        <div className='w-8'>
                          <img src='/images/icons/icons/ruble.png' alt="costs:"></img>
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
                    <img src='/images/icons/icons/chocolate_2.png' alt="chocoIcon1"></img>
                  </div>
                  <span>Молочный итальянский</span>
                </div>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-12 text-redColor transition-all`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 py-4 bg-red-100 rounded-lg">
                <div className='flex gap-4'>
                  <div className='w-2/5'>
                    <img
                      className='overflow-hidden rounded-3xl'
                      src="https://ik.imagekit.io/i7lh9dcka/chocolate/tr:w-300/chocolate_3-2?ik-sdk-version=javascript-1.4.3&updatedAt=1670515602983" alt="">
                    </img>
                  </div>
                  <div className='w-3/5 '>
                    Молочный итальянский шоколад с воздушным рисом в карамели и апельсиновыми цукатами
                    <div className='flex'>
                      <div className='flex items-center py-4 '>
                        <div className='w-8 '>
                          <img src='/images/icons/icons/weight.png' alt="weight:"></img>
                        </div>
                        <div className='px-4'>100 г</div>
                      </div>
                      <div className='flex items-center p2-4 '>
                        <div className='w-8 '>
                          <img src='/images/icons/icons/ruble.png' alt="costs:"></img>
                        </div>
                        <div className='px-4'>260 р</div>
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
                  <div className='w-8'>
                    <img src='/images/icons/icons/chocolate_3.png' alt="chocoIcon"></img>
                  </div>
                  <span>Белый бельгийский</span>
                </div>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-12 text-redColor transition-all`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 py-4 bg-red-100 rounded-lg">
                <div className='flex gap-4'>
                  <div className='w-2/5'>
                    <img
                      className='overflow-hidden rounded-3xl'
                      src="https://ik.imagekit.io/i7lh9dcka/chocolate/tr:w-300/chocolate_4-2?ik-sdk-version=javascript-1.4.3&updatedAt=1670515602983" alt="">
                    </img>
                  </div>
                  <div className='w-3/5 '>
                    Белый бельгийский шоколад с миндалем и кокосовой стружкой.
                    <div className='flex'>
                      <div className='flex items-center py-4 '>
                        <div className='w-8 '>
                          <img src='/images/icons/icons/weight.png' alt="weight:"></img>
                        </div>
                        <div className='px-4'>100 г</div>
                      </div>
                      <div className='flex items-center p2-4 '>
                        <div className='w-8 '>
                          <img src='/images/icons/icons/ruble.png' alt="costs:"></img>
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
                  <div className='w-8'>
                    <img src='/images/icons/icons/chocolate_1.png' alt="chocoIcon"></img>
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
                  <div className='w-2/5'>
                    <img
                      className='overflow-hidden rounded-3xl'
                      src="https://ik.imagekit.io/i7lh9dcka/chocolate/tr:w-300/chocolate_5-2?ik-sdk-version=javascript-1.4.3&updatedAt=1670515602983" alt="">
                    </img>
                  </div>
                  <div className='w-3/5 '>
                    Белый бельгийский шоколад с кусочками сублимированного ананаса и кокосовой стружкой
                    <div className='flex'>
                      <div className='flex items-center py-4 '>
                        <div className='w-8 '>
                          <img src='/images/icons/icons/weight.png' alt="weight:"></img>
                        </div>
                        <div className='px-4'>100 г</div>
                      </div>
                      <div className='flex items-center p2-4 '>
                        <div className='w-8 '>
                          <img src='/images/icons/icons/ruble.png' alt="costs:"></img>
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
      </div >
    </div >
  )
}
