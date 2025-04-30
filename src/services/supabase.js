import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bpkqbvahomdlfazzxkkw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwa3FidmFob21kbGZhenp4a2t3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0MTI0OTYsImV4cCI6MjA1Nzk4ODQ5Nn0.mEeDaXbyQXNFjxhtf-G7KrYPQfQpYhR1jaJlR2aXqFs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
