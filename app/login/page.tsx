import { currentUser } from "../_data/auth";
import { Button } from "@/components/ui/button";
import { signIn, signOut } from "../_actions/auth";

export default async function () {
  const user = await currentUser();
  return (
    <div className="p-6">
      <h1>LOGIN</h1>
      {user && JSON.stringify(user)}

      {user ? (
        <form action={signOut}>
          <Button>ログアウト</Button>
        </form>
      ) : (
        <form action={signIn}>
          <Button>ログイン</Button>
        </form>
      )}
    </div>
  );
}