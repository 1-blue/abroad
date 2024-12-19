import { useCallback, useState } from "react";
import { formatDistance } from "date-fns";
import { toast } from "sonner";
import { ko } from "date-fns/locale";

import { Avatar, AvatarFallback, Button } from "@abroad/ui";
import { GetManyVideoCommentAPIResponse } from "@abroad/apis";
import { useVideoCommentMutations, useMe } from "@abroad/apis/hooks";

import CommentUpdateForm from "#/app/videos/[videoId]/_components/Section2/CommentUpdateForm";

interface IProps {
  videoId: string;
  comment: GetManyVideoCommentAPIResponse["data"]["content"][number];
}

const Comment: React.FC<IProps> = ({ videoId, comment }) => {
  const { me } = useMe();
  const [isEditing, setIsEditing] = useState(false);
  const onCancel = useCallback(() => setIsEditing(false), []);

  const isMine = me?.id === comment.user.id;

  const onClickEdit = () => {
    if (!me) return toast.error("로그인 후 이용해주세요.");
    if (!isMine) return toast.error("본인의 댓글만 수정할 수 있습니다.");

    setIsEditing(true);
  };

  const { deleteVideoCommentMutateAsync } = useVideoCommentMutations();
  const onClickDelete = async (commentId: string) => {
    await deleteVideoCommentMutateAsync({ params: { videoId, commentId } });
  };

  const formattedCreatedAt = formatDistance(
    new Date(comment.createdAt),
    new Date(),
    {
      addSuffix: true,
      locale: ko,
    },
  );

  return (
    <li className="flex items-start gap-2">
      <Avatar>
        <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex gap-1.5">
          <span className="text-xs text-foreground">{comment.user.name}</span>
          <time
            dateTime={comment.createdAt}
            className="text-xs text-muted-foreground"
          >
            {formattedCreatedAt}
          </time>
        </div>
        {isEditing ? (
          <CommentUpdateForm
            videoId={videoId}
            commentId={String(comment.id)}
            onCancel={onCancel}
            content={comment.content}
          />
        ) : (
          <>
            <p className="whitespace-pre-wrap break-words text-sm text-foreground">
              {comment.content}
            </p>
            {isMine && (
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-xs text-muted-foreground"
                  onClick={onClickEdit}
                >
                  수정
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-xs text-muted-foreground"
                  onClick={() => onClickDelete(String(comment.id))}
                >
                  삭제
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </li>
  );
};

export default Comment;
