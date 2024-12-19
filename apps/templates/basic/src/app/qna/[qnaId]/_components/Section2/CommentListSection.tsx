"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { apis } from "@abroad/apis";

import Comment from "#/app/qna/[qnaId]/_components/Section2/Comment";

interface IProps {
  qnaId: string;
}

const CommentListSection: React.FC<IProps> = ({ qnaId }) => {
  const {
    data: { content: comments },
  } = useSuspenseQuery({
    queryKey: apis.qna.comment.getMany.key({ params: { qnaId } }),
    queryFn: () => apis.qna.comment.getMany.fn({ params: { qnaId } }),
    select: ({ data }) => data,
  });

  return (
    <ul className="flex flex-col gap-6">
      {comments.map((comment) => (
        <Comment key={comment.id} qnaId={qnaId} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentListSection;
