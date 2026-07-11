"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChevronDown, Compass, Home, House } from "lucide-react";
import { usePathname } from "next/navigation";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Explore", url: "/explore", icon: Compass },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar variant="sidebar">
      <SidebarHeader className="bg-[#0d0d12]">
        <p className="text-4xl py-4 text-highlight2 font-bold">Prism</p>
      </SidebarHeader>
      <SidebarContent className="bg-[#0d0d12] text-white">
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  render={<a href={item.url} />}
                  size="lg"
                  isActive={pathname === item.url}
                  className={`
                        hover:bg-[#1E1935]/50 hover:text-white
                        data-[active=true]:bg-[#1E1935]
                        data-[active=true]:text-white
                        data-[active=true]:bg-[#1E1935]
                    `}
                >
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>Explore</SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <p>Footer</p>
      </SidebarFooter>
    </Sidebar>
  );
}
