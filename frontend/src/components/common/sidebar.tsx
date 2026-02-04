
const Sidebar = () => {
  return (
    <div className="h-full w-[20%] bg-slate-50">
        <div className="w-full flex p-4 items-center border-b border-slate-200">
            <p className="flex-1 font-black text-lg text-blue-900">4ever</p>
            <button className="border border-slate-200 px-2 py-1 text-sm rounded hover:bg-slate-200 cursor-pointer transition-all">Logout</button>
        </div>
    </div>
  )
}

export default Sidebar
