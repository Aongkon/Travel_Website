import React from 'react';
import Image from 'next/image';

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='max-container padding-container w-full pb-24'>
        <Image
        src="/camp.svg" 
        alt='camp'
        height={50}
        width={50}
        />
        <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
          We are here for you
        </p>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10 xl:-w-[390px]'>
          <h2 className='bold-40 lg:bold-64'>Guide You to Easy Path</h2>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
            Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain
          </p>
       
        </div>
      </div>

      <div className='flexCenter max-container relative w-full'>
        <Image
         src="/boat.png"
         alt='boat'
         height={500}
         width={1440}
         className='rounded-[40px]'
        />

        <div className=' absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl shadow-md md:left-[5%] lg:top-20'>

          <Image
          src="/meter.svg"
          alt='meter'
          width={16}
          height={158}
          className='h-full w-auto'
          />


          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gay-20'>Destination</p>
                <p className='bold-16 text-green-50'>48 min</p>
              </div>
              <p className='bold-20 mt-2'>Aguas Calientes</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className='regular-16 text-gray-30'>Start track</p>
              <p className='bold-20 mt-2 whitespace-nowrap'>Wonorejo Pasuruan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guide;
