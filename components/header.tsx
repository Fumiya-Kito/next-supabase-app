import Link from "next/link";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/app/_data/auth";
import { signIn, signOut } from "@/app/_actions/auth";

export default async function Header() {
  const user = await currentUser();
  return (
    <header className="h-16 border-b gap-3 px-6 flex items-center">
      <Button asChild variant={'ghost'} className="font-bold text-xl">
        <Link href="/">LOGO</Link>
      </Button>
      <Button asChild variant={'ghost'} className="font-bold text-xl">
        <Link href="/items">商品一覧</Link>
      </Button>
      <Button asChild variant={'ghost'} className="font-bold text-xl">
        <Link href="/mypage">MyPage</Link>
      </Button>

      <span className="flex-1"></span>

      {user ? (
        <form action={signOut}>
          <Button variant={"outline"}>ログアウト</Button>
        </form>
      ) : (
        <form action={signIn}>
          <Button>ログイン</Button>
        </form>
      )}
    </header>

  )
}