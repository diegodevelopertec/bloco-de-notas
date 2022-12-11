import { createClient } from "@supabase/supabase-js";



const urlApi=process.env.REACT_APP_SUPABASE_UR
const keyApi=process.env.REACT_APP_SUPABASE_ANON_KEY

export const supabase = createClient(urlApi as string, keyApi as string)


