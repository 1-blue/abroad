import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { apis } from "../../apis";
import type {
  CreateQNACommentAPIRequest,
  CreateQNACommentAPIResponse,
  DeleteQNACommentAPIRequest,
  DeleteQNACommentAPIResponse,
  UpdateQNACommentAPIRequest,
  UpdateQNACommentAPIResponse,
} from "../../apis/qna/comment";
import { handleError } from "../../libs";

export const useQNACommentMutations = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: createQNACommentMutateAsync } = useMutation<
    CreateQNACommentAPIResponse,
    Error,
    CreateQNACommentAPIRequest
  >({
    mutationFn: apis.qna.comment.create.fn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: apis.qna.getMany.key() });

      toast.success("댓글 작성 성공");
    },
    onError: (error) => handleError({ error, title: "댓글 작성 실패" }),
  });
  const { mutateAsync: updateQNACommentMutateAsync } = useMutation<
    UpdateQNACommentAPIResponse,
    Error,
    UpdateQNACommentAPIRequest
  >({
    mutationFn: apis.qna.comment.update.fn,
    onSuccess: ({ data: qnaCommentId }) => {
      queryClient.invalidateQueries({ queryKey: apis.qna.getMany.key() });
      queryClient.invalidateQueries({
        queryKey: apis.qna.getOne.key({
          params: { qnaId: String(qnaCommentId) },
        }),
      });

      toast.success("댓글 수정 성공");
    },
    onError: (error) => handleError({ error, title: "댓글 수정 실패" }),
  });
  const { mutateAsync: deleteQNACommentMutateAsync } = useMutation<
    DeleteQNACommentAPIResponse,
    Error,
    DeleteQNACommentAPIRequest
  >({
    mutationFn: apis.qna.comment.delete.fn,
    onSuccess: ({ data: qnaCommentId }) => {
      queryClient.invalidateQueries({ queryKey: apis.qna.getMany.key() });
      queryClient.invalidateQueries({
        queryKey: apis.qna.getOne.key({
          params: { qnaId: String(qnaCommentId) },
        }),
      });

      toast.success("댓글이 삭제되었습니다.");
    },
    onError: (error) => handleError({ error, title: "댓글 삭제 실패" }),
  });

  return {
    createQNACommentMutateAsync,
    updateQNACommentMutateAsync,
    deleteQNACommentMutateAsync,
  };
};
