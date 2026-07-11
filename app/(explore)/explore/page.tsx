"use client";

import { AppSidebar } from "@/components/shared/Sidebar";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const tagMenu = [
  "All",
  "Photografy",
  "Music",
  "Travel",
  "Food",
  "Design",
  "Sport",
  "Art",
  "Tech",
];

interface ExploreItem {
  id: string;
  src: string;
  alt: string;
  isVideo?: boolean;
  span?: "tall"; // buat item yang row-span-2
}

const items: ExploreItem[] = [
  { id: "1", src: "/images/post1.avif", alt: "Mountain sunset", span: "tall" },
  { id: "2", src: "/images/post2.avif", alt: "Green sofa" },
  { id: "3", src: "/images/post3.avif", alt: "Restaurant dish", isVideo: true },
  { id: "4", src: "/images/post4.avif", alt: "Dog closeup" },
  { id: "5", src: "/images/post5.avif", alt: "Eiffel tower", isVideo: true },
  { id: "6", src: "/images/post6.avif", alt: "Pool float" },
  { id: "7", src: "/images/post7.avif", alt: "Ocean waves" },
  { id: "8", src: "/images/post8.avif", alt: "Man portrait" },
];

export default function ExplorePage() {
  const [selectedTag, setSelectedTag] = useState("All");
  return (
    <SidebarProvider className="">
      <AppSidebar />
      <main className="w-full grid grid-cols-12 p-4 gap-8 ">
        <div className="col-span-2"></div>
        <div className="col-span-9 container space-y-8">
          <div className="flex items-center justify-between">
            <Field orientation="horizontal" className="bg-brand w-60">
              <Input type="search" placeholder="Search people,tag,place" />
              <Button>Search</Button>
            </Field>
            <div className="flex flex-wrap items-center space-x-2">
              {tagMenu.map((tag, idx) => (
                <Button
                  size="lg"
                  variant={"default"}
                  className={`rounded-full ${tag === selectedTag ? "bg-highlight2" : ""} cursor-pointer`}
                  key={idx}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 auto-rows-[200px]">
            {items.map((item) => (
              <div
                key={item.id}
                className={`relative overflow-hidden rounded-lg bg-neutral-900 ${
                  item.span === "tall" ? "row-span-2" : ""
                }`}
              >
                <Image
                  src={item.src}
                  fill
                  className="object-cover"
                  alt={item.alt}
                  sizes="(max-width: 768px) 33vw, 300px"
                  loading="eager"
                />
                {item.isVideo && (
                  <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/50">
                    <Play className="h-3 w-3 fill-white text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}
