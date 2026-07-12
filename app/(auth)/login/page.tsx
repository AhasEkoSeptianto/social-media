import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Marker, MarkerContent } from "@/components/ui/marker";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid lg:grid-cols-12">
      <div className="col-span-8 relative">
        <div className="z-0 bg-[url(/images/post1.avif)] h-screen w-full bg-cover absolute top-0 left-0"></div>
        <div className="bg-black/80 lg:bg-black/0 bg-radial-[at_60%_60%] from-purple-500/30 via-violent to-indigo-950/80 to-70% h-screen z-20 relative p-10 lg:p-20 flex flex-col justify-between ">
          <h1 className="text-4xl  font-bold opacity-10 lg:opacity-100">
            Prism
          </h1>
          <div className="opacity-10 lg:opacity-100">
            <h2 className="text-3xl ">"Share your world, discover their."</h2>
            <p>Join 4.2 million people already on Prism</p>
          </div>
        </div>
      </div>
      <div className="col-span-4 bg-brand">
        <div className="grid w-full place-content-center h-screen space-y-6 absolute top-0 z-90 lg:relative p-6 lg:p-0">
          <div className="text-center">
            <h1 className="font-bold text-4xl">Welcome</h1>
            <p className="text-white/50">Sign in to see what's happening.</p>
          </div>
          <div className="">
            <Button variant="outline" className="w-full" size="lg">
              <Image
                src="/images/google.png"
                width={30}
                height={30}
                className="w-auto h-auto"
                alt="google"
              />
              <span>Continue with Goggle</span>
            </Button>
          </div>
          <Marker variant="separator">
            <MarkerContent>or continue with email</MarkerContent>
          </Marker>
          <form className="space-y-4">
            <Input placeholder="Email adress" name="email" />
            <Input placeholder="Password" name="password" type="password" />
            <p className="text-right text-sm opacity-80">forgot password?</p>
            <Button
              className="text-lg w-full bg-brand5 cursor-pointer"
              variant="secondary"
              size="lg"
            >
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
