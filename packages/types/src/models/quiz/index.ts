export interface IQuiz {
  id: number;
  sequence: number;
  title: string;
  description: string;
  hints: string[];
  options: IQuizOption[];
  answer: number;
  commentary: string;
}
export interface IQuizOption {
  sequence: number;
  content: string;
}
