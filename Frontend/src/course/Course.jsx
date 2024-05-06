import React from 'react'
import lists from '../lists.json'
import Cards from '../components/Cards'
import {Link} from 'react-router-dom'


function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container max-auto md:px-20 px-4'>
        <div className='pt-32 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>
                We're delighted to have you {""}
                <span className='text-pink-500'>Here! :)</span>
            </h1>
            <p className='mt-12'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis numquam, non, soluta eos alias facere placeat ratione fugit sapiente magni, dolorum assumenda itaque error quaerat tempora magnam quae voluptate. Id?
             Sapiente vel porro, impedit ullam, exercitationem inventore corporis adipisci quasi itaque fuga odit quidem ratione error dolorem neque nihil? Ratione voluptatem, non neque recusandae harum sunt enim quaerat fugiat consequatur?
            </p>
            <Link to='/'>
              <button className='mt-6 px-4 py-2 rounded-md bg-pink-500 text-white'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
           {
            lists.map((items) =>(
                <Cards key={items.id} items={items}/>
            ))
           }
        </div>
      </div>
    </>
  )
}

export default Course