"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { apis } from "@abroad/apis";

import Comment from "#/app/videos/[videoId]/_components/Section2/Comment";

interface IProps {
  videoId: string;
}

const CommentList: React.FC<IProps> = ({ videoId }) => {
  const {
    data: { content: comments },
  } = useSuspenseQuery({
    queryKey: apis.video.comment.getMany.key({ params: { videoId } }),
    queryFn: () => apis.video.comment.getMany.fn({ params: { videoId } }),
    select: ({ data }) => data,
  });

  return (
    <ul className="flex flex-col gap-6">
      {comments.map((comment) => (
        <Comment key={comment.id} videoId={videoId} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentList;
