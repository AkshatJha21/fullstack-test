"use client";

import Sidebar from '@/components/layout/sidebar';
import { useState } from 'react';

const Dashboard = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [showNOTD, setShowNOTD] = useState(true);

  const handleOpenCreateView = () => {
    setOpenCreate(true);
    setShowNOTD(false);
  }

  const handleShowNOTDView = () => {
    setShowNOTD(true);
    setOpenCreate(false);
  }
  return (
    <div className='h-screen w-full flex'>
        <Sidebar onCreate={handleOpenCreateView} showNOTD={handleShowNOTDView}/>
        <div className='bg-slate-100 w-full'>
          {/* {openCreate && (
            <CreateNotes />
          )}
          {showNOTD && (
            <NotdView />
          )} */}
        </div>
    </div>
  )
}

export default Dashboard
