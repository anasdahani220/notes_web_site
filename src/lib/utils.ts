import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getErrormessage = (error:unknown , defaultmessage: string = 'somthing went wrong...') => {
  console.log(error) ;
  let errormessage = defaultmessage ;
  if (error instanceof Error && error.message.length < 100) {
    errormessage = error.message ;
  }
  return errormessage ;
}