import Navbar from '../../components/common/navbar';
import CreateNotes from '../../components/common/create_notes';
import AllNotes from '../../components/common/all_notes';

const Dashboard = () => {

  return (
    <div className='h-screen w-full'>
        <Navbar header='Dashboard' />
        <div className='flex flex-col m-auto'>
            <CreateNotes />
            <AllNotes />
        </div>
    </div>
  )
}

export default Dashboard
