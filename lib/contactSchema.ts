import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "名前を入力してください"),
  furigana: z.string().min(1, "フリガナを入力してください"),
  phone: z.string().min(1, "電話番号を入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  message: z.string().min(1, "お問い合わせ内容を入力してください"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
