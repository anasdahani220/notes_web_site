"use client" ;
import { Dialog } from "@radix-ui/react-dialog";
import React, { useState } from "react";
import { DialogTrigger } from "./ui/dialog";
import { Plus } from "lucide-react";
import Newnotedialog from "./Newnotedialog";
import { cn } from "@/lib/utils";

function Newnotebutton() {
  const [open, setopen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={(open) => setopen(open)}>
      <DialogTrigger
        className={cn(
          "text-secondary hover:text-primary transition-colors duration-200 ease-in-out",
        )}
        onClick={() => setopen(true)}
      >
        <Plus className="size-10 sm:size-12"/>
      </DialogTrigger>

      <Newnotedialog setopen={setopen} />
    </Dialog>
  );
}

export default Newnotebutton;
