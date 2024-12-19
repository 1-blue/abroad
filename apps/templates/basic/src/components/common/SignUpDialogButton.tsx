"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  RFHInput,
} from "@abroad/ui";
import { useAuthMutations } from "@abroad/apis/hooks";

const signupSchema = z.object({
  email: z.string().email({ message: "이메일 형식이 올바르지 않습니다." }),
  password: z
    .string()
    .min(8, { message: "비밀번호는 최소 8자 이상이어야 합니다." }),
  name: z.string().min(1, { message: "이름을 입력해주세요." }),
});

const SignUpDialogButton: React.FC = () => {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const { signUpMutateAsync } = useAuthMutations();
  const onSubmit = form.handleSubmit(async (body) => {
    await signUpMutateAsync({ body });
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="h-fit p-0 text-xs hover:bg-transparent"
        >
          회원가입
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] -translate-y-full overflow-y-auto rounded-lg">
        <DialogHeader className="items-center">
          <DialogTitle>회원가입</DialogTitle>
          <DialogDescription>회원가입 후 이용해주세요.</DialogDescription>
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
            <RFHInput
              name="name"
              type="text"
              placeholder="이름을 입력해주세요."
            />
            <DialogClose asChild>
              <Button type="submit" className="self-end" size="lg">
                회원가입
              </Button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpDialogButton;
