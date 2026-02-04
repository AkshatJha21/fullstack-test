import { useNavigate } from "react-router-dom";
import AllNotes from "./all_notes"

const Sidebar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/login');
    }
  return (
    <div className="h-full w-68.75 bg-slate-50 flex flex-col px-2">
        <div className="w-full flex px-2 py-4 mb-2 items-center border-b border-slate-200">
            <p className="flex-1 font-black text-xl text-blue-900">4ever</p>
            <button onClick={handleLogout} className="border border-slate-200 px-2 py-1 text-sm rounded hover:bg-slate-200 cursor-pointer transition-all">Logout</button>
        </div>
        <button className="px-4 py-2 m-2 border font-medium border-slate-200 rounded text-sm hover:bg-slate-200 cursor-pointer transition-all">+ New Note</button>
        <button className="px-4 py-2 m-2 border font-medium border-slate-200 rounded text-sm hover:bg-slate-200 cursor-pointer transition-all">Note of the Day</button>
        <div className="m-2 ">
            <p className="flex-1 font-bold text-blue-900 text-lg">Your Notes</p>
            <div className="flex flex-col">
                <AllNotes/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
