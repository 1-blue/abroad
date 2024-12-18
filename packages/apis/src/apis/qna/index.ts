import type { IPageable, IAPIResponse } from "@abroad/types";
import type { IQNA, IUser } from "@abroad/types/models";

import { axiosInstance } from "../axiosInstance";

// ============================== QnA 생성 ==============================
/** QnA 생성 요청 타입 */
export interface CreateQNAAPIRequest {
  body: Pick<IQNA, "title" | "content" | "isPrivate">;
}
/** QnA 생성 응답 타입 */
export interface CreateQNAAPIResponse extends IAPIResponse<IQNA> {}
/** QnA 생성 함수 */
export const createQNAAPI = async ({
  body,
}: CreateQNAAPIRequest): Promise<CreateQNAAPIResponse> => {
  const { data } = await axiosInstance.post(qnaApis.create.url(), body);
  return data;
};

// ============================== QnA들 읽기 ==============================
/** QnA들 읽기 요청 타입 */
export interface GetManyQNAAPIRequest {}
/** QnA들 읽기 응답 타입 */
export interface GetManyQNAAPIResponse
  extends IAPIResponse<{
    content: (Pick<
      IQNA,
      "id" | "title" | "content" | "isPrivate" | "createdAt"
    > & {
      user: Pick<IUser, "id" | "name" | "email">;
    })[];
    pageable: IPageable;
  }> {}
/** QnA들 읽기 함수 */
export const getManyQNAAPI = async (): Promise<GetManyQNAAPIResponse> => {
  const { data } = await axiosInstance.get(qnaApis.getMany.url());
  return data;
};

// ============================== QnA 읽기 ==============================
/** QnA 읽기 요청 타입 */
export interface GetOneQNAAPIRequest {
  params: { qnaId: string };
}
/** QnA 읽기 응답 타입 */
export interface GetOneQNAAPIResponse
  extends IAPIResponse<
    Pick<IQNA, "id" | "title" | "content" | "isPrivate" | "createdAt"> & {
      user: Pick<IUser, "id" | "name">;
    }
  > {}
/** QnA 읽기 함수 */
export const getOneQNAAPI = async ({
  params,
}: GetOneQNAAPIRequest): Promise<GetOneQNAAPIResponse> => {
  const { data } = await axiosInstance.get(qnaApis.getOne.url({ params }));
  return data;
};

// ============================== QnA 수정 ==============================
/** QnA 수정 요청 타입 */
export interface UpdateQNAAPIRequest {
  body: Pick<IQNA, "title" | "content" | "isPrivate">;
  params: { qnaId: string };
}
/** QnA 수정 응답 타입 */
export interface UpdateQNAAPIResponse extends IAPIResponse<IQNA> {}
/** QnA 수정 함수 */
export const updateQNAAPI = async ({
  body,
  params,
}: UpdateQNAAPIRequest): Promise<UpdateQNAAPIResponse> => {
  const { data } = await axiosInstance.patch(
    qnaApis.update.url({ params }),
    body
  );
  return data;
};

// ============================== QnA 삭제 ==============================
/** QnA 삭제 요청 타입 */
export interface DeleteQNAAPIRequest {
  params: { qnaId: string };
}
/** QnA 삭제 응답 타입 */
export interface DeleteQNAAPIResponse extends IAPIResponse<number> {}
/** QnA 삭제 함수 */
export const deleteQNAAPI = async ({
  params,
}: DeleteQNAAPIRequest): Promise<DeleteQNAAPIResponse> => {
  const { data } = await axiosInstance.delete(qnaApis.delete.url({ params }));
  return data;
};

/** qna관련 api 데이터 */
export const qnaApis = {
  create: {
    url: () => "/v1/qna",
    key: () => ["post", "qna"],
    fn: createQNAAPI,
  },
  getOne: {
    url: ({ params }: Pick<GetOneQNAAPIRequest, "params">) =>
      `/v1/qna/${params.qnaId}`,
    key: ({ params }: Pick<GetOneQNAAPIRequest, "params">) => [
      "get",
      "qna",
      params.qnaId,
    ],
    fn: getOneQNAAPI,
  },
  getMany: {
    url: () => `/v1/qna`,
    key: () => ["get", "qna"],
    fn: getManyQNAAPI,
  },
  update: {
    url: ({ params }: Pick<UpdateQNAAPIRequest, "params">) =>
      `/v1/qna/${params.qnaId}`,
    key: ({ params }: Pick<UpdateQNAAPIRequest, "params">) => [
      "patch",
      "qna",
      params.qnaId,
    ],
    fn: updateQNAAPI,
  },
  delete: {
    url: ({ params }: Pick<DeleteQNAAPIRequest, "params">) =>
      `/v1/qna/${params.qnaId}`,
    key: ({ params }: Pick<DeleteQNAAPIRequest, "params">) => [
      "delete",
      "qna",
      params.qnaId,
    ],
    fn: deleteQNAAPI,
  },
};
