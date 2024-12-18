import { IAPIResponse, IPageable } from "@abroad/types";
import type { IVideoComment, IUser } from "@abroad/types/models";

import { axiosInstance } from "../../axiosInstance";

// ============================== 수업영상 댓글 생성 ==============================
/** 수업영상 댓글 생성 요청 타입 */
export interface CreateVideoCommentAPIRequest {
  body: Pick<IVideoComment, "content">;
  params: { videoId: string };
}
/** 수업영상 댓글 생성 응답 타입 */
export interface CreateVideoCommentAPIResponse
  extends IAPIResponse<IVideoComment> {}
/** 수업영상 댓글 생성 함수 */
export const createVideoCommentAPI = async ({
  body,
  params,
}: CreateVideoCommentAPIRequest): Promise<CreateVideoCommentAPIResponse> => {
  const { data } = await axiosInstance.post(
    videoCommentApis.create.url({ params }),
    body
  );

  return data;
};

// ============================== 수업영상 댓글들 읽기 ==============================
/** 수업영상 댓글들 읽기 요청 타입 */
export interface GetManyVideoCommentAPIRequest {
  params: { videoId: string };
}
/** 수업영상 댓글들 읽기 응답 타입 */
export interface GetManyVideoCommentAPIResponse
  extends IAPIResponse<{
    content: (Pick<IVideoComment, "id" | "content" | "createdAt"> & {
      user: Pick<IUser, "id" | "name">;
    })[];
    pageable: IPageable;
  }> {}
/** 수업영상 댓글들 읽기 함수 */
export const getManyVideoCommentAPI = async ({
  params,
}: GetManyVideoCommentAPIRequest): Promise<GetManyVideoCommentAPIResponse> => {
  const { data } = await axiosInstance.get(
    videoCommentApis.getMany.url({ params })
  );

  return data;
};

// ============================== 수업영상 댓글 수정 ==============================
/** 수업영상 댓글 수정 요청 타입 */
export interface UpdateVideoCommentAPIRequest {
  body: Pick<IVideoComment, "content">;
  params: { videoId: string; commentId: string };
}
/** 수업영상 댓글 수정 응답 타입 */
export interface UpdateVideoCommentAPIResponse
  extends IAPIResponse<IVideoComment> {}
/** 수업영상 댓글 수정 함수 */
export const updateVideoCommentAPI = async ({
  body,
  params,
}: UpdateVideoCommentAPIRequest): Promise<UpdateVideoCommentAPIResponse> => {
  const { data } = await axiosInstance.patch(
    videoCommentApis.update.url({ params }),
    body
  );

  return data;
};

// ============================== 수업영상 댓글 삭제 ==============================
/** 수업영상 댓글 삭제 요청 타입 */
export interface DeleteVideoCommentAPIRequest {
  params: { videoId: string; commentId: string };
}
/** 수업영상 댓글 삭제 응답 타입 */
export interface DeleteVideoCommentAPIResponse extends IAPIResponse<number> {}
/** 수업영상 댓글 삭제 함수 */
export const deleteVideoCommentAPI = async ({
  params,
}: DeleteVideoCommentAPIRequest): Promise<DeleteVideoCommentAPIResponse> => {
  const { data } = await axiosInstance.delete(
    videoCommentApis.delete.url({ params })
  );

  return data;
};

/** video관련 api 데이터 */
export const videoCommentApis = {
  create: {
    url: ({ params }: Pick<CreateVideoCommentAPIRequest, "params">) =>
      `/v1/video/${params.videoId}/comment`,
    key: ({ params }: Pick<CreateVideoCommentAPIRequest, "params">) => [
      "post",
      "video",
      params.videoId,
      "comment",
    ],
    fn: createVideoCommentAPI,
  },
  getMany: {
    url: ({ params }: Pick<GetManyVideoCommentAPIRequest, "params">) =>
      `/v1/video/${params.videoId}/comment`,
    key: ({ params }: Pick<GetManyVideoCommentAPIRequest, "params">) => [
      "get",
      "video",
      params.videoId,
      "comment",
    ],
    fn: getManyVideoCommentAPI,
  },
  update: {
    url: ({ params }: Pick<UpdateVideoCommentAPIRequest, "params">) =>
      `/v1/video/${params.videoId}/comment/${params.commentId}`,
    key: ({ params }: Pick<UpdateVideoCommentAPIRequest, "params">) => [
      "patch",
      "video",
      params.videoId,
      "comment",
      params.commentId,
    ],
    fn: updateVideoCommentAPI,
  },
  delete: {
    url: ({ params }: Pick<DeleteVideoCommentAPIRequest, "params">) =>
      `/v1/video/${params.videoId}/comment/${params.commentId}`,
    key: ({ params }: Pick<DeleteVideoCommentAPIRequest, "params">) => [
      "delete",
      "video",
      params.videoId,
      "comment",
      params.commentId,
    ],
    fn: deleteVideoCommentAPI,
  },
};
