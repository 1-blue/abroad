import { AxiosError } from "axios";
import { toast } from "sonner";

interface HandleErrorArgs {
  error: unknown;
  title: string;
}

/** 공용 에러 처리 함수 */
export const handleError = ({ error, title }: HandleErrorArgs) => {
  console.error(`🚫 Error ${title} >> `, error);

  const errorToast = (description: string) =>
    toast.error(title, { description });

  if (error instanceof AxiosError) {
    const errorMessage =
      error?.response?.data?.data?.message ||
      error?.response?.data?.message ||
      "알 수 없는 에러가 발생했습니다.";

    errorToast(errorMessage);
  } else {
    errorToast(`알 수 없는 에러가 발생했습니다\n잠시후에 다시 시도해주세요!`);
  }
};
