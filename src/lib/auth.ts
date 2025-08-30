import { createServerClient } from '@supabase/ssr'
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers'

export const getUser = async () => {
    const {auth} = await getsupabaseAuth() ;
    const user = (await (auth.getUser())).data.user ;
    if (!user) redirect('/login')  ;

    return user ;
}

export async function getsupabaseAuth() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {}
        },
      },
    }
  )
}