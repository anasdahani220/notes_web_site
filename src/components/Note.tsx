import { Note as typeNote } from '@/db/schemas/notes';
import React from 'react'
import Editbutton from './Editbutton';
import Deletebutton from './Deletebutton';

type Props = {
    note: typeNote ;
}
function Note({note} : Props) {
  return (
    <div className='custom-scrollbar bg-muted/80 h-96 w-full overflow-y-auto overflow-x-hidden
     whitespace-pre-wrap break-words rounded-lg p-6'>
        <div className='relative mb-2 flex items-center gap-2'>
            <h2 className='text-muted-foreground text-lg font-semibold'>{note.updatedAt.toDateString().slice(0 , 10)}</h2>

            <Editbutton note={note}/>
            <Deletebutton noteId={note.id} />
        </div>

        <p>{note.text}</p>
    </div>
  )
}

export default Note ;