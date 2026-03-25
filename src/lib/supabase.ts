import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jfxkgqedpmmwnhhpyxki.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmeGtncWVkcG1td25oaHB5eGtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1MzAxNjcsImV4cCI6MjA4NjEwNjE2N30.s8L-7Mq3QlkymA7fevTfIbBxbENYDvgl9XEpmhfFfgI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
