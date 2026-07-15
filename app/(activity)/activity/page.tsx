"use client";

import NavigationMenuMobile from "@/components/shared/NavigationMenuMobile";
import { AppSidebar } from "@/components/shared/Sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider } from "@/components/ui/sidebar";
import Image from "next/image";

const dummyData = [
  {
    picture: "/images/person1.avif",
    name: "Riana",
    time: "2 minutes ago",
    activity: {
      type: "love",
      post_image: "/images/post1.avif",
      post_comment: "",
    },
  },
  {
    picture: "/images/person2.avif",
    name: "Sinta",
    time: "6 minutes ago",
    activity: {
      type: "follow",
      post_image: "",
      post_comment: "",
    },
  },
  {
    picture: "/images/person3.avif",
    name: "Mirja",
    time: "10 minutes ago",
    activity: {
      type: "comment",
      post_image: "/images/post3.avif",
      post_comment: "Fire shot!! 🔥",
    },
  },
  {
    picture: "/images/person4.avif",
    name: "Kina",
    time: "30 minutes ago",
    activity: {
      type: "repost",
      post_image: "/images/post5.avif",
      post_comment: "",
    },
  },
];

export default function ActivityPage() {
  return (
    <SidebarProvider className="">
      <div className="hidden lg:block">
        <AppSidebar />
      </div>
      <div className="fixed bottom-0 left-0 z-30">
        <NavigationMenuMobile />
      </div>
      <main className="w-full lg:grid grid-cols-12 p-4 gap-8 ">
        <div className="col-span-2"></div>
        <div className="col-span-6 container space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-3xl">Activity</h1>
              <Badge className="bg-highlight2  text-hightlight dark:bg-blue-950 dark:text-blue-300">
                3 New
              </Badge>
            </div>
            <Button variant="ghost" className="text-highlight2 cursor-pointer">
              Mark all as read
            </Button>
          </div>

          <Card className="bg-brand text-white">
            <CardContent className="space-y-2">
              {dummyData.map((activity, idx) => (
                <div key={idx}>
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={activity.picture}
                        width={60}
                        height={60}
                        alt="prof"
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-2xl">
                          {activity.name}{" "}
                          <span className="opacity-50 text-sm">
                            {activity.activity.type === "love"
                              ? "like your photo"
                              : activity.activity.type === "follow"
                                ? "started following you"
                                : activity.activity.type === "comment"
                                  ? `commented: ${activity.activity.post_comment}`
                                  : activity.activity.type === "repost"
                                    ? "reposted your photo"
                                    : null}
                          </span>
                        </p>
                        <p className="opacity-50 text-sm">{activity.time}</p>
                      </div>
                    </div>

                    <div>
                      {activity.activity.type === "follow" ? (
                        <Button className="bg-highlight2 rounded">
                          follow
                        </Button>
                      ) : ["love", "repost", "comment"].includes(
                          activity.activity.type,
                        ) ? (
                        <Image
                          src={activity.activity.post_image}
                          width={60}
                          height={60}
                          alt={`${activity.name}'s post`}
                          className="rounded-md object-cover"
                        />
                      ) : null}
                    </div>
                  </div>
                  <Separator className="mb-2 bg-white/10" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </SidebarProvider>
  );
}
