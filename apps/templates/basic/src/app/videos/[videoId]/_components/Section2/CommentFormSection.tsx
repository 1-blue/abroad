"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button, Textarea } from "@abroad/ui";
import { useVideoCommentMutations, useMe } from "@abroad/apis/hooks";

interface Props {
  videoId: string;
}

const CommentFormSection: React.FC<Props> = ({ videoId }) => {
  const { isLoggedIn } = useMe();
  const [content, setContent] = useState("");

  const { createVideoCommentMutateAsync } = useVideoCommentMutations();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) return toast.error("로그인이 필요합니다.");

    await createVideoCommentMutateAsync({
      params: { videoId },
      body: { content },
    });

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
