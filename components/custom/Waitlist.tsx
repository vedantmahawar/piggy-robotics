"use client";

// default components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// custom components
import addToWaitlist from "@/app/waitlist";

// icons
import { CheckIcon } from "@heroicons/react/20/solid";

// React
import { useState } from "react";

// Form
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError } from "@/components/ui/field";

const formSchema = z.object({
  email: z.email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Waitlist({ id }: { id?: string }) {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: FormValues) {
    const formData = new FormData();
    formData.append("email", values.email);
    setStatus("success");
    await addToWaitlist(formData);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-xs sm:max-w-md" noValidate>
      <Field className="relative">
        <div className="relative flex items-center">
          <Input
            id={id}
            type="email"
            placeholder="Enter your email"
            className={`bg-[#f9f9f9] border-neutral-300 hover:bg-[#f0f0f0] focus:bg-white focus-visible:ring-0 ${status === "success" ? "pr-[40px]" : "pr-[135px]"}`}
            {...form.register("email")}
          />
          {status === "success" ? (
            <CheckIcon className="absolute right-3 size-6 text-black" />
          ) : (
            <Button type="submit" className="absolute right-1 font-normal h-10">
              Join waitlist
            </Button>
          )}
        </div>
        {form.formState.errors.email && (
          <FieldError className="absolute left-0 top-full mt-3" >{form.formState.errors.email.message}</FieldError>
        )}
      </Field>
    </form>
  );
}
