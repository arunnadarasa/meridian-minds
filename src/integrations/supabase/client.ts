
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kiqnmltgajkgnrhnijjj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpcW5tbHRnYWprZ25yaG5pampqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyNTQ5NDEsImV4cCI6MjA1NTgzMDk0MX0.WV5KpvMGiQmvqirTd64DQ9hV1hyGMfZS9Uh8jmkcODQ";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
