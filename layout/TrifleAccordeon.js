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
                    <img src='/images/icons/icons/trifle_1.png'></img>
                  </div>
                  <span>Трайфл "Сникерс"</span>
                </div>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-12 w-12 text-redColor transition-all`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 py-4 bg-red-100 rounded-lg">
                <div className='flex gap-4'>
                  <div className='w-1/3 pr-4'>
                    <img
                      className='overflow-hidden rounded-3xl'
                      src='https://ik.imagekit.io/i7lh9dcka/trifle/trifle_1?ik-sdk-version=javascript-1.4.3&updatedAt=1671465928729' alt='trifleImage'>
                    </img>
                  </div>
                  <div className='w-3/5 '>
                    <ul>
                      <li className='li-marker'>шоколадный бисквит</li>
                      <li className='li-marker'>карамель</li>
                      <li className='li-marker'>арахис</li>
                      <li className='li-marker'>классический крем-чиз</li>
                    </ul>
                    <div className=''>
                      <div className='flex items-center py-4 '>
                        <div className='w-8'>
                          <img src='/images/icons/icons/weight.png' alt="weight:"></img>
                        </div>
                        <div className='px-4'>Заказ от 4 шт</div>
                      </div>
                      <div className='flex items-center p2-4 '>
                        <div className='w-8 '>
                          <img src='/images/icons/icons/ruble.png' alt="costs:"></img>
                        </div>
                        <div className='px-4'>150 р/шт</div>
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
                    <img src='/images/icons/icons/trifle_2.png'></img>
                  </div>
                  <span>Трайфл "Рафаэлло"</span>
                </div>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-12 w-12 text-redColor transition-all`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 py-4 bg-red-100 rounded-lg">
                <div className='flex gap-4'>
                  <div className='w-1/3 pr-4'>
                    <img
                      className='overflow-hidden rounded-3xl'
                      src='https://ik.imagekit.io/i7lh9dcka/trifle/trifle_2?ik-sdk-version=javascript-1.4.3&updatedAt=1671466016507' alt='trifleImage'>
                    </img>
                  </div>
                  <div className='w-3/5 '>
                    <ul>
                      <li className='li-marker'>минадальный бисквит</li>
                      <li className='li-marker'>кокосовый крем-чиз</li>
                      <li className='li-marker'>миндаль</li>
                      <li className='li-marker'>сгущенное молоко</li>
                    </ul>
                    <div className=''>
                      <div className='flex items-center py-4 '>
                        <div className='w-8'>
                          <img src='/images/icons/icons/weight.png' alt="weight:"></img>
                        </div>
                        <div className='px-4'>Заказ от 4 шт</div>
                      </div>
                      <div className='flex items-center p2-4 '>
                        <div className='w-8 '>
                          <img src='/images/icons/icons/ruble.png' alt="costs:"></img>
                        </div>
                        <div className='px-4'>150 р/шт</div>
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
                    <img src='/images/icons/icons/trifle_3.png'></img>
                  </div>
                  <span>Трайфл "Тирамису"</span>
                </div>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-12 w-12 text-redColor transition-all`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 py-4 bg-red-100 rounded-lg">
                <div className='flex gap-4'>
                  <div className='w-1/3 pr-4'>
                    <img
                      className='overflow-hidden rounded-3xl'
                      src='https://ik.imagekit.io/i7lh9dcka/trifle/trifle_3?ik-sdk-version=javascript-1.4.3&updatedAt=1671466002055' alt='trifleImage'>
                    </img>
                  </div>
                  <div className='w-3/5 '>
                    <ul>
                      <li className='li-marker'>печенье "савоярди" в кофейной пропитке</li>
                      <li className='li-marker'>крем на основе маскарпоне</li>
                      <li className='li-marker'>какао</li>
                    </ul>
                    <div className=''>
                      <div className='flex items-center py-4 '>
                        <div className='w-8'>
                          <img src='/images/icons/icons/weight.png' alt="weight:"></img>
                        </div>
                        <div className='px-4'>Заказ от 4 шт</div>
                      </div>
                      <div className='flex items-center p2-4 '>
                        <div className='w-8 '>
                          <img src='/images/icons/icons/ruble.png' alt="costs:"></img>
                        </div>
                        <div className='px-4'>150 р/шт</div>
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

