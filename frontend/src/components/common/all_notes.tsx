import axios from 'axios';
import { useEffect, useState } from 'react'
import Notes from './notes';

export type Note = {
  _id: string;
  text: string;
  user: string;
};

const AllNotes = () => {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        const getNotes = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:3000/api/notes", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const allNotes = response.data.notes;
                setNotes(allNotes);
            } catch (error) {
                console.error("Could not get notes: ", error);
            }
        }
        getNotes();
    }, []);
  return (
    <div className='w-[90%] mx-auto my-4'>
        <p className='text-lg font-bold mt-4 w-full border-b border-gray-100'>Your Notes</p>
        <div className='flex flex-col my-2'>
            <Notes notes={notes} />
        </div>
    </div>
  )
}

export default AllNotes
