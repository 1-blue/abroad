import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { apis } from "../../apis";
import type {
  CreateVideoAPIRequest,
  CreateVideoAPIResponse,
  DeleteVideoAPIRequest,
  DeleteVideoAPIResponse,
  UpdateVideoAPIRequest,
  UpdateVideoAPIResponse,
} from "../../apis/video";
import { handleError } from "../../libs";

export const useVideoMutations = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: createVideoMutateAsync } = useMutation<
    CreateVideoAPIResponse,
    Error,
    CreateVideoAPIRequest
  >({
    mutationFn: async ({ body }) => apis.video.create.fn({ body }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: apis.video.getMany.key() });

      toast.success("수업영상 생성 성공");
    },
    onError: (error) => handleError({ error, title: "수업영상 생성 실패" }),
  });
  const { mutateAsync: updateVideoMutateAsync } = useMutation<
    UpdateVideoAPIResponse,
    Error,
    UpdateVideoAPIRequest
  >({
    mutationFn: apis.video.update.fn,
    onSuccess: ({ data: videoId }) => {
      queryClient.invalidateQueries({ queryKey: apis.video.getMany.key() });
      queryClient.invalidateQueries({
        queryKey: apis.video.getOne.key({
          params: { videoId: String(videoId) },
        }),
      });

      toast.success("수업영상 수정 성공");
    },
    onError: (error) => handleError({ error, title: "수업영상 수정 실패" }),
  });
  const { mutateAsync: deleteVideoMutateAsync } = useMutation<
    DeleteVideoAPIResponse,
    Error,
    DeleteVideoAPIRequest
  >({
    mutationFn: apis.video.delete.fn,
    onSuccess: ({ data: videoId }) => {
      queryClient.invalidateQueries({ queryKey: apis.video.getMany.key() });
      queryClient.invalidateQueries({
        queryKey: apis.video.getOne.key({
          params: { videoId: String(videoId) },
        }),
      });

      toast.success(
        "수업영상이 삭제되었습니다.\n수업영상 목록으로 이동합니다."
      );
    },
    onError: (error) => handleError({ error, title: "수업영상 삭제 실패" }),
  });

  return {
    createVideoMutateAsync,
    updateVideoMutateAsync,
    deleteVideoMutateAsync,
  };
};
