import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FeedTypes } from "@/type/components/features/feed";
import { Heart, MessageCircleMore, Share2 } from "lucide-react";
import Image from "next/image";

export default function Feed(props: FeedTypes) {
  return (
    <Card className="bg-brand text-white">
      <CardHeader className="flex items-center space-x-4">
        <Image
          src={props.author.avatarUrl}
          width={40}
          height={40}
          alt="prof"
          className="rounded-full"
        />
        <div>
          <p className="text-lg">{props.author.name}</p>
          <p className="opacity-50">{props.createdAt}</p>
        </div>
      </CardHeader>
      <CardContent className="bg-brand space-y-4">
        <p>{props.postContext}</p>
        {props.images ? (
          <div className="relative w-full h-96 overflow-hidden">
            <Image
              className="rounded"
              src={props.images}
              fill
              alt="prof"
              sizes="(max-width: 768px) 100vw, 500px"
            />{" "}
          </div>
        ) : null}

        <div>
          <Button variant="ghost" className="cursor-pointer text-lg">
            <Heart size={40} />
            <p>{props.likesCount}</p>
          </Button>
          <Button variant="ghost" className="cursor-pointer text-lg">
            <MessageCircleMore size={40} />
            <p>{props.commentsCount}</p>
          </Button>
          <Button variant="ghost" className="cursor-pointer text-lg">
            <Share2 size={40} />
            <p>{props.sharesCount}</p>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
