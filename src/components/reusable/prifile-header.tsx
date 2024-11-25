import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogoutButton } from "./logout-button";
export const ProfileHeader = () => {
  const data = {
    name: "zhidan marties alfareza",
    role: "admin",
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-4">
        <p className="tracking-wider font-medium">{data.name}</p>
        <div className="cursor-pointer  p-1 rounded-lg flex items-center space-x-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <IoIosArrowDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="my-1 py-4">Profile saya</DropdownMenuItem>
        <DropdownMenuSeparator />
        <LogoutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
