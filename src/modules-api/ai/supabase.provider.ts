import { createClient } from '@supabase/supabase-js';
import {
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
} from 'src/common/constant/app.constant';
export const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
