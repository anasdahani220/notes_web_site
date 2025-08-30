
import { DialogContent, DialogTitle } from "./ui/dialog";
import React, { Dispatch, SetStateAction, useTransition } from "react";
import { DialogFooter, DialogHeader } from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Editnewnote } from "@/actions/notes";
import toast from "react-hot-toast";
import { Note } from "@/db/schemas/notes";

type Props = {
    setopen: Dispatch<SetStateAction<boolean>>
    note: Note ;
}
function Editnotedialog({setopen , note}: Props) {
    const [isPending , starttransition] = useTransition() ;
    const handleeditnote = async (formdata: FormData) => {
        starttransition(async () => {
            const {errormessage} = await Editnewnote(formdata) ;
            if(!errormessage) {
                setopen(false);
                toast.success("edditing note successfly...") ;
            }else{
                toast.error(errormessage) ;
            }
        })
    }
  return (
    <DialogContent className="max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Update Note</DialogTitle>
      </DialogHeader>
      <form action={handleeditnote}>
        <Textarea
          name="text"
          id="text"
          disabled={isPending}
          placeholder="Update notes..."
          className="mt-2 mb-6 min-h-[300px]"
          defaultValue={note.text}
        />
        <input type="text" hidden name='noteId' value={note.id} />
        <DialogFooter>
          <Button type="submit" variant="secondary" disabled={isPending} className="w-40">
            {isPending ? "Updating Note..." : "Update Note"}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}

export default Editnotedialog ;