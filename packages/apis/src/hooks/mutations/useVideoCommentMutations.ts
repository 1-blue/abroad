import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { apis } from "../../apis";
import type {
  CreateVideoCommentAPIRequest,
  CreateVideoCommentAPIResponse,
  DeleteVideoCommentAPIRequest,
  DeleteVideoCommentAPIResponse,
  UpdateVideoCommentAPIRequest,
  UpdateVideoCommentAPIResponse,
} from "../../apis/video/comment";
import { handleError } from "../../libs";

export const useVideoCommentMutations = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: createVideoCommentMutateAsync } = useMutation<
    CreateVideoCommentAPIResponse,
    Error,
    CreateVideoCommentAPIRequest
  >({
    mutationFn: apis.video.comment.create.fn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: apis.video.getMany.key() });

      toast.success("댓글 작성 성공");
    },
    onError: (error) => handleError({ error, title: "댓글 작성 실패" }),
  });
  const { mutateAsync: updateVideoCommentMutateAsync } = useMutation<
    UpdateVideoCommentAPIResponse,
    Error,
    UpdateVideoCommentAPIRequest
  >({
    mutationFn: apis.video.comment.update.fn,
    onSuccess: ({ data: videoCommentId }) => {
      queryClient.invalidateQueries({ queryKey: apis.video.getMany.key() });
      queryClient.invalidateQueries({
        queryKey: apis.video.getOne.key({
          params: { videoId: String(videoCommentId) },
        }),
      });

      toast.success("댓글 수정 성공");
    },
    onError: (error) => handleError({ error, title: "댓글 수정 실패" }),
  });
  const { mutateAsync: deleteVideoCommentMutateAsync } = useMutation<
    DeleteVideoCommentAPIResponse,
    Error,
    DeleteVideoCommentAPIRequest
  >({
    mutationFn: apis.video.comment.delete.fn,
    onSuccess: ({ data: videoCommentId }) => {
      queryClient.invalidateQueries({ queryKey: apis.video.getMany.key() });
      queryClient.invalidateQueries({
        queryKey: apis.video.getOne.key({
          params: { videoId: String(videoCommentId) },
        }),
      });

      toast.success("댓글 삭제 성공");
    },
    onError: (error) => handleError({ error, title: "댓글 삭제 실패" }),
  });

  return {
    createVideoCommentMutateAsync,
    updateVideoCommentMutateAsync,
    deleteVideoCommentMutateAsync,
  };
};
