
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://cbiarchxbeznfwyvbqzr.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiaWFyY2h4YmV6bmZ3eXZicXpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4ODc3NzEsImV4cCI6MjA0NjQ2Mzc3MX0.7UIl7IDDecp17X1ijHp6KBc9wm51NifBh3Yvyzu5Wjs";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
