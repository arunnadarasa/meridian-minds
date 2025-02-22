
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uradoftphoikgfpiayqh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyYWRvZnRwaG9pa2dmcGlheXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxODQzNDgsImV4cCI6MjAyMzc2MDM0OH0.VWBVyPkXunX9t3C8YfP6qeYTDPNGe3XXS1wxv6sVbZ8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
