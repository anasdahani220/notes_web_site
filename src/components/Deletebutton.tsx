"use client" ;
import { Deletenote } from "@/actions/notes";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash } from "lucide-react";
import { useState, useTransition } from "react";
import toast from "react-hot-toast";
function Deletebutton({ noteId }: { noteId: number }) {
  const [isPending, starttransition] = useTransition();
  const [open, setopen] = useState(false);
  const handledelete = async () => {
    starttransition(async () => {
      const { errormessage } = await Deletenote(noteId);
      if (!errormessage) {
        setopen(false);
        toast.success("you deleting note successfly...");
      } else {
        toast.error(errormessage);
      }
    });
  };
  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger
        className="absolute -right-2"
        onClick={() => setopen(true)}
      >
        <Trash className="text-destructive/50 size-5" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are You Sure You Want To Delete This Note?
          </AlertDialogTitle>
          <AlertDialogDescription>
            this action cannot be undone. this will permanently delete this note
            from all records.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending} onClick={() => setopen(false)}>Cancel</AlertDialogCancel>
          <form action={handledelete}>
            <AlertDialogAction
              type="submit"
              className="bg-destructive hover:bg-destructive hover:brightness-110"
            >
              {isPending ? "Deleting Note..." : "Delete Note" }
            </AlertDialogAction>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Deletebutton;
