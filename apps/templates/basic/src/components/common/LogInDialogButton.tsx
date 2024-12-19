"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  RFHInput,
} from "@abroad/ui";
import { useAuthMutations } from "@abroad/apis/hooks";

const loginSchema = z.object({
  email: z.string().email({ message: "이메일 형식이 올바르지 않습니다." }),
  password: z
    .string()
    .min(8, { message: "비밀번호는 최소 8자 이상이어야 합니다." }),
});

const LogInDialogButton: React.FC = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { logInMutateAsync } = useAuthMutations();
  const onSubmit = form.handleSubmit(async (body) => {
    await logInMutateAsync({ body });
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="h-fit p-0 text-xs hover:bg-transparent"
        >
          로그인
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] -translate-y-full overflow-y-auto rounded-lg">
        <DialogHeader className="items-center">
          <DialogTitle>로그인</DialogTitle>
          <DialogDescription>로그인 후 이용해주세요.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={onSubmit} className="flex flex-col gap-3">
            <RFHInput
              name="email"
              type="text"
              placeholder="이메일을 입력해주세요."
            />
            <RFHInput
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
            <Button type="submit" className="self-end" size="lg">
              로그인
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default LogInDialogButton;
