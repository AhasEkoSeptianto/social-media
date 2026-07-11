import Image from "next/image";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shared/Sidebar";
import StoryFeed from "@/components/shared/StoryFeed";

export default function Home() {
  return (
    <SidebarProvider className="">
      <AppSidebar />
      <main className="w-full grid grid-cols-12 p-4 gap-8 ">
        <div className="col-span-2"></div>
        <div className="col-span-6 container">
          <StoryFeed />
        </div>
        <div className="col-span-1"></div>
        <div>right</div>
      </main>
    </SidebarProvider>
  );
}
