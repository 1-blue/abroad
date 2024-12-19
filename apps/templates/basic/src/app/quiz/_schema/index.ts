import { z } from "zod";

import { QUIZS } from "#/app/quiz/_constants/quizs";

export const quizFormSchema = z.object({
  selectedOptions: z
    .array(z.number().optional())
    .length(QUIZS.length)
    .superRefine((data, ctx) => {
      data.forEach((value, index) => {
        if (value !== undefined) return;

        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "** 이 문항에 답변해주세요. **",
          path: [`${index}`],
        });
      });
    }),
});
