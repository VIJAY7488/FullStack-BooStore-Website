import React from 'react'

function Cards({items}) {
    
  return (
    <>
     <div className='mt-4 my-3 p-3'>
     <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src={items.image} alt="Book" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {items.name}
      <div className="badge badge-secondary">{items.category}</div>
    </h2>
    <p>{items.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${items.price}</div> 
      <div className="px-2 py-1 rounded-full border-[2px] badge badge-outline cursor-pointer hover:text-white hover:bg-pink-500 duration-200">BUY Now</div>
    </div>
  </div>
 </div>
</div>
    </>
  )
}

export default Cards