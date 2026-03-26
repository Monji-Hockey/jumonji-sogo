"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/contactSchema";

const fieldClass =
  "w-full rounded-lg border border-[#e8d46a]/60 bg-white px-4 py-3 text-sm text-[#333] placeholder:text-[#999] focus:border-[#c2185b] focus:outline-none focus:ring-2 focus:ring-[#c2185b]/20";
const labelClass = "mb-1.5 block text-sm font-medium text-[#333]";

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      furigana: "",
      phone: "",
      email: "",
      message: "",
      botField: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitStatus("idle");
    setErrorMessage("");
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setSubmitStatus("error");
        setErrorMessage(json.error ?? "送信に失敗しました");
        return;
      }
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
      setErrorMessage("送信に失敗しました。しばらく経ってからお試しください。");
    }
  };

  if (submitStatus === "success") {
    return (
      <div
        className="rounded-xl border border-[#e8d46a]/40 bg-[#fefdfb] p-8 text-center shadow-sm"
        role="status"
        aria-live="polite"
      >
        <p className="text-lg font-bold text-[#c2185b]">送信しました</p>
        <p className="mt-2 text-sm text-[#666]">
          お問い合わせいただきありがとうございます。内容を確認のうえ、ご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border border-[#e8d46a]/40 bg-white p-5 shadow-sm sm:p-6"
      noValidate
    >
      <div className="space-y-5">
        {/* Bot対策のハニーポット（人間には非表示） */}
        <div className="hidden" aria-hidden>
          <label htmlFor="contact-company-name">会社名（入力しないでください）</label>
          <input
            id="contact-company-name"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("botField")}
          />
        </div>

        <div>
          <label htmlFor="contact-name" className={labelClass}>
            名前 <span className="text-[#c2185b]">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            className={fieldClass}
            placeholder="山田 太郎"
            autoComplete="name"
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-[#c2185b]" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-furigana" className={labelClass}>
            フリガナ <span className="text-[#c2185b]">*</span>
          </label>
          <input
            id="contact-furigana"
            type="text"
            className={fieldClass}
            placeholder="ヤマダ タロウ"
            autoComplete="off"
            {...register("furigana")}
          />
          {errors.furigana && (
            <p className="mt-1 text-xs text-[#c2185b]" role="alert">
              {errors.furigana.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            電話番号 <span className="text-[#c2185b]">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            className={fieldClass}
            placeholder="0195-23-7141"
            autoComplete="tel"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-[#c2185b]" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            メールアドレス <span className="text-[#c2185b]">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            className={fieldClass}
            placeholder="example@email.com"
            autoComplete="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-[#c2185b]" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClass}>
            お問い合わせ内容 <span className="text-[#c2185b]">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={5}
            className={`${fieldClass} resize-y`}
            placeholder="お問い合わせ内容をご記入ください"
            {...register("message")}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-[#c2185b]" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      {submitStatus === "error" && errorMessage && (
        <p className="mt-4 text-center text-sm text-[#c2185b]" role="alert">
          {errorMessage}
        </p>
      )}

      <div className="mt-6 flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="min-h-[48px] rounded-xl border-2 border-[#c2185b] bg-[#c2185b] px-8 py-3 text-base font-bold text-white shadow-sm transition disabled:cursor-not-allowed disabled:opacity-60 hover:bg-[#ad1457] hover:border-[#ad1457] disabled:hover:bg-[#c2185b] disabled:hover:border-[#c2185b]"
        >
          {isSubmitting ? "送信中…" : "送信する"}
        </button>
      </div>
    </form>
  );
}
