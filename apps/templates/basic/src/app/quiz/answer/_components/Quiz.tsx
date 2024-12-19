"use client";

import { CheckIcon, Cross1Icon, ValueIcon } from "@radix-ui/react-icons";

import type { IQuiz } from "@abroad/types/models";

import { cn } from "@abroad/ui/libs";

interface IProps {
  quiz: IQuiz;
  selectedOption: number;
}

const Quiz: React.FC<IProps> = ({ quiz, selectedOption }) => {
  const isCorrect = quiz.answer === selectedOption;

  return (
    <li className="relative p-4">
      {isCorrect ? (
        <ValueIcon className="absolute left-6 top-7 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-green-500" />
      ) : (
        <Cross1Icon className="absolute left-6 top-7 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-red-500" />
      )}

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
              quiz.answer === option.sequence &&
                "*:border-green-500 *:text-green-500",
            )}
          >
            <CheckIcon
              className={cn(
                "absolute left-2 top-1 h-10 w-10 -translate-x-1/2 -translate-y-1/2 opacity-0",
                quiz.answer === option.sequence && "opacity-100",
              )}
            />
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-zinc-700 text-xs text-zinc-700">
              {option.sequence}
            </span>
            <span className="text-sm text-zinc-700">{option.content}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-sm text-zinc-600">
        정답: {quiz.answer}
        <br />
        당신의 답: {selectedOption}
      </p>

      <div className="mt-4 flex flex-col gap-1 rounded-lg bg-zinc-100 p-4">
        <span className="text-sm font-semibold">해설</span>
        <p className="text-xs text-zinc-600">{quiz.commentary}</p>
      </div>
    </li>
  );
};

export default Quiz;
