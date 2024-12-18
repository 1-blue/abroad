"use client";

import { useState } from "react";
import { toast } from "sonner";

import { useMe, useQNACommentMutations } from "@abroad/apis/hooks";
import { Button, Textarea } from "@abroad/ui";

interface Props {
  qnaId: string;
}

const CommentFormSection: React.FC<Props> = ({ qnaId }) => {
  const { isLoggedIn } = useMe();
  const [content, setContent] = useState("");

  const { createQNACommentMutateAsync } = useQNACommentMutations();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) return toast.error("로그인이 필요합니다.");

    await createQNACommentMutateAsync({ params: { qnaId }, body: { content } });

    setContent("");
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={onSubmit}>
      <Textarea
        className="resize-none"
        rows={5}
        placeholder={
          isLoggedIn ? "댓글을 작성해주세요." : "로그인이 필요합니다."
        }
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={!isLoggedIn}
      />
      <Button type="submit" className="self-end" disabled={!isLoggedIn}>
        작성
      </Button>
    </form>
  );
};

export default CommentFormSection;
