import { useState } from 'react';
import Sidebar from '../../components/common/sidebar';
import CreateNotes from '../../components/common/create_notes';
import NotdView from '../../components/common/notd_view';

const Dashboard = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [showNOTD, setShowNOTD] = useState(true);
  return (
    <div className='h-screen w-full flex'>
        <Sidebar onCreate={() => setOpenCreate(true)}/>
        <div className='bg-slate-100 w-full'>
          {openCreate && (
            <CreateNotes />
          )}
          {showNOTD && (
            <NotdView />
          )}
        </div>
    </div>
  )
}

export default Dashboard
