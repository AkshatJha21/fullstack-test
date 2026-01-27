import axios from 'axios';
import { useState } from 'react'

const CreateNotes = () => {
    const [text, setText] = useState("");

    const handleClick = async () => {
        try {
            const token = localStorage.getItem("token");
            await axios.post("http://localhost:3000/api/notes", {
                text,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setText("");
            window.location.reload();
        } catch (error) {
            console.error("Failed to login: ", error);
        }
    }
  return (
    <div className='w-[90%] mx-auto flex flex-col border mt-4 border-gray-200 rounded-md px-4 py-2 shadow-sm'>
        <textarea 
            placeholder='Enter a note...' 
            className='border my-2 border-gray-200 py-2 px-3 w-full rounded-md'
            onChange={(e) => {
            setText(e.target.value);
            }}
            value={text}
        />
        <button 
            onClick={handleClick} 
            className='bg-zinc-900 w-[20%] ml-auto p-2 my-2 text-white rounded-md cursor-pointer hover:bg-zinc-700 transition'
        >
            Create
        </button>
    </div>
  )
}

export default CreateNotes
