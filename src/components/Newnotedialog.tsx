import { DialogContent, DialogTitle } from "./ui/dialog";
import React, { Dispatch, SetStateAction, useTransition } from "react";
import { DialogFooter, DialogHeader } from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { createNewnote } from "@/actions/notes";
import toast from "react-hot-toast";

type Props = {
  setopen: Dispatch<SetStateAction<boolean>>;
};
function Newnotedialog({ setopen }: Props) {
  const [isPending, starttransition] = useTransition();
  const handleaddnewnote = async (formdata: FormData) => {
    starttransition(async () => {
      const { errormessage } = await createNewnote(formdata);
      if (!errormessage) {
        setopen(false);
        toast.success("you adding notes successfly...");
      } else {
        toast.error(errormessage);
      }
    });
  };
  return (
    <DialogContent className="max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add New Note</DialogTitle>
      </DialogHeader>
      <form action={handleaddnewnote}>
        <Textarea
          name="text"
          id="text"
          disabled={isPending}
          placeholder="add new notes..."
          className="mt-2 mb-6 min-h-[300px]"
        />

        <DialogFooter>
          <Button type="submit" variant="secondary" disabled={isPending} className="w-40">
            {isPending ? "Adding Note..." : "Add Note"}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}

export default Newnotedialog;
