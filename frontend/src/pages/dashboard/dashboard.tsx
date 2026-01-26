import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Note = {
  _id: string;
  text: string;
  user: string;
};

const Dashboard = () => {
    const [text, setText] = useState("");
    const [notes, setNotes] = useState<Note[]>([]);
    const navigate = useNavigate();

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

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/login');
    }

    const handleClick = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post("http://localhost:3000/api/notes", {
                text,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setNotes((prev) => [...prev, response.data.note]);
            setText("");
            console.log(response);
        } catch (error) {
            console.error("Failed to login: ", error);
        }
    }
  return (
    <div className='h-screen w-[50%] flex flex-col m-auto'>
      Dashboard
      <button className='bg-black text-white p-2' onClick={handleLogout}>
        Logout
      </button>
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

export default Dashboard
