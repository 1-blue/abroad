import type { IUser } from "@abroad/types/models";

import { axiosInstance } from "../axiosInstance";

// ============================== 회원가입 ==============================
/** 회원가입 요청 타입 */
export interface SignUpAPIRequest {
  body: Pick<IUser, "email" | "password" | "name">;
}
/** 회원가입 응답 타입 */
export interface SignUpAPIResponse {}
/** 회원가입 함수 */
export const signUpAPI = async ({
  body,
}: SignUpAPIRequest): Promise<SignUpAPIResponse> => {
  const { data } = await axiosInstance.post(authApis.signUp.url(), body);
  return data;
};

// ============================== 로그인 ==============================
/** 로그인 요청 타입 */
export interface LogInAPIRequest {
  body: Pick<IUser, "email" | "password">;
}
/** 로그인 응답 타입 */
export interface LogInAPIResponse {}
/** 로그인 함수 */
export const logInAPI = async ({
  body,
}: LogInAPIRequest): Promise<LogInAPIResponse> => {
  const formData = new URLSearchParams();
  Object.entries(body).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const { data } = await axiosInstance.post(authApis.logIn.url(), formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return data;
};

// ============================== 로그아웃 ==============================
/** 로그아웃 요청 타입 */
export interface LogOutAPIRequest {}
/** 로그아웃 응답 타입 */
export interface LogOutAPIResponse {}
/** 로그아웃 함수 */
export const logOutAPI = async (): Promise<LogOutAPIResponse> => {
  const { data } = await axiosInstance.post(authApis.logOut.url());
  return data;
};

/** 인증 관련 api 데이터 */
export const authApis = {
  signUp: {
    url: () => "/v1/signupProc",
    key: () => ["post", "signup"],
    fn: signUpAPI,
  },
  logIn: {
    url: () => "/v1/loginProc",
    key: () => ["post", "login"],
    fn: logInAPI,
  },
  logOut: {
    url: () => "/v1/logout",
    key: () => ["post", "logout"],
    fn: logOutAPI,
  },
};
