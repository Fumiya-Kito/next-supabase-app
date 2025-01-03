import { currentUser } from "../_data/auth";
import { redirect } from "next/navigation";
import ItemForm from "./components/item-form";

export default async function () {
  const user = await currentUser();

  if (!user) {
    redirect('/login')
  }


  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl mb-6">マイページ</h1>
      <ItemForm />
    </div>
  )
}