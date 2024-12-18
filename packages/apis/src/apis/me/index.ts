import type { IAPIResponse } from "@abroad/types";
import type { IUser } from "@abroad/types/models";

import { axiosInstance } from "../axiosInstance";

// ============================== 내 정보 ==============================
/** 내 정보 요청 타입 */
export interface GetMeAPIRequest {}
/** 내 정보 응답 타입 */
export interface GetMeAPIResponse
  extends IAPIResponse<Pick<IUser, "id" | "name" | "email" | "role"> | null> {}
/** 내 정보 함수 */
export const getMeAPI = async (): Promise<GetMeAPIResponse> => {
  const { data } = await axiosInstance.get(meApis.getMe.url());
  return data;
};

// ============================== 내 정보 수정 ==============================
/** 내 정보 수정 요청 타입 */
export interface UpdateMeAPIRequest {
  body: Pick<IUser, "name" | "email" | "password">;
}
/** 내 정보 수정 응답 타입 */
export interface UpdateMeAPIResponse extends IUser {}
/** 내 정보 수정 함수 */
export const updateMeAPI = async ({
  body,
}: UpdateMeAPIRequest): Promise<UpdateMeAPIResponse> => {
  const { data } = await axiosInstance.patch(meApis.update.url(), body);
  return data;
};

// ============================== 내 정보 삭제 ==============================
/** 내 정보 삭제 요청 타입 */
export interface DeleteMeAPIRequest {}
/** 내 정보 삭제 응답 타입 */
export interface DeleteMeAPIResponse extends IUser {}
/** 내 정보 삭제 함수 */
export const deleteMeAPI = async (): Promise<DeleteMeAPIResponse> => {
  const { data } = await axiosInstance.delete(meApis.delete.url());
  return data;
};

/** 내 정보 관련 api 데이터 */
export const meApis = {
  getMe: {
    url: () => "/v1/me",
    key: () => ["get", "me"],
    fn: getMeAPI,
  },
  update: {
    url: () => `/v1/me`,
    key: () => ["patch", "me"],
    fn: updateMeAPI,
  },
  delete: {
    url: () => `/v1/me`,
    key: () => ["delete", "me"],
    fn: deleteMeAPI,
  },
};
