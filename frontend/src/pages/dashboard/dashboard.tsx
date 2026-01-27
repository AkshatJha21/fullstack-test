import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/common/navbar';
import CreateNotes from '../../components/common/create_notes';

type Note = {
  _id: string;
  text: string;
  user: string;
};

const Dashboard = () => {
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
    <div className='h-screen w-full'>
        <Navbar header='Dashboard' />
        <div className='w-[50%] flex flex-col m-auto'>
            <CreateNotes />
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
    </div>
  )
}

export default Dashboard
