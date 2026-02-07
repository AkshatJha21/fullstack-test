import React from 'react'
import { Note } from './all_notes'

interface NoteProps {
    notes: Note[];
}

const Notes = ({ notes }: NoteProps) => {
  return (
    <div>
        {notes.map((note) => (
            <div
                key={note._id}
                className="my-2"
            >
                <NoteCard text={note.text} />
            </div>
        ))}
    </div>
  )
}

const NoteCard = ({ text }: { text: string }) => {
    return (
        <div className='px-4 py-2 border font-medium border-slate-200 rounded text-sm hover:bg-slate-200 cursor-pointer transition-all'>
            {text}
        </div>
    )
}

export default Notes
