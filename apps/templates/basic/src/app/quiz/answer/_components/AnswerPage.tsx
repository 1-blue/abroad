"use client";

import { useEffect, useState } from "react";

import type { IQuiz } from "@abroad/types/models";

import Quiz from "#/app/quiz/answer/_components/Quiz";

const AnswerPage: React.FC = () => {
  const [quizs, setQuizs] = useState<IQuiz[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  useEffect(() => {
    const quizs = JSON.parse(
      sessionStorage.getItem("quizs") || "[]",
    ) as IQuiz[];
    // TODO: Toast
    if (!Array.isArray(quizs)) return;
    if (quizs.length === 0) return;

    const selectedOptions = JSON.parse(
      sessionStorage.getItem("selectedOptions") || "[]",
    );
    // TODO: Toast
    if (!Array.isArray(selectedOptions)) return;
    if (selectedOptions.length === 0) return;

    setQuizs(quizs);
    setSelectedOptions(selectedOptions);
  }, []);

  return (
    <ul className="grid grid-cols-1 gap-4 border-t border-zinc-500 pt-3 lg:grid-cols-2">
      {quizs.map((quiz) => (
        <Quiz
          key={quiz.id}
          quiz={quiz}
          selectedOption={selectedOptions[quiz.sequence - 1] ?? 0}
        />
      ))}
    </ul>
  );
};

export default AnswerPage;
