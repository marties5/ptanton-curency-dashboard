"use client";
import * as React from "react";

import GoogleAuth from "@/components/reusable/google-auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { IoMdArrowRoundBack } from "react-icons/io";
import { z } from "zod";

const Login = () => {
  const currentPath = usePathname();
  const [error, setError] = React.useState(false);

  const FormSchema = z.object({
    email: z
      .string()
      .email({ message: "Email yang anda masukkan tidak valid." }),
    password: z.string().min(2, { message: "Password minimal 2 karakter." }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const responses = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });

      console.log("Response status:", responses.status);
      const contentType = responses.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        const result = await responses.json();
        if (responses.ok && result.success) {
          alert("Login berhasil!");
          localStorage.setItem("authToken", result.token);
        } else {
          alert(result.message || "Gagal login.");
          setError(true);
        }
      } else {
        console.error("Unexpected response type:", contentType);
        alert("Terjadi kesalahan pada server.");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      alert("Terjadi kesalahan pada server.");
    }
  }

  return (
    <div className="h-full w-full min-h-screen flex items-center justify-center">
      <Form {...form}>
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle aria-label="Login">
              <Link
                href={"/"}
                className="text-2xl flex justify-start space-x-2 items-center hover:space-x-3 transition-all duration-100 ease-out"
              >
                <IoMdArrowRoundBack /> <span>Login</span>
              </Link>
            </CardTitle>
            <CardDescription>
              Temukan soal-soal dengan kualitas tinggi !
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan email" {...field} />
                      </FormControl>
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
                          placeholder="Masukkan Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                      <FormDescription className="text-end text-blue-600 hover:underline">
                        <Link href={currentPath + "/forgot-password"}>
                          Lupa password?
                        </Link>
                      </FormDescription>
                    </FormItem>
                  )}
                />
                {error && (
                  <p className="text-xs text-red-500 font-semibold">
                    Invalid User or Password !
                  </p>
                )}
              </div>
              <CardFooter className="w-full flex flex-col mt-12 px-0">
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </CardFooter>
            </form>
            <div className="flex mb-6 w-full items-center justify-between">
              <Separator className="my-4 col-span-1 w-16" />
              <span className="col-span-5 text-muted-foreground">
                Atau masuk dengan
              </span>
              <Separator className="my-4 col-span-1 w-16" />
            </div>
            <GoogleAuth placeHolder="Login dengan Google" />
            <CardFooter className="w-full flex flex-col mt-12 px-0 text-muted-foreground">
              <p>
                Belum punya akun?
                <Link
                  href={"/registrasi"}
                  className="text-blue-600 ml-1 hover:underline"
                >
                  Daftar
                </Link>
              </p>
            </CardFooter>
          </CardContent>
        </Card>
      </Form>
    </div>
  );
};

export default Login;
