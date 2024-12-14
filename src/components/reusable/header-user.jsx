"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

const HeaderUser = () => {
  const { theme, setTheme } = useTheme();
  const path = usePathname();
  return ["dashboard", ""].some((segment) => path.includes(segment)) ? (
    <div className="border-b border-slate-300 h-fit">
      <div className="flex justify-between  max-md:h-20 md:max-w-[80vw] px-4 mx-auto py-2">
        <Link href={"/"} className="h-full flex items-center">
          <Image
            src={"/assets/logo.png"}
            alt="logo-light-mode"
            height={60}
            width={200}
            className="object-contain md:h-10 h-8 w-24 md:w-fit"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <div className="flex justify-center items-center space-x-2 capitalize">
            <Label htmlFor="theme-mode">{theme}</Label>
            <Switch
              id="theme-mode"
              onCheckedChange={(checked) =>
                checked ? setTheme("dark") : setTheme("light")
              }
            />
          </div>
          {/* 
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
          </Link> */}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default HeaderUser;
