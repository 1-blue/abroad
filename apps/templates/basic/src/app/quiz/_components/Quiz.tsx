"use client";

import { z } from "zod";
import { useFormContext } from "react-hook-form";
import { CheckIcon } from "@radix-ui/react-icons";

import type { IQuiz } from "@abroad/types/models";
import { cn } from "@abroad/ui/libs";

import { quizFormSchema } from "#/app/quiz/_schema";

interface IProps {
  quiz: IQuiz;
}

const Quiz: React.FC<IProps> = ({ quiz }) => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<z.infer<typeof quizFormSchema>>();
  const quizSequnce = quiz.sequence - 1;
  const selectedOptionSequence = watch(`selectedOptions.${quizSequnce}`);
  const errorMessage = errors.selectedOptions?.[quizSequnce]?.message;

  const onClickOption = (sequence: number) => {
    const isPrevSelected = selectedOptionSequence === sequence;

    setValue(
      `selectedOptions.${quizSequnce}`,
      isPrevSelected ? undefined : sequence,
    );
  };

  return (
    <li className="p-4">
      <h3 className="mb-4 flex items-baseline gap-2.5">
        <span className="text-xl font-semibold">{quiz.sequence}.</span>
        <span className="text-lg">{quiz.title}</span>
      </h3>
      <p className="text-base text-zinc-800">{quiz.description}</p>

      <ul className="mt-4 flex flex-col gap-0.5">
        {quiz.hints.map((hint) => (
          <span key={hint} className="text-xs text-zinc-500">
            * {hint}
          </span>
        ))}
      </ul>

      <ul className="mt-4 flex flex-col gap-1">
        {quiz.options.map((option) => (
          <li
            key={option.sequence}
            className={cn(
              "relative flex w-fit cursor-pointer items-center gap-1 *:transition-all *:duration-200 *:ease-in-out",
              selectedOptionSequence === option.sequence &&
                "*:border-green-500 *:text-green-500",
            )}
            onClick={() => onClickOption(option.sequence)}
          >
            <CheckIcon
              className={cn(
                "absolute left-2 top-1 h-10 w-10 -translate-x-1/2 -translate-y-1/2 opacity-0",
                selectedOptionSequence === option.sequence && "opacity-100",
              )}
            />
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-zinc-700 text-xs text-zinc-700">
              {option.sequence}
            </span>
            <span className="text-sm text-zinc-700">{option.content}</span>
          </li>
        ))}
      </ul>

      {errorMessage && (
        <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
      )}
    </li>
  );
};

export default Quiz;
