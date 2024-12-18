"use client";

import { useCallback, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { LockClosedIcon, LockOpen1Icon } from "@radix-ui/react-icons";

import {
  Button,
  Form,
  RFHInput,
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@abroad/ui";
import { apis } from "@abroad/apis";
import { useQNAMutations } from "@abroad/apis/hooks";

import Editor from "#/app/qna/(create-and-edit)/_components/Editor";

const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: "제목을 입력해주세요." })
    .max(40, { message: "제목은 최대 40자입니다." }),
  content: z.string().min(1, { message: "내용을 입력해주세요." }),
  isPrivate: z.boolean(),
});

interface IProps {
  qnaId?: string;
}
const WriteForm: React.FC<IProps> = ({ qnaId }) => {
  const router = useRouter();
  const isEdit = useMemo(() => !!qnaId, [qnaId]);
  const { data: qna } = useQuery({
    queryKey: apis.qna.getOne.key({ params: { qnaId: qnaId! } }),
    queryFn: () => apis.qna.getOne.fn({ params: { qnaId: qnaId! } }),
    enabled: isEdit,
    select: ({ data }) => data,
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      isPrivate: false,
    },
  });

  useEffect(() => {
    if (!qna) return;

    form.reset({
      title: qna.title,
      content: qna.content,
      isPrivate: qna.isPrivate,
    });
  }, [qna, form]);

  const onContentChange = useCallback(
    (content: string) => form.setValue("content", content),
    [form],
  );

  const { createQNAMutateAsync, updateQNAMutateAsync } = useQNAMutations();
  const onSubmit = form.handleSubmit(
    async (body: z.infer<typeof formSchema>) => {
      let createdId = "";

      if (isEdit) {
        await updateQNAMutateAsync({ params: { qnaId: qnaId! }, body });
        createdId = String(qnaId);
      } else {
        const { data } = await createQNAMutateAsync({ body });
        createdId = String(data.id);
      }

      router.push(`/qna/${createdId}`);
    },
  );

  const content = form.watch("content");
  const isPrivate = form.watch("isPrivate");

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="my-8 flex flex-col gap-3">
        <div className="flex gap-2">
          <RFHInput name="title" placeholder="제목을 입력해주세요." />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  onClick={() => form.setValue("isPrivate", !isPrivate)}
                >
                  {isPrivate ? <LockClosedIcon /> : <LockOpen1Icon />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isPrivate ? "비밀글" : "공개글"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Editor value={content} handleChange={onContentChange} />
        <Button type="submit" className="self-end" size="lg">
          Q&A {isEdit ? "수정" : "작성"}
        </Button>
      </form>
    </Form>
  );
};

export default WriteForm;
