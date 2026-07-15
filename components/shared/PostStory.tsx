import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Camera, Images, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useRef, useState } from "react";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentMedia,
} from "../ui/attachment";
import { useForm } from "react-hook-form";
import {
  CreatePostFormData,
  createPostSchema,
} from "@/lib/schemas/post.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPost } from "@/lib/api/posts.api";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { usePosts } from "@/hooks/posts/usePosts";

export default function PostStory() {
  const [imageurl, setImageUrl] = useState("");
  const { posts, isLoading, mutate } = usePosts();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreatePostFormData>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      context: "",
    },
  });

  const onSubmit = async (data: CreatePostFormData) => {
    try {
      console.log(data);
      const resp = await createPost({
        content: data.context,
        image_url: imageurl,
      });

      toast.success("Success create post", { position: "top-center" });
      setImageUrl("");
      reset();
      mutate();
    } catch (err) {
      // setServerError(err instanceof Error ? err.message : "Login gagal");
    }
  };
  return (
    <Card className="bg-brand p-4 text-white">
      <CardContent>
        <form
          className="flex items-start justify-between gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="rounded-full p-[2px] bg-[#0d0d12]">
            <Image
              src={"/images/person3.avif"}
              width={50}
              height={50}
              alt="prof"
              className="rounded-full"
            />
          </div>
          <div className="space-y-2 w-full">
            <Textarea
              placeholder="whats on your mind?"
              {...register("context")}
              aria-invalid={errors.context ? "true" : "false"}
            />
            {errors.context && (
              <p className="text-xs text-red-500 mt-1">
                {errors.context.message}
              </p>
            )}

            {imageurl ? (
              <Attachment
                key={"image post"}
                className="w-20"
                orientation="vertical"
              >
                <AttachmentMedia variant="image">
                  <img src={imageurl} alt={"image post"} />
                </AttachmentMedia>

                <AttachmentActions>
                  <AttachmentAction
                    aria-label={`Remove image post`}
                    onClick={() => setImageUrl("")}
                  >
                    <XIcon />
                  </AttachmentAction>
                </AttachmentActions>
              </Attachment>
            ) : null}
          </div>
          <GetDialogImage
            disabled={false}
            onAttach={(url) => setImageUrl(url)}
          />
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
            className="bg-brand5 text-white font-bold hover:bg-highlight3 cursor-pointer"
            type="submit"
          >
            Post
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

interface GetDialogImage {
  disabled: boolean;
  onAttach: (url: string) => void;
}
const GetDialogImage = (props: GetDialogImage) => {
  const [urlImage, setUrlImage] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger
        render={
          <Button
            size="icon"
            aria-label="Submit"
            variant="outline"
            onClick={() => setOpen(true)}
            className={`bg-brand hover:bg-brand2 ${props.disabled ? "" : "hover:cursor-pointer"}`}
          >
            <Images className="text-white" />
          </Button>
        }
      />
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Share post with a link image url
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              placeholder="https://"
              onChange={(e) => setUrlImage(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter className="">
          <DialogClose
            render={
              <Button
                variant="ghost"
                type="button"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
            }
          />

          <Button
            className="bg-brand5 text-white"
            type="button"
            onClick={() => {
              props.onAttach(urlImage);
              setOpen(false);
            }}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
