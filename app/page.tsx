import Image from "next/image";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shared/Sidebar";
import StoryFeed from "@/components/shared/StoryFeed";
import PostStory from "@/components/shared/PostStory";

export default function Home() {
  return (
    <SidebarProvider className="">
      <AppSidebar />
      <main className="w-full grid grid-cols-12 p-4 gap-8 ">
        <div className="col-span-2"></div>
        <div className="col-span-6 container space-y-4">
          <StoryFeed />
          <PostStory />
        </div>
        <div className="col-span-1"></div>
        <div>right</div>
      </main>
    </SidebarProvider>
  );
}
