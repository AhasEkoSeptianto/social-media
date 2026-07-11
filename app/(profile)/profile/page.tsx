import { AppSidebar } from "@/components/shared/Sidebar";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppWindowIcon, CodeIcon } from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <SidebarProvider className="">
      <AppSidebar />
      <main className="w-full grid grid-cols-12 p-4 gap-8 ">
        <div className="col-span-2"></div>
        <div className="col-span-9 container space-y-8">
          <div className="relative h-70">
            <div className="bg-[url(/images/post1.avif)] rounded-lg w-full h-60 bg-cover">
              <div className="absolute bottom-0 left-10">
                <Image
                  src={"/images/person1.avif"}
                  width={150}
                  height={150}
                  alt="prof"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl">Ekozzi</h1>
              <p>Product designer & travel lover 🌍 · Amsterdam, NL</p>
              <div className="space-x-2">
                {[
                  "web developer",
                  "mobile developer",
                  "proggraming",
                  "react",
                ].map((val, idx) => (
                  <Badge
                    key={idx}
                    className="bg-highlight text-highlight2 font-bold"
                  >
                    {val}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-10 text-center">
              <div>
                <h2 className="text-3xl font-bold">285</h2>
                <p className="text-white/60">Posts</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">14.2k</h2>
                <p className="text-white/60">Followes</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">891</h2>
                <p className="text-white/60">Following</p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="preview">
            <TabsList variant="line">
              <TabsTrigger value="preview" className="data text-white">
                <AppWindowIcon />
                Preview
              </TabsTrigger>
              <TabsTrigger value="code" className="text-white">
                <CodeIcon />
                Code
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </main>
    </SidebarProvider>
  );
}
