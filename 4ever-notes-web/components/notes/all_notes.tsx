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
                const response = await axios.get("http://localhost:3000/api/notes/all", {
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
    <div className='w-full'>
        <div className='flex flex-col my-2'>
            <Notes notes={notes} />
        </div>
    </div>
  )
}

export default AllNotes
