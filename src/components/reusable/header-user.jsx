"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const HeaderUser = () => {
  const path = usePathname();
  return ["admin", "login", "registrasi", "forgot"].some((segment) =>
    path.includes(segment)
  ) ? (
    ""
  ) : (
    <div className="border-b border-slate-300 h-fit">
      <div className="flex justify-between  max-w-[80vw] mx-auto py-2">
        <Link href={"/"}>
          <Image
            src={"/assets/logo-default.webp"}
            alt="logo-light-mode"
            height={60}
            width={200}
            className="object-contain h-10"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href={"/login"}
            className="font-semibold tracking-wider hover:underline hover:underline-offset-8"
          >
            Login
          </Link>
          <Link href={"/registrasi"}>
            <Button
              variant={"primary"}
              className="font-semibold tracking-wider rounded-xl"
            >
              Daftar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;
