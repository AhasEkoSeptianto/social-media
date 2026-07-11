import { Ellipse, Ellipsis, Phone, Plus, Video } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { Separator } from "../ui/separator";

export default function ConversationMessage() {
  return (
    <Card className="col-span-8 bg-brand">
      <CardHeader className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src={"/images/person1.avif"}
            width={50}
            height={50}
            alt="prof"
            className="rounded-full"
          />
          <div>
            <p className="text-lg">rover</p>
            <p className="text-white/70 truncate max-w-60 opacity-70">
              offline
            </p>
          </div>
        </div>
        <div className="opacity-70 flex items-center space-x-4">
          <Button size="icon" variant="outline" className="cursor-pointer">
            <Phone size={20} />
          </Button>
          <Button size="icon" variant="outline" className="cursor-pointer">
            <Video size={20} />
          </Button>
          <Button size="icon" variant="outline" className="cursor-pointer">
            <Ellipsis size={20} />
          </Button>
        </div>
      </CardHeader>
      <Separator className="mb-2 bg-white/10" />
      <CardContent>tes</CardContent>
    </Card>
  );
}
