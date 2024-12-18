import type { IAPIResponse, IPageable } from "@abroad/types";
import type { IVideo, IUser } from "@abroad/types/models";

import { axiosInstance } from "../axiosInstance";

// ============================== Video 생성 ==============================
/** Video 생성 요청 타입 */
export interface CreateVideoAPIRequest {
  body: Pick<IVideo, "title" | "content" | "url">;
}
/** Video 생성 응답 타입 */
export interface CreateVideoAPIResponse extends IAPIResponse<IVideo> {}
/** Video 생성 함수 */
export const createVideoAPI = async ({
  body,
}: CreateVideoAPIRequest): Promise<CreateVideoAPIResponse> => {
  const { data } = await axiosInstance.post(videoApis.create.url(), body);
  return data;
};

// ============================== Video들 읽기 ==============================
/** Video들 읽기 요청 타입 */
export interface GetManyVideoAPIRequest {}
/** Video들 읽기 응답 타입 */
export interface GetManyVideoAPIResponse
  extends IAPIResponse<{
    content: (Pick<IVideo, "id" | "title" | "content" | "url" | "createdAt"> & {
      user: Pick<IUser, "id" | "name">;
    })[];
    pageable: IPageable;
  }> {}
/** Video들 읽기 함수 */
export const getManyVideoAPI = async (): Promise<GetManyVideoAPIResponse> => {
  const { data } = await axiosInstance.get(videoApis.getMany.url());
  return data;
};

// ============================== Video 읽기 ==============================
/** Video 읽기 요청 타입 */
export interface GetOneVideoAPIRequest {
  params: { videoId: string };
}
/** Video 읽기 응답 타입 */
export interface GetOneVideoAPIResponse
  extends IAPIResponse<
    IVideo & { user: Pick<IUser, "id" | "name" | "email"> }
  > {}
/** Video 읽기 함수 */
export const getOneVideoAPI = async ({
  params,
}: GetOneVideoAPIRequest): Promise<GetOneVideoAPIResponse> => {
  const { data } = await axiosInstance.get(videoApis.getOne.url({ params }));
  return data;
};

// ============================== Video 수정 ==============================
/** Video 수정 요청 타입 */
export interface UpdateVideoAPIRequest {
  body: Pick<IVideo, "title" | "content" | "url">;
  params: { videoId: string };
}
/** Video 수정 응답 타입 */
export interface UpdateVideoAPIResponse extends IAPIResponse<IVideo> {}
/** Video 수정 함수 */
export const updateVideoAPI = async ({
  body,
  params,
}: UpdateVideoAPIRequest): Promise<UpdateVideoAPIResponse> => {
  const { data } = await axiosInstance.patch(
    videoApis.update.url({ params }),
    body
  );
  return data;
};

// ============================== Video 삭제 ==============================
/** Video 삭제 요청 타입 */
export interface DeleteVideoAPIRequest {
  params: { videoId: string };
}
/** Video 삭제 응답 타입 */
export interface DeleteVideoAPIResponse extends IAPIResponse<number> {}
/** Video 삭제 함수 */
export const deleteVideoAPI = async ({
  params,
}: DeleteVideoAPIRequest): Promise<DeleteVideoAPIResponse> => {
  const { data } = await axiosInstance.delete(videoApis.delete.url({ params }));
  return data;
};

/** video관련 api 데이터 */
export const videoApis = {
  create: {
    url: () => "/v1/video",
    key: () => ["post", "video"],
    fn: createVideoAPI,
  },
  getOne: {
    url: ({ params }: Pick<GetOneVideoAPIRequest, "params">) =>
      `/v1/video/${params.videoId}`,
    key: ({ params }: Pick<GetOneVideoAPIRequest, "params">) => [
      "get",
      "video",
      params.videoId,
    ],
    fn: getOneVideoAPI,
  },
  getMany: {
    url: () => `/v1/video`,
    key: () => ["get", "video"],
    fn: getManyVideoAPI,
  },
  update: {
    url: ({ params }: Pick<UpdateVideoAPIRequest, "params">) =>
      `/v1/video/${params.videoId}`,
    key: ({ params }: Pick<UpdateVideoAPIRequest, "params">) => [
      "patch",
      "video",
      params.videoId,
    ],
    fn: updateVideoAPI,
  },
  delete: {
    url: ({ params }: Pick<DeleteVideoAPIRequest, "params">) =>
      `/v1/video/${params.videoId}`,
    key: ({ params }: Pick<DeleteVideoAPIRequest, "params">) => [
      "delete",
      "video",
      params.videoId,
    ],
    fn: deleteVideoAPI,
  },
};
