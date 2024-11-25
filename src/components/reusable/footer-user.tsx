"use client";
import { usePathname } from "next/navigation";
import { LuCopyright } from "react-icons/lu";

export const FooterUser = () => {
  const path = usePathname();
  return ["admin", "login", "registrasi", "forgot", "test"].some((segment) =>
    path.includes(segment)
  ) ? (
    ""
  ) : (
    <footer className="h-96 border-t border-muted">
      <div className="max-w-[80vw] mx-auto p-8 h-full ">
        FooterUser
        <div className="flex items-center space-x-2 text-sm mx-auto mt-auto bottom-0 relative w-fit text-muted-foreground">
          <LuCopyright />
          <p className="font-medium">Eaxamps 2024 • All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
