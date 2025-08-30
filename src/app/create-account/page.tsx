"use client" ;
import { createaccountAction} from "@/actions/users";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import toast from "react-hot-toast";

function CreateAccount() {
  const [isPending, starttransition] = useTransition();
  const router = useRouter();
  const handleSignUpAction = async (formdata: FormData) => {
    starttransition(async () => {
      const { errormessage } = await createaccountAction(formdata);
      if (!errormessage) {
        router.replace("/");
        toast.success("acount created successfly\nYou logged in....");
      } else {
        toast.error(errormessage);
      }
    });
  };
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4 pb-24">
      <div className="bg-popover relative flex w-full max-w-sm flex-col items-center rounded-xl border p-8">
        <h1
          className={`mb-8 text-2xl font-semibold ${isPending && "opacity-0"}`}
        >
          Create Account
        </h1>
        {isPending && (
          <div className="text-primary absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-y-2">
            <p>creating account....</p>
            <Loader2 className="size-8 animate-spin" />
          </div>
        )}

        <form
          action={handleSignUpAction}
          className={`flex w-full flex-col gap-4 ${isPending && "-z-10 opacity-0"}`}
        >
          <Input
            type="email"
            name="email"
            placeholder="email"
            required
            disabled={isPending}
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            required
            disabled={isPending}
          />
          <Button disabled={isPending}>Create Account</Button>
          <p className="mt-4 text-center text-sm">
            Already have an account
            <Link
              href="/login"
              className="hover:text-primary ml-2 underline transition-colors duration-200 ease-in-out"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
