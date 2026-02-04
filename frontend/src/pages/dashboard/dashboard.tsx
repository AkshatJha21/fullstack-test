import { useState } from 'react';
import Sidebar from '../../components/common/sidebar';
import CreateNotes from '../../components/common/create_notes';

const Dashboard = () => {
  const [openCreate, setOpenCreate] = useState(false);
  return (
    <div className='h-screen w-full flex'>
        <Sidebar onCreate={() => setOpenCreate(true)}/>
        {openCreate && (
          <CreateNotes />
        )}
    </div>
  )
}

export default Dashboard
