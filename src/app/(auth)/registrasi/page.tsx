"use client";
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { IoMdArrowRoundBack } from "react-icons/io";
import { z } from "zod";
import { RegisterSchema } from "../../../../ForrmSchema/RegisterFormSchema";

const Resgister = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof RegisterSchema>) {
    toast({
      title: "Login Berhasil",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    // add post function for register and don't forget to fix on **RegisterSchema**
    console.log("Form Data:", data);
  }

  return (
    <div className="h-full w-full min-h-screen flex items-center justify-center">
      <Form {...form}>
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle aria-label="Daftar">
              <Link
                href={"/"}
                className="text-2xl flex justify-start space-x-2 items-center hover:space-x-3 transition-all duration-100 ease-out"
              >
                <IoMdArrowRoundBack /> <span>registrasi</span>
              </Link>
            </CardTitle>
            <CardDescription>
              Temukan soal-soal dengan kualitas tinggi
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              aria-label="form registration"
            >
              <div className="grid w-full items-center gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan nama lengkap" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                          placeholder="Masukkan password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Konfirmasi Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Konfirmasi password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <CardFooter className="w-full flex flex-col mt-4 px-0">
                <Button type="submit" className="w-full">
                  Daftar
                </Button>
              </CardFooter>
            </form>
            <div className="flex my-6 w-full items-center justify-between">
              <Separator className="my-4 col-span-1 w-20" />
              <span className="col-span-5 text-muted-foreground">
                Atau daftar dengan
              </span>
              <Separator className="my-4 col-span-1 w-20" />
            </div>
            <GoogleAuth placeHolder="Daftar dengan Google" />
          </CardContent>
        </Card>
      </Form>
    </div>
  );
};

export default Resgister;
