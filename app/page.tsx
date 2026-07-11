import Image from "next/image";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shared/Sidebar";

export default function Home() {
  return (
    <SidebarProvider className="">
      <AppSidebar />
      <main className="">
        <SidebarTrigger />
        <p>tes</p>
      </main>
    </SidebarProvider>
  );
}
