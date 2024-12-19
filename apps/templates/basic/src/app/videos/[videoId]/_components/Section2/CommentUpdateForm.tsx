"use client";

import { useState } from "react";

import { Button, Textarea } from "@abroad/ui";
import { useVideoCommentMutations } from "@abroad/apis/hooks";

interface IProps {
  videoId: string;
  commentId: string;
  onCancel: () => void;
  content: string;
}

const CommentUpdateForm: React.FC<IProps> = ({
  videoId,
  commentId,
  onCancel,
  content: initialContent,
}) => {
  const [content, setContent] = useState(initialContent);

  const { updateVideoCommentMutateAsync } = useVideoCommentMutations();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await updateVideoCommentMutateAsync({
      params: { videoId, commentId },
      body: { content },
    });

    setContent("");
    onCancel();
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={4}
        className="flex-1 resize-none"
      />

      <div className="flex items-center gap-2 self-end">
        <Button variant="outline" type="button" onClick={onCancel}>
          취소
        </Button>
        <Button type="submit">수정</Button>
      </div>
    </form>
  );
};

export default CommentUpdateForm;
