import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.SUPABASE_URL || "https://fjeypbazlrnkxxqlpqco.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqZXlwYmF6bHJua3h4cWxwcWNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4Mzg2MzksImV4cCI6MjAzNTQxNDYzOX0.N1lVBVGM3wMxUanwaZBFsFPPKcfG33ep9fzwEUuEzu0";
//sbp_7ae8dc99eef598d9fb57d661a4ecd540556a0d33
export const supabase = createClient(supabaseUrl, supabaseKey);
