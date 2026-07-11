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

const dummyFeed: FeedTypes[] = [
  {
    users: "Ekozzi",
    profile_pict: "/images/person3.avif",
    time: "2 minute ago",
    post_text:
      "Golden hour never disappoints. Found this spot after 3 hours of hiking — completely worth it ✨",
    post_image: "/images/post1.avif",
    like: 31,
    comment: 11,
    share: 5,
  },
  {
    users: "Marco Rayes",
    profile_pict: "/images/person4.avif",
    time: "20 minute ago",
    post_text:
      "New studio setup is finally done. Spent the whole weekend putting this together 🎧",
    post_image: "/images/post3.avif",
    like: 11,
    comment: 41,
    share: 5,
  },
  {
    users: "Yuki Tanaka",
    profile_pict: "/images/person6.avif",
    time: "58 minute ago",
    post_text: "Sunday brunch hits different when you make it yourself 🍳",
    post_image: "/images/post2.avif",
    like: 11,
    comment: 41,
    share: 5,
  },
];

export default function Home() {
  return (
    <SidebarProvider className="">
      <AppSidebar />
      <main className="w-full grid grid-cols-12 p-4 gap-8 ">
        <div className="col-span-2"></div>
        <div className="col-span-6 container space-y-4">
          <StoryFeed />
          <PostStory />
          {dummyFeed.map((feed, idx) => (
            <Feed key={idx} {...feed} />
          ))}
        </div>

        <div className=" col-span-2 py-4 space-y-4">
          <Field orientation="horizontal" className="bg-brand">
            <Input type="search" placeholder="Search in prism" />
            <Button>Search</Button>
          </Field>

          <TrendingSection />
        </div>
      </main>
    </SidebarProvider>
  );
}
