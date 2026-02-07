"use client";

import Sidebar from '@/components/layout/sidebar';
import CreateNotes from '@/components/notes/create_notes';
import NotdView from '@/components/notes/notd_view';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Dashboard = () => {
  const router = useRouter();
  const [openCreate, setOpenCreate] = useState(false);
  const [showNOTD, setShowNOTD] = useState(true);

  const handleOpenCreateView = () => {
    router.push("/notes/new");
  }

  const handleShowNOTDView = () => {
    setShowNOTD(true);
    setOpenCreate(false);
  }
  return (
    <div className='h-screen w-full flex'>
        <Sidebar onCreate={handleOpenCreateView} showNOTD={handleShowNOTDView}/>
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
