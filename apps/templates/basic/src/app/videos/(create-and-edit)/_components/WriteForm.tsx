"use client";

import { useCallback, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { Button, Form, RFHInput } from "@abroad/ui";
import { apis } from "@abroad/apis";
import { useVideoMutations, useMe } from "@abroad/apis/hooks";

import Editor from "#/app/videos/(create-and-edit)/_components/Editor";

const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: "제목을 입력해주세요." })
    .max(40, { message: "제목은 최대 40자입니다." }),
  content: z.string().min(1, { message: "내용을 입력해주세요." }),
  url: z
    .string()
    .min(1, { message: "유튜브 링크를 입력해주세요." })
    .regex(
      /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/)[a-zA-Z0-9_-]{11}|youtu\.be\/[a-zA-Z0-9_-]{11})([\?&][^&\s]*)*$/,
      { message: "올바른 유튜브 링크를 입력해주세요." },
    ),
});

interface IProps {
  videoId?: string;
}

const WriteForm: React.FC<IProps> = ({ videoId }) => {
  const router = useRouter();
  const isEdit = useMemo(() => !!videoId, [videoId]);
  const { data: video } = useQuery({
    queryKey: apis.video.getOne.key({ params: { videoId: videoId! } }),
    queryFn: () => apis.video.getOne.fn({ params: { videoId: videoId! } }),
    enabled: isEdit,
    select: ({ data }) => data,
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      url: "",
    },
  });

  useEffect(() => {
    if (!video) return;

    form.reset({
      title: video.title,
      content: video.content,
      url: video.url,
    });
  }, [video, form]);

  const onContentChange = useCallback(
    (content: string) => form.setValue("content", content),
    [form],
  );

  const { createVideoMutateAsync, updateVideoMutateAsync } =
    useVideoMutations();
  const onSubmit = form.handleSubmit(
    async (body: z.infer<typeof formSchema>) => {
      let createdId = "";

      if (isEdit) {
        await updateVideoMutateAsync({
          params: { videoId: videoId! },
          body,
        });
        createdId = String(videoId);
      } else {
        const { data } = await createVideoMutateAsync({ body });
        createdId = String(data.id);
      }
      router.push(`/videos/${createdId}`);
    },
  );

  const { me } = useMe();
  // 내 게시글인지 확인
  useEffect(() => {
    if (!me) return;
    if (!video) return;
    if (video.user.id === me.id) return;

    toast.error("자신의 게시글만 수정할 수 있습니다.");
    router.back();
  }, [video, me, router]);

  const content = form.watch("content");

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="my-8 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <RFHInput name="title" placeholder="제목을 입력해주세요." />
          <RFHInput name="url" placeholder="유튜브 링크를 입력해주세요." />
        </div>
        <Editor value={content} handleChange={onContentChange} />
        <Button type="submit" className="self-end" size="lg">
          수업영상 {isEdit ? "수정" : "작성"}
        </Button>
      </form>
    </Form>
  );
};

export default WriteForm;
