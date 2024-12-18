import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { apis } from "../../apis";
import type {
  CreateQNAAPIRequest,
  CreateQNAAPIResponse,
  DeleteQNAAPIRequest,
  DeleteQNAAPIResponse,
  UpdateQNAAPIRequest,
  UpdateQNAAPIResponse,
} from "../../apis/qna";
import { handleError } from "../../libs";

export const useQNAMutations = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: createQNAMutateAsync } = useMutation<
    CreateQNAAPIResponse,
    Error,
    CreateQNAAPIRequest
  >({
    mutationFn: async ({ body }) => apis.qna.create.fn({ body }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: apis.qna.getMany.key() });

      toast.success(`Q&A가 작성되었습니다.`);
    },
    onError: (error) => handleError({ error, title: "Q&A 작성 실패" }),
  });
  const { mutateAsync: updateQNAMutateAsync } = useMutation<
    UpdateQNAAPIResponse,
    Error,
    UpdateQNAAPIRequest
  >({
    mutationFn: apis.qna.update.fn,
    onSuccess: ({ data: qnaId }) => {
      queryClient.invalidateQueries({ queryKey: apis.qna.getMany.key() });
      queryClient.invalidateQueries({
        queryKey: apis.qna.getOne.key({ params: { qnaId: String(qnaId) } }),
      });

      toast.success(`Q&A가 수정되었습니다.`);
    },
    onError: (error) => handleError({ error, title: "Q&A 수정 실패" }),
  });
  const { mutateAsync: deleteQNAMutateAsync } = useMutation<
    DeleteQNAAPIResponse,
    Error,
    DeleteQNAAPIRequest
  >({
    mutationFn: apis.qna.delete.fn,
    onSuccess: ({ data: qnaId }) => {
      queryClient.invalidateQueries({ queryKey: apis.qna.getMany.key() });
      queryClient.invalidateQueries({
        queryKey: apis.qna.getOne.key({ params: { qnaId: String(qnaId) } }),
      });

      toast.success("Q&A가 삭제되었습니다.\nQ&A 목록으로 이동합니다.");
    },
    onError: (error) => handleError({ error, title: "Q&A 삭제 실패" }),
  });

  return {
    createQNAMutateAsync,
    updateQNAMutateAsync,
    deleteQNAMutateAsync,
  };
};
