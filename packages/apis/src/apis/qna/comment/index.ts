import { IAPIResponse, IPageable } from "@abroad/types";
import type { IQNAComment, IUser } from "@abroad/types/models";

import { axiosInstance } from "../../axiosInstance";

// ============================== QnA 댓글 생성 ==============================
/** QnA 댓글 생성 요청 타입 */
export interface CreateQNACommentAPIRequest {
  body: Pick<IQNAComment, "content">;
  params: { qnaId: string };
}
/** QnA 댓글 생성 응답 타입 */
export interface CreateQNACommentAPIResponse
  extends IAPIResponse<IQNAComment> {}
/** QnA 댓글 생성 함수 */
export const createQNACommentAPI = async ({
  body,
  params,
}: CreateQNACommentAPIRequest): Promise<CreateQNACommentAPIResponse> => {
  const { data } = await axiosInstance.post(
    qnaCommentApis.create.url({ params }),
    body
  );

  return data;
};

// ============================== QnA 댓글들 읽기 ==============================
/** QnA 댓글들 읽기 요청 타입 */
export interface GetManyQNACommentAPIRequest {
  params: { qnaId: string };
}
/** QnA 댓글들 읽기 응답 타입 */
export interface GetManyQNACommentAPIResponse
  extends IAPIResponse<{
    content: (Pick<IQNAComment, "id" | "content" | "createdAt"> & {
      user: Pick<IUser, "id" | "name" | "email">;
    })[];
    pageable: IPageable;
  }> {}
/** QnA 댓글들 읽기 함수 */
export const getManyQNACommentAPI = async ({
  params,
}: GetManyQNACommentAPIRequest): Promise<GetManyQNACommentAPIResponse> => {
  const { data } = await axiosInstance.get(
    qnaCommentApis.getMany.url({ params })
  );

  return data;
};

// ============================== QnA 댓글 수정 ==============================
/** QnA 댓글 수정 요청 타입 */
export interface UpdateQNACommentAPIRequest {
  body: Pick<IQNAComment, "content">;
  params: { qnaId: string; commentId: string };
}
/** QnA 댓글 수정 응답 타입 */
export interface UpdateQNACommentAPIResponse
  extends IAPIResponse<IQNAComment> {}
/** QnA 댓글 수정 함수 */
export const updateQNACommentAPI = async ({
  body,
  params,
}: UpdateQNACommentAPIRequest): Promise<UpdateQNACommentAPIResponse> => {
  const { data } = await axiosInstance.patch(
    qnaCommentApis.update.url({ params }),
    body
  );

  return data;
};

// ============================== QnA 댓글 삭제 ==============================
/** QnA 댓글 삭제 요청 타입 */
export interface DeleteQNACommentAPIRequest {
  params: { qnaId: string; commentId: string };
}
/** QnA 댓글 삭제 응답 타입 */
export interface DeleteQNACommentAPIResponse extends IAPIResponse<number> {}
/** QnA 댓글 삭제 함수 */
export const deleteQNACommentAPI = async ({
  params,
}: DeleteQNACommentAPIRequest): Promise<DeleteQNACommentAPIResponse> => {
  const { data } = await axiosInstance.delete(
    qnaCommentApis.delete.url({ params })
  );

  return data;
};

/** qna관련 api 데이터 */
export const qnaCommentApis = {
  create: {
    url: ({ params }: Pick<CreateQNACommentAPIRequest, "params">) =>
      `/v1/qna/${params.qnaId}/comment`,
    key: ({ params }: Pick<CreateQNACommentAPIRequest, "params">) => [
      "post",
      "qna",
      params.qnaId,
      "comment",
    ],
    fn: createQNACommentAPI,
  },
  getMany: {
    url: ({ params }: Pick<GetManyQNACommentAPIRequest, "params">) =>
      `/v1/qna/${params.qnaId}/comment`,
    key: ({ params }: Pick<GetManyQNACommentAPIRequest, "params">) => [
      "get",
      "qna",
      params.qnaId,
      "comment",
    ],
    fn: getManyQNACommentAPI,
  },
  update: {
    url: ({ params }: Pick<UpdateQNACommentAPIRequest, "params">) =>
      `/v1/qna/${params.qnaId}/comment/${params.commentId}`,
    key: ({ params }: Pick<UpdateQNACommentAPIRequest, "params">) => [
      "patch",
      "qna",
      params.qnaId,
      "comment",
      params.commentId,
    ],
    fn: updateQNACommentAPI,
  },
  delete: {
    url: ({ params }: Pick<DeleteQNACommentAPIRequest, "params">) =>
      `/v1/qna/${params.qnaId}/comment/${params.commentId}`,
    key: ({ params }: Pick<DeleteQNACommentAPIRequest, "params">) => [
      "delete",
      "qna",
      params.qnaId,
      "comment",
      params.commentId,
    ],
    fn: deleteQNACommentAPI,
  },
};
