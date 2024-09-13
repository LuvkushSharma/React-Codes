
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://dhivkdjmprcoeimnxpuu.supabase.co'

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoaXZrZGptcHJjb2VpbW54cHV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQwMjkxMzEsImV4cCI6MjAxOTYwNTEzMX0.fxfu56yp_YaOUizBLMstzb5jKe0ocT4sGhi4JYUTEQU"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;