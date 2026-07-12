import {
  Ellipse,
  Ellipsis,
  Images,
  Phone,
  Plus,
  Send,
  Video,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { Separator } from "../ui/separator";
import {
  MessageScroller,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "../ui/message-scroller";
import { Message, MessageAvatar, MessageContent } from "../ui/message";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Bubble, BubbleContent } from "../ui/bubble";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

const dummyChat = [
  {
    id: 1,
    sender_name: "Ariana",
    message: "Hey! Did you see the sunset yesterday?",
    avatar: "/images/person2.avif",
    time: "9:12 pm",
    status_read: true,
  },
  {
    id: 2,
    sender_name: "user",
    message: "Yes!! That golden light was insane 😍?",
    avatar: "/images/person1.avif",
    time: "9:15 pm",
    status_read: true,
  },
  {
    id: 3,
    sender_name: "Ariana",
    message: "I got so many good shots. Spent like 3 hours up there haha",
    avatar: "/images/person2.avif",
    time: "9:17 pm",
    status_read: true,
  },
  {
    id: 4,
    sender_name: "user",
    message: "Worth it honestly. Where exactly was that spot?",
    avatar: "/images/person1.avif",
    time: "9:19 pm",
    status_read: true,
  },
  {
    id: 5,
    sender_name: "Ariana",
    message:
      "Trail behind Millfield — takes about 40min. I'll send you the pin!",
    avatar: "/images/person2.avif",
    time: "9:21 pm",
    status_read: true,
  },
  {
    id: 6,
    sender_name: "user",
    message: "omg yes let's go this weekend",
    avatar: "/images/person1.avif",
    time: "9:23 pm",
    status_read: false,
  },
  {
    id: 7,
    sender_name: "Ariana",
    message: "Hey! Did you see the sunset yesterday?",
    avatar: "/images/person2.avif",
    time: "9:12 pm",
    status_read: true,
  },
  {
    id: 8,
    sender_name: "user",
    message: "Yes!! That golden light was insane 😍?",
    avatar: "/images/person1.avif",
    time: "9:15 pm",
    status_read: true,
  },
  {
    id: 9,
    sender_name: "Ariana",
    message: "I got so many good shots. Spent like 3 hours up there haha",
    avatar: "/images/person2.avif",
    time: "9:17 pm",
    status_read: true,
  },
  {
    id: 10,
    sender_name: "user",
    message: "Worth it honestly. Where exactly was that spot?",
    avatar: "/images/person1.avif",
    time: "9:19 pm",
    status_read: true,
  },
  {
    id: 11,
    sender_name: "Ariana",
    message:
      "Trail behind Millfield — takes about 40min. I'll send you the pin!",
    avatar: "/images/person2.avif",
    time: "9:21 pm",
    status_read: true,
  },
  {
    id: 12,
    sender_name: "user",
    message: "omg yes let's go this weekend",
    avatar: "/images/person1.avif",
    time: "9:23 pm",
    status_read: false,
  },
  {
    id: 13,
    sender_name: "Ariana",
    message: "Hey! Did you see the sunset yesterday?",
    avatar: "/images/person2.avif",
    time: "9:12 pm",
    status_read: true,
  },
  {
    id: 14,
    sender_name: "user",
    message: "Yes!! That golden light was insane 😍?",
    avatar: "/images/person1.avif",
    time: "9:15 pm",
    status_read: true,
  },
  {
    id: 15,
    sender_name: "Ariana",
    message: "I got so many good shots. Spent like 3 hours up there haha",
    avatar: "/images/person2.avif",
    time: "9:17 pm",
    status_read: true,
  },
  {
    id: 16,
    sender_name: "user",
    message: "Worth it honestly. Where exactly was that spot?",
    avatar: "/images/person1.avif",
    time: "9:19 pm",
    status_read: true,
  },
  {
    id: 17,
    sender_name: "Ariana",
    message:
      "Trail behind Millfield — takes about 40min. I'll send you the pin!",
    avatar: "/images/person2.avif",
    time: "9:21 pm",
    status_read: true,
  },
  {
    id: 18,
    sender_name: "user",
    message: "omg yes let's go this weekend",
    avatar: "/images/person1.avif",
    time: "9:23 pm",
    status_read: false,
  },
];

export default function ConversationMessage() {
  return (
    <MessageScrollerProvider autoScroll defaultScrollPosition="last-anchor">
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
        <CardContent className="overflow-hidden h-[39rem] ">
          <MessageScroller>
            <MessageScrollerViewport>
              <MessageScrollerContent
                aria-busy={false}
                className="p-(--card-spacing)"
              >
                {dummyChat.map((chat, idx) => (
                  <MessageScrollerItem
                    key={chat.id}
                    messageId={chat.id.toString()}
                    scrollAnchor={chat.sender_name === "user"}
                  >
                    <Message
                      align={chat.sender_name === "user" ? "end" : "start"}
                    >
                      <MessageAvatar>
                        <Avatar>
                          <AvatarImage src={chat.avatar} alt={idx.toString()} />
                          <AvatarFallback>
                            {chat.sender_name === "user"
                              ? "Ne"
                              : chat.sender_name}
                          </AvatarFallback>
                        </Avatar>
                      </MessageAvatar>
                      <MessageContent>
                        <Bubble>
                          <BubbleContent
                            className={`${chat.sender_name === "user" ? "!bg-brand5" : "!bg-brand4"}  !text-white !text-md`}
                          >
                            {chat.message}
                          </BubbleContent>
                        </Bubble>
                      </MessageContent>
                    </Message>
                  </MessageScrollerItem>
                ))}
              </MessageScrollerContent>
            </MessageScrollerViewport>
          </MessageScroller>
        </CardContent>
        <CardFooter className="bg-brand flex items-start space-x-4">
          <Button variant="outline">
            <Images />
          </Button>
          <Input placeholder="message" />
          <Button variant="outline">
            <Send />
          </Button>
        </CardFooter>
      </Card>
    </MessageScrollerProvider>
  );
}
