import { currentUser } from "../_data/auth";
import { redirect } from "next/navigation";

export default async function () {

  const user = await currentUser();
  if (!user) {
    redirect('/login')
  }

  return (
    <div>
      <h1>マイページ</h1>
    </div>
  )
}