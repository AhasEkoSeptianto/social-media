"use client";

import Image from "next/image";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shared/Sidebar";
import StoryFeed from "@/components/shared/StoryFeed";
import PostStory from "@/components/shared/PostStory";
import Feed from "@/components/freatures/feed/feed";
import { FeedTypes } from "@/type/components/features/feed";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import TrendingSection from "@/components/shared/TrendingSection";
import SuggestedSection from "@/components/shared/SuggestedSection";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/auths/useUser";
import { usePosts } from "@/hooks/posts/usePosts";

export default function Home() {
  const { posts, isLoading, mutate } = usePosts();
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full grid grid-cols-12 p-4 gap-8 ">
        <div className="col-span-2"></div>
        <div className="col-span-6 container space-y-4">
          <StoryFeed />
          <PostStory />
          {posts?.data?.posts.map((post: any, idx: number) => (
            <Feed key={idx} {...post} />
          ))}
        </div>

        <div className=" col-span-3 py-4 space-y-4">
          <Field orientation="horizontal" className="bg-brand">
            <Input type="search" placeholder="Search in prism" />
            <Button variant="secondary" className="bg-brand5 cursor-pointer">
              Search
            </Button>
          </Field>

          <TrendingSection />
          <SuggestedSection />

          <div className="flex items-center flex-wrap space-x-4 text-lg text-highlight2">
            <p className="cursor-pointer hover:text-white">
              <a>Privasi</a>
            </p>
            <p className="cursor-pointer hover:text-white">
              <a>Trems</a>
            </p>
            <p className="cursor-pointer hover:text-white">
              <a>Cookies</a>
            </p>
            <p className="cursor-pointer hover:text-white">
              <a>Ads</a>
            </p>
            <p className="cursor-pointer hover:text-white">
              <a>About</a>
            </p>
          </div>
          <p className="text-sm text-highlight2">© 2026 Prism Inc.</p>
        </div>
      </main>
    </SidebarProvider>
  );
}
