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
    <>
    <div className='flex flex-col my-2'>
            <input 
                placeholder='Enter notes...' 
                type="text"
                className='border-2 my-2 border-gray-300 py-2 px-3 w-full rounded-md'
                onChange={(e) => {
                setText(e.target.value);
                }}
                value={text}
            />
            </div>
            <button onClick={handleClick} className='bg-black p-2 my-2 text-white rounded-md cursor-pointer hover:bg-opacity-80 transition'>Create</button>
    </>
  )
}

export default CreateNotes
