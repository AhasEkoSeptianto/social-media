import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Images, XIcon } from "lucide-react";
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
import { Input } from "../ui/input";
import { toast } from "sonner";
import { usePosts } from "@/hooks/posts/usePosts";
import { Spinner } from "../ui/spinner";
import { useUser } from "@/hooks/auths/useUser";

export default function PostStory() {
  const [imageurl, setImageUrl] = useState<string | null>(null);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const { mutate } = usePosts();
  const { user } = useUser();
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
    setLoadingSubmit(true);
    try {
      const resp = await createPost({
        content: data.context,
        image: refInputImage.current?.files?.[0],
      });
      toast.success("Success create post", { position: "top-center" });
      setImageUrl(null);
      reset();
      mutate();
    } catch (err) {
      console.log(err);
      // setServerError(err instanceof Error ? err.message : "Login gagal");
    }
    setLoadingSubmit(false);
  };

  const refInputImage = useRef<any>(null);
  return (
    <Card className="bg-brand p-4 text-white">
      <CardContent>
        <form
          className="flex items-start justify-between gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="rounded-full p-[2px] bg-[#0d0d12]">
            <Image
              src={user?.avatarUrl || "/images/person3.avif"}
              width={80}
              height={80}
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
                    onClick={() => setImageUrl(null)}
                  >
                    <XIcon />
                  </AttachmentAction>
                </AttachmentActions>
              </Attachment>
            ) : null}
          </div>
          <div className="flex items-center space-x-3">
            <Button
              size="icon"
              aria-label="Submit"
              variant="outline"
              onClick={() => refInputImage.current?.click()}
              className={`bg-brand hover:bg-brand2 hover:cursor-pointer`}
            >
              <Images className="text-white" />
            </Button>
            <Input
              className="hidden"
              type="file"
              accept="image/*"
              ref={refInputImage}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                const previewImg = URL.createObjectURL(file);
                setImageUrl(previewImg);
              }}
            />

            <Button
              variant="secondary"
              className="bg-brand5 text-white font-bold hover:bg-highlight3 cursor-pointer"
              disabled={loadingSubmit}
              type="submit"
            >
              {loadingSubmit ? <Spinner /> : "Post"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
