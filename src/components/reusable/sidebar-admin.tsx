import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { IoSettingsOutline } from "react-icons/io5";
import { LuBookMinus, LuLayoutDashboard, LuUsers } from "react-icons/lu";
import { MdSpeed } from "react-icons/md";
import { Separator } from "../ui/separator";
export function SidebarAdmin() {
  const items = [
    {
      title: "Dashbaord",
      url: "/admin/dashboard",
      icon: <LuLayoutDashboard />,
    },
    {
      title: "Trafic",
      url: "/admin",
      icon: <MdSpeed />,
    },
    {
      title: "Soal dan kategori",
      url: "/admin/soal",
      icon: <LuBookMinus />,
    },
    {
      title: "Users",
      url: "/admin/users",
      icon: <LuUsers />,
    },
    {
      title: "Money management",
      url: "#",
      icon: <LuLayoutDashboard />,
    },
    {
      title: "management1",
      url: "#",
      icon: <LuLayoutDashboard />,
    },
    {
      title: "management2",
      url: "#",
      icon: <LuLayoutDashboard />,
    },
    {
      title: "management3",
      url: "#",
      icon: <LuLayoutDashboard />,
    },
    {
      title: "management4",
      url: "#",
      icon: <LuLayoutDashboard />,
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader>
        <Image
          src={"/assets/logo-default.webp"}
          alt="logo-default-examps"
          height={100}
          width={200}
          className="mx-auto my-2 h-8 w-fit"
        />
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.slice(0, 3).map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  <SidebarMenuAction className="peer-data-[active=true]/menu-button:opacity-100" />
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton>Money management</SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton>
                      <SidebarMenuBadge className="bg-sky-300 text-primary-foreground">
                        24
                      </SidebarMenuBadge>
                      Approval
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton>Rejected</SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
              {items.slice(4, items.length).map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/admin/setting">
                    <span>
                      <IoSettingsOutline />
                    </span>
                    <span>Setting</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
