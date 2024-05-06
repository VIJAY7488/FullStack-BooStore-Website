import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form';

function Signup() {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // This line should log the form data
  };

  return (
    <>
       <div className='flex h-screen items-center justify-center'>
        <div className="w-[600px]">
          <div className="modal-box">
           <form method="div" onSubmit={handleSubmit(onSubmit)}>
             {/* if there is a button in form, it will close the modal */}
             <Link to='/'>
             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black">✕</button>
             </Link>
          
        <h3 className="font-bold text-lg  dark:text-black">Signup</h3>
        <div className='mt-4 space-y-2'>
        <span className='dark:text-black'>Name</span>
            <br/>
        <input type="text" placeholder='Enter your name'
        className='w-80 px-3 py-1 border rounded-md outline-none dark:text-black'
        {...register("name", { required: true })}/>
        <br/>
              {errors.email && <span className='text-red-500'>This field is required</span>}
        </div>
        <div className='mt-4 space-y-2'>
            <span className='dark:text-black'>Email</span>
               <br/>
            <input type="email" placeholder='Enter your email'
            className='w-80 px-3 py-1 border rounded-md outline-none dark:text-black' 
            {...register("email", { required: true })}/>  
            <br/>
              {errors.email && <span className='text-red-500'>This field is required</span>} 
        </div>
        <div className='mt-4 space-y-2'>
            <span className='dark:text-black'>Password</span>
               <br/>
            <input type="password" placeholder='Enter your password'
            className='w-80 px-3 py-1 border rounded-md outline-none dark:text-black' 
            {...register("password", { required: true })}/> 
            <br/>
              {errors.email && <span className='text-red-500'>This field is required</span>}  
        </div>
        <div className='mt-8 flex justify-around items-center'>
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md'>Signup</button>
            <p className='dark:text-black text-md'>Have account? 
              <button className='underline text-blue-600 cursor-pointer'
                onClick={() => document.getElementById('my_modal_3').showModal()}>
                Login</button>{""}
                <Login/>
                </p>
        </div>
        </form>
     </div>
    </div>
  </div>
    </>
  )
}

export default Signup