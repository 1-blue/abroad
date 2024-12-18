import { Route } from "@abroad/types";

export const generateBaseRoutes = (): Route[] => [
  { label: "강사소개", path: "/teacher" },
  { label: "수업영상", path: "/videos" },
  { label: "확인 테스트", path: "/quiz" },
  { label: "퀴즈로", path: "/quizro" },
  { label: "Q&A", path: "/qna" },
];
