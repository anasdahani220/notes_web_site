
"use client" ;
import { Dialog } from "@radix-ui/react-dialog";
import React, { useState } from "react";
import { DialogTrigger } from "./ui/dialog";
import { Edit } from "lucide-react";
import Editnotedialog from "./Editnotedialog";
import { Note } from "@/db/schemas/notes";

function Editbutton({note}:{note:Note}) {
    const [open, setopen] = useState(false); 
  return (
   <Dialog open={open} onOpenChange={(open) => setopen(open)}>
      <DialogTrigger>
        <Edit className='text-muted-foreground size-4' onClick={() => setopen(true)}/>
      </DialogTrigger>

      <Editnotedialog note={note} setopen={setopen} />
    </Dialog>
  )
}

export default Editbutton ;