"use client" ;
import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User } from '@supabase/supabase-js';
import { UserCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { LogOutAction } from '@/actions/users';

type Props = {
    user: User ;
    className?: string ;
}

export function Edituser({user , className}: Props) {
    const router = useRouter() ;
    const handlelogout = async () => {
        const toastId = toast.loading('sign out loading...') ;
        await LogOutAction() ;
        router.replace('/login') ;
        toast.dismiss(toastId) ;
    }
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className={cn('text-secondary transition-colors duration-200 ease-in-out hover:text-primary',className)}>
        <UserCircle className='size-10 sm:size-12'/>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="ml-4 mt-5 sm:mt-4">
        <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handlelogout} className='rounded-md p-2'>
          <h3 className='text-sm'>Log out</h3>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}




export default Edituser ;