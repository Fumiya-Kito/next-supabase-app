import { currentUser } from "../_data/auth";
import { Button } from "@/components/ui/button";
import { signIn, signOut } from "../_actions/auth";
import { redirect } from "next/navigation";

export default async function () {
  const user = await currentUser();

  if (user) {
    redirect('/mypage')
  }
  return (
    <div className="p-6">
      <h1>LOGIN</h1>
      {user && JSON.stringify(user)}


      <form action={signIn}>
        <Button>ログイン</Button>
      </form>
    </div>
  );
}