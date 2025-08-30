import React from "react";
import { Lilita_One } from "next/font/google";
import Edituser from "./Edituser";
import Newnotebutton from "./Newnotebutton";
import { getUser } from "@/lib/auth";

const lilita = Lilita_One({ weight: "400", subsets: ["latin"] });

async function Header() {
  const user = await getUser() ;
  return (
    <div className="bg-popover relative mt-2 flex h-20 w-full max-w-5xl items-center justify-between rounded-xl px-4">
      <Edituser user={user} />
      <h1
        className={`text-secondary text-4xl font-bold sm:text-5xl ${lilita.className}`}
      >
        Fire Notes
      </h1>
      <Newnotebutton />
    </div>
  );
}

export default Header;
