/**
 * 유저 권한
 * 1. `ADMIN`: 관리자
 * 2. `USER`: 일반 유저
 */
type TUserRole = "ADMIN" | "USER";

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  role: TUserRole;
}
