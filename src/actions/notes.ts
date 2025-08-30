"use server" ;
import db from "@/db";
import { notes } from "@/db/schemas/notes";
import { getUser} from "@/lib/auth"
import { getErrormessage } from "@/lib/utils";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";



export const createNewnote = async (formdata: FormData) => {
    try {
        const user = await getUser() ;
        const text = formdata.get('text') as string ;

        await db.insert(notes).values({text , userId:user.id}) ;

        revalidatePath('/') ;
        return {errormessage: null} ;
    }catch(error){
        return {errormessage: getErrormessage(error)}
    }

}
export const Deletenote = async (noteId: number) => {
    try {
        const user = await getUser() ;
        

        await db.delete(notes).where(and(eq(notes.id , noteId) , eq(notes.userId , user.id))) ;

        revalidatePath('/') ;
        return {errormessage: null} ;
    }catch(error){
        return {errormessage: getErrormessage(error)}
    }

}

export const Editnewnote = async (formdata: FormData) => {
    try {
        const user = await getUser() ;
        const text = formdata.get('text') as string ;
        const noteId = formdata.get('noteId') as string ;

        await db.update(notes).set({text , updatedAt: new Date()}).where(and(eq(notes.id , Number(noteId)) , eq(notes.userId , user.id)));

        revalidatePath('/') ;
        return {errormessage: null} ;
    }catch(error){
        return {errormessage: getErrormessage(error)}
    }

}