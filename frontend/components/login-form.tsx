"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginType } from "@/types/auth-types";
import { login } from "@/action/auth-action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { setCookie } from "cookies-next";
import Logo from "./logo";

function LoginForm() {
  const form = useForm<loginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onsubmit = async (data: loginType) => {
    try {
      // console.log(data);
      setIsLoading(true);
      const result = await login(data);
      if (result?.status === 201) {
        const token = result.data.token;
        setCookie("token", token, {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        });
        router.push("/home");
        toast.success("Success", {
          description: "Welcome to home page !",
        });
      } else {
        toast.error("Error", {
          description: "You are not login, access denied !",
        });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={
        "w-full md:w-3/5 p-8 bg-white border border-slate-300 rounded-2xl shadow-sm shadow-slate-300"
      }
    >
      <Logo className={"mb-4"} />
      <h1 className={"text-2xl  font-semibold"}>Welcome Back !</h1>
      <p className={"mt-1 text-sm"}>Sign in to your account to continue</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onsubmit)}
          className={"flex flex-col gap-y-4 mt-4"}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="pubsilon@email.com"
                    className={
                      "focus-visible:ring-orange-600/20 focus-visible:border-main focus-visible:placeholder:text-main text-main peer"
                    }
                    {...field}
                  />
                </FormControl>
                <FormDescription
                  className={"peer-focus-visible:text-main text-xs -mt-2"}
                >
                  Enter your mail address
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className={
                      "focus-visible:ring-orange-600/20 focus-visible:border-main focus-visible:placeholder:text-main peer"
                    }
                    {...field}
                  />
                </FormControl>
                <FormDescription
                  className={"peer-focus-visible:text-main text-xs -mt-2"}
                >
                  Enter your password
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className={"main-btn"} disabled={isLoading}>
            {isLoading ? 'Loding...' : 'Login'}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default LoginForm;
