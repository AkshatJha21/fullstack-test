import axios from 'axios';
import { useEffect, useState } from 'react'

type Note = {
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
    <div>
      <div className='flex flex-col my-2'>
            <div 
                className='border-2 my-2 border-gray-300 py-2 px-3 w-full rounded-md'
            >
                {notes.map((note) => (
    <div
        key={note._id}
        className="border-b py-2"
    >
        {note.text}
    </div>
    ))}
            </div>
            </div>
    </div>
  )
}

export default AllNotes
