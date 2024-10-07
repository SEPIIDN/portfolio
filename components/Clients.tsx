import React from 'react';
import { companies, testimonials } from '../data';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';

const Clients = () => {
  return (
    <div id='testimonials' className='py-20'>
      <h1 className='heading'>
        Kind Words From
        <span className='text-purple'>
          {' '}
          satisfied clients
        </span>
      </h1>
      <div className='flex flex-col items-center'>
        <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden'>
          <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='slow'
          />
          <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 lg:mt-10'>
            {companies.map(
              ({ id, img, name, nameImg }) => (
                <div
                  key={id}
                  className='flex flex-row items-center gap-2'
                >
                  <img
                    src={img}
                    alt={name}
                    className={` ${
                      id === 5
                        ? 'md:w-16 w-8'
                        : 'md:w-10 w-5'
                    }`}
                  />
                  <p className='text-white font-bold'>
                    {name}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Clients;
