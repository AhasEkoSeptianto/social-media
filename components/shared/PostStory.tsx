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
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "../ui/attachment";
import { useForm } from "react-hook-form";
import {
  CreatePostFormData,
  createPostSchema,
} from "@/lib/schemas/post.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPost } from "@/lib/api/posts.api";

export default function PostStory() {
  const inputImageRef = useRef<HTMLInputElement>(null);
  const [imageForm, setImageForm] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreatePostFormData>({
    resolver: zodResolver(createPostSchema),
  });

  const onSubmit = async (data: CreatePostFormData) => {
    try {
      await createPost({ content: data.context, image_url: "" });
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

            {imageForm ? (
              <Attachment key={"image post"} className="w-64">
                <AttachmentMedia variant="image">
                  <img
                    src={URL.createObjectURL(imageForm)}
                    alt={imageForm.name}
                  />
                </AttachmentMedia>
                <AttachmentContent>
                  <AttachmentTitle>{imageForm.name}</AttachmentTitle>
                  <AttachmentDescription>
                    {imageForm.size}
                  </AttachmentDescription>
                </AttachmentContent>
                <AttachmentActions>
                  <AttachmentAction
                    aria-label={`Remove ${imageForm.name}`}
                    onClick={() => setImageForm(null)}
                  >
                    <XIcon />
                  </AttachmentAction>
                </AttachmentActions>
              </Attachment>
            ) : null}
          </div>
          <Button
            size="icon"
            aria-label="Submit"
            variant="outline"
            className={`bg-brand hover:bg-brand2 ${imageForm ? "" : "hover:cursor-pointer"}`}
            onClick={() => inputImageRef.current?.click()}
          >
            <Images className="text-white" />
          </Button>
          <input
            type="file"
            hidden
            ref={inputImageRef}
            accept="image/jpeg,image/png,image/webp"
            disabled={imageForm ? true : false}
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (!file) return;

              setImageForm(file);
            }}
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
