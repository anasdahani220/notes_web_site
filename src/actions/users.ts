"use server" ;
import { getsupabaseAuth } from "@/lib/auth"
import { getErrormessage } from "@/lib/utils";



export const createaccountAction = async (formdata: FormData) => {
      try {
        const supabase = await getsupabaseAuth() ;
        const email = formdata.get('email') as string ;
        const password = formdata.get('password') as string ;
        const {error} = await supabase.auth.signUp({
          email , 
          password ,
        })
        if (error) throw error ;

        const {data , error:loginerror} = await supabase.auth.signInWithPassword({
          email , 
          password  ,
        })
        if (loginerror) throw loginerror ;
        if (!data.session) throw new Error('No Session...') ;

        return {errormessage:null} ;
      } catch (error){
        return {errormessage: getErrormessage(error)} ;
      }
}

export const LoginAction = async (formdata:FormData) => {
    try {
        const supabase = await getsupabaseAuth() ;
        const email = formdata.get('email') as string ;
        const password = formdata.get('password') as string ;

        const {data , error:loginerror} = await supabase.auth.signInWithPassword({
          email , 
          password  ,
        })
        if (loginerror) throw loginerror ;
        if (!data.session) throw new Error('No Session...') ;

        return {errormessage:null} ;
      } catch (error){
        return {errormessage: getErrormessage(error)} ;
      }
}

export const LogOutAction = async () => {
     try {
        const supabase = await getsupabaseAuth() ;

        const {error} = await supabase.auth.signOut({})
        if (error) throw error ;

        return {errormessage:null} ;
      } catch (error){
        return {errormessage: getErrormessage(error)} ;
      }
}