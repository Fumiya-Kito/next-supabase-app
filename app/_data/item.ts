import { createClient } from '@/lib/supabase/server';
import 'server-only';

export const getItems = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.from('items').select('*');

  console.log('from item.ts', data, error)
  return data;
}