import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qcfxitngwigvxtrlrxsc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjZnhpdG5nd2lndnh0cmxyeHNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMTc4NjEsImV4cCI6MjA2MDc5Mzg2MX0.7j3kaIQravZ9lgXWdriflVBNjzStpvplreNeHbCje78";

export const supabase = createClient(supabaseUrl, supabaseKey);
