import React from 'react'
import Book from "../assets/book.jpg"

function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
    <div className='w-full md:w-1/2 mt-12 md:mt-36 order-2 md:order-1'>
       <div className='space-y-8'>
        <h1 className='text-2xl md:text-4xl font-bold'>
            Hello, welcome here to learn something <span className='text-pink-500'>new everyday!!!</span>
        </h1>
        <p className='text-sm md:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ad, eveniet sequi architecto eum doloremque.
        </p>
        <input type="text" placeholder="Enter email to login" className="input input-bordered input-secondary w-full max-w-xs" />
       </div>
       <button className="btn btn-secondary mt-6">Secondary</button>
    </div>
    <div className='w-full md:w-1/2 mt-20 order-1'>
    <img  
    src={Book} 
    className='md:w-[550px] md:h-[460px] md:ml-12' 
    alt="book" />
    </div>
    </div>
    </>
  )
}

export default Banner