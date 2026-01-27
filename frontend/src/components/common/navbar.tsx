import React from 'react'
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
    header: string;
}

const Navbar = ({ header }: NavbarProps) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/login');
    }
  return (
    <div className='w-screen text-white p-4 flex items-center bg-black'>
        <p className='flex flex-1'>{header}</p>
        <button className='bg-zinc-900 py-2 px-4 rounded-md cursor-pointer hover:bg-zinc-800 border border-zinc-700 transition' onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default Navbar
