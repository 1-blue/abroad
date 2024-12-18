import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { apis } from "../../apis";
import type {
  LogInAPIRequest,
  LogInAPIResponse,
  LogOutAPIRequest,
  LogOutAPIResponse,
  SignUpAPIRequest,
  SignUpAPIResponse,
} from "../../apis/auth";
import { handleError } from "../../libs";

export const useAuthMutations = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: signUpMutateAsync } = useMutation<
    SignUpAPIResponse,
    Error,
    SignUpAPIRequest
  >({
    mutationFn: apis.auth.signUp.fn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: apis.me.getMe.key() });

      toast.success("회원가입에 성공했습니다.");
    },
    onError: (error) => handleError({ error, title: "회원가입 실패" }),
  });
  const { mutateAsync: logInMutateAsync } = useMutation<
    LogInAPIResponse,
    Error,
    LogInAPIRequest
  >({
    mutationFn: apis.auth.logIn.fn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: apis.me.getMe.key() });

      toast.success("로그인에 성공했습니다.");
    },
    onError: (error) => handleError({ error, title: "로그인 실패" }),
  });
  const { mutateAsync: logOutMutateAsync } = useMutation<
    LogOutAPIResponse,
    Error,
    LogOutAPIRequest
  >({
    mutationFn: apis.auth.logOut.fn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: apis.me.getMe.key() });

      toast.success("로그아웃 되었습니다.");
    },
    onError: (error) => handleError({ error, title: "로그아웃 실패" }),
  });

  return {
    signUpMutateAsync,
    logInMutateAsync,
    logOutMutateAsync,
  };
};
