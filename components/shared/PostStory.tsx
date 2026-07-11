import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Camera, Images } from "lucide-react";
import { Button } from "../ui/button";

export default function PostStory() {
  return (
    <Card className="bg-brand p-4 text-white">
      <CardContent className="flex items-start justify-between gap-3">
        <div className="rounded-full p-[2px] bg-[#0d0d12]">
          <Image
            src={"/images/person3.avif"}
            width={50}
            height={50}
            alt="prof"
            className="rounded-full"
          />
        </div>
        <Textarea placeholder="whats on your mind?" />
        <Button
          size="icon"
          aria-label="Submit"
          variant="outline"
          className="bg-brand hover:bg-brand2 hover:cursor-pointer"
        >
          <Images className="text-white" />
        </Button>
        <Button
          size="icon"
          aria-label="Submit"
          variant="outline"
          className="bg-brand hover:bg-brand2 hover:cursor-pointer"
        >
          <Camera className="text-white" />
        </Button>
        <Button
          variant="secondary"
          className="bg-highlight3 text-white font-bold hover:bg-highlight3 cursor-pointer"
        >
          Post
        </Button>
      </CardContent>
    </Card>
  );
}
