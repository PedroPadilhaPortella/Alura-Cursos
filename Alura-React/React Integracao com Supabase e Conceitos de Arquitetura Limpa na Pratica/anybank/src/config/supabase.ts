import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabase.types";

const SUPABASE_URL: string = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY: string = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);