"use client";

import Link from 'next/link'

const LoginPage = () => {
  return (
    <div className='bg-opacity-60 bg-black h-screen flex items-center justify-center'>
      <div className='bg-white flex flex-col w-full sm:w-2/3 lg:w-1/3 p-6 rounded-md shadow-md'>
        <h1 className='text-2xl font-semibold mb-2'>Login</h1>
        <p className='text-gray-500 mb-4 font-medium'>Enter your details to continue</p>
        <div className='flex flex-col mb-2'>
          <p className='text-sm font-medium'>Email</p>
          <input 
            placeholder='johndoe@email.com' 
            type="email" 
            id="email"
            className='border-2 my-2 border-gray-300 py-2 px-3 w-full rounded-md'
            onChange={() => {}}
          />
        </div>
        <div className='flex flex-col mb-2'>
          <p className='text-sm font-medium'>Password</p>
          <input 
            type="password" 
            id="password"
            className='border-2 my-2 border-gray-300 py-2 px-3 w-full rounded-md'
            onChange={() => {}}
          />
        </div>
        <button onClick={() => {}} className='bg-black p-2 my-2 text-white rounded-md cursor-pointer hover:bg-opacity-80 transition'>Login</button>
        <div className='flex justify-center my-2 gap-x-2'>
          Don`&apos;`t have an account?
          <Link href='/signup'>
            <p className='underline'>Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
