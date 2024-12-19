"use client";

import { z } from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Form } from "@abroad/ui";

import Quiz from "#/app/quiz/_components/Quiz";

import { QUIZS } from "#/app/quiz/_constants/quizs";
import { quizFormSchema } from "#/app/quiz/_schema";

const QuizForm: React.FC = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof quizFormSchema>>({
    resolver: zodResolver(quizFormSchema),
    defaultValues: {
      selectedOptions: QUIZS.map(() => undefined),
    },
  });

  const onSubmit = form.handleSubmit(({ selectedOptions }) => {
    sessionStorage.setItem("quizs", JSON.stringify(QUIZS));
    sessionStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));

    router.push("/quiz/answer");
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <ul className="grid grid-cols-1 gap-4 border-t border-zinc-500 pt-3 lg:grid-cols-2">
          {QUIZS.map((quiz) => (
            <Quiz key={quiz.id} quiz={quiz} />
          ))}
        </ul>

        <Button type="submit" className="ml-auto mt-4 block" size="lg">
          제출
        </Button>
      </form>
    </Form>
  );
};

export default QuizForm;
