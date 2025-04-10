"use client";

import React from "react";
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

function LoginForm() {
  const form = useForm<loginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  const onsubmit = async (data: loginType) => {
    try {
      console.log(data);
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form {...form}>
      <form
        className={"w-1/2 mx-auto mt-8 flex flex-col gap-y-4"}
        onSubmit={form.handleSubmit(onsubmit)}
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
                  placeholder="Enter your mail address"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
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
                  placeholder="Enter password"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Send</Button>
      </form>
    </Form>
  );
}

export default LoginForm;
