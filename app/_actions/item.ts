'use server';
// user serverを使う時はこの関数自体誰でも実行できることを留意
// http://localhost:3000/api/aifjjefが自動生成されている←devtoolsから見れる

import { createClient } from "@/lib/supabase/server";
import { currentUser } from "../_data/auth";

export const createItem = async (formData: { name: string, amount: number }) => {
  const supabase = createClient();
  const user = await currentUser();
  if (!user) {
    throw new Error('ログインしてください');
  }

  const { error } = await supabase.from('items').insert(formData);
  if (error) {
    throw new Error(error.message);
  }
}