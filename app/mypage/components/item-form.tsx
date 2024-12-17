'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createItem } from "@/app/_actions/item";
import { useToast } from "@/hooks/use-toast";


const formSchema = z.object({
  amount: z.coerce.number().min(1),
  name: z.string().min(1).max(255),
})

type FormData = z.infer<typeof formSchema>

export default function ItemForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      amount: 0,
    },
  });

  const { toast } = useToast()

  const onSubmit: SubmitHandler<FormData> = async (data) => { // validation OKならこちらの第一引数、NGなら第二引数の関数が実行される
    try {
      await createItem(data);
      toast({
        title: "投稿しました",
        description: "アイテム一覧を確認してみてください",
      })
    } catch (e) {
      toast({
        variant: "destructive",
        title: "エラーが発生しました",
        description: "管理者にお問い合わせください",
      })
    }

    form.reset();

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, () => alert('error'))} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>商品名</FormLabel>
              <FormControl>
                <Input placeholder="コッペパン" {...field} />
              </FormControl>
              <FormDescription>
                最大255文字まで
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>値段</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormDescription>
                0円以上
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">商品追加</Button>
      </form>
    </Form>
  );
} 