"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Bell,
  Bookmark,
  ChevronDown,
  Compass,
  Home,
  House,
  LogOut,
  MessageCircleMore,
  Settings,
  UserRound,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";

const Menu1 = [
  { title: "Home", url: "/", icon: Home },
  { title: "Explore", url: "/explore", icon: Compass },
  { title: "Message", url: "/message", icon: MessageCircleMore, badge: 24 },
  { title: "Activity", url: "/activity", icon: Bell },
  { title: "Profile", url: "/profile", icon: UserRound },
];

const Menu2 = [
  { title: "Saved", url: "/saved", icon: Bookmark },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();

  const handleLogout = () => {};
  return (
    <Sidebar variant="sidebar">
      <SidebarHeader className="bg-[#0d0d12]">
        <p className="text-4xl py-4 text-highlight2 font-bold">Prism</p>
      </SidebarHeader>
      <SidebarContent className="bg-[#0d0d12] text-white">
        <SidebarGroup>
          <SidebarMenu>
            {Menu1.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  render={<a href={item.url} />}
                  size="lg"
                  isActive={pathname === item.url}
                  className="
                        hover:bg-[#1E1935]/50 hover:text-white
                        data-active:bg-[#1E1935]
                        data-active:text-white
                        data-active:hover:bg-[#1E1935]
                        text-lg
                    "
                >
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <Separator className="mb-2 bg-white/10" />
        <SidebarGroup>
          <SidebarMenu>
            {Menu2.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  render={<a href={item.url} />}
                  size="lg"
                  isActive={pathname === item.url}
                  className="
                        hover:bg-[#1E1935]/50 hover:text-white
                        data-active:bg-[#1E1935]
                        data-active:text-white
                        data-active:hover:bg-[#1E1935]
                        text-lg
                    "
                >
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-[#0d0d12]">
        <Separator className="mb-2 bg-white/10" />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="hover:bg-[#1E1935]/50">
              <Avatar className="h-8 w-8 rounded-full">
                <AvatarImage src="" alt="Alex Mercer" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <div className="flex flex-col leading-tight">
                <span className="font-semibold text-white">Alex Mercer</span>
                <span className="text-xs text-neutral-400">@my.profile</span>
              </div>
            </SidebarMenuButton>
            <SidebarMenuAction
              onClick={handleLogout}
              className="hover:cursor-pointer"
            >
              <LogOut className="size-4 text-neutral-400 hover:text-red-500 " />
            </SidebarMenuAction>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
