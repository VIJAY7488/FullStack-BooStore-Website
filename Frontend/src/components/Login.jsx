import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // This line should log the form data
  };
     
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method = 'dailog'>
            {/* if there is a button in form, it will close the modal */}
            <Link 
            to='/'
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black"
            onClick={() => document.getElememntById("my_modal_3").close()}>✕
            </Link>
            <h3 className="font-bold text-lg  dark:text-black">Login</h3>
            <div className='mt-4 space-y-2'>
              <label htmlFor="email" className='dark:text-black'>Email</label>
              <br/>
              <input 
                id="email"
                type="email" 
                placeholder='Enter your email'
                className='w-80 px-3 py-1 border rounded-md outline-none dark:text-black'
                {...register("email", { required: true })}
              />
              <br/>
              {errors.email && <span className='text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
              <label htmlFor="password" className='dark:text-black'>Password</label>
              <br/>
              <input 
                id="password"
                type="password" 
                placeholder='Enter your password'
                className='w-80 px-3 py-1 border rounded-md outline-none dark:text-black' 
                {...register("password", { required: true })}
                autocomplete="current-password"
              /> 
              <br/>
              {errors.password && <span className='text-red-500'>This field is required</span>}  
            </div>
            <div className='mt-8 flex justify-around items-center'>
              <button type="submit" className='bg-pink-500 text-white px-4 py-2 rounded-md'>Login</button>
              <p className='dark:text-black'>Not registered? 
                <Link to='/Signup' className='underline text-blue-600 cursor-pointer'>Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
