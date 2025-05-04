import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://lolbadnpqdojynkefwqk.supabase.co";
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvbGJhZG5wcWRvanlua2Vmd3FrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzMzY4MjIsImV4cCI6MjA2MTkxMjgyMn0.VLnEkJtYUeBVVX9xVGeTVl1cRY2EinY3P0HgaWgcoeE';

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
