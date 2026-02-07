"use client";

import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const SignupPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        await axios.get('http://localhost:3000/api/users/me', {
        headers: {
            Authorization: `Bearer ${token}`
        }
        });
        router.push('/dashboard');
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    }

    checkAuth();
  }, [router]);

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/users/signup', {
        username,
        email,
        password
      });
      localStorage.setItem("token", response.data.token);
      router.push("/dashboard")
    } catch (error) {
      console.error("signup failed:", error);
    }
  }
  return (
    <div className='bg-opacity-60 bg-black h-screen flex items-center justify-center'>
      <div className='bg-white flex flex-col w-full sm:w-2/3 lg:w-1/3 p-6 rounded-md shadow-md'>
        <h1 className='text-2xl font-semibold mb-2'>Signup</h1>
        <p className='text-gray-500 mb-4 font-medium'>Enter your details to create an account</p>
        <div className='flex flex-col mb-2'>
          <p className='text-sm font-medium'>Username</p>
          <input 
            placeholder='john.doe' 
            type="text" 
            id="username"
            className='border-2 my-2 border-gray-300 py-2 px-3 w-full rounded-md'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className='flex flex-col mb-2'>
          <p className='text-sm font-medium'>Email</p>
          <input 
            placeholder='johndoe@email.com' 
            type="email" 
            id="email"
            className='border-2 my-2 border-gray-300 py-2 px-3 w-full rounded-md'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className='flex flex-col mb-2'>
          <p className='text-sm font-medium'>Password</p>
          <input 
            type="password" 
            id="password"
            className='border-2 my-2 border-gray-300 py-2 px-3 w-full rounded-md'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button onClick={handleSignup} className='bg-black p-2 my-2 text-white rounded-md cursor-pointer hover:bg-opacity-80 transition'>Signup</button>
        <div className='flex justify-center my-2 gap-x-2'>
          Already have an account?
          <Link href='/login'>
            <p className='underline'>Login</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
