import Navbar from '../../components/common/navbar';
import CreateNotes from '../../components/common/create_notes';
import AllNotes from '../../components/common/all_notes';
import Sidebar from '../../components/common/sidebar';

const Dashboard = () => {

  return (
    <div className='h-screen w-full flex'>
        {/* <Navbar header='Dashboard' /> */}
        <Sidebar />
        <div className='flex flex-col m-auto'>
            <CreateNotes />
            <AllNotes />
        </div>
    </div>
  )
}

export default Dashboard
