import Link from "next/link";
import type { NextPage } from "next";

import { Button } from "@abroad/ui";

import AnswerPage from "#/app/quiz/answer/_components/AnswerPage";

const Page: NextPage = () => {
  return (
    <article className="mx-6">
      <section className="flex flex-col items-center gap-2 pb-14 pt-20">
        <h2 className="text-2xl font-bold">확인 테스트</h2>
        <span className="text-sm text-zinc-500">
          검증된 출제위원이 출제한 자체제작 문제
        </span>
      </section>

      <AnswerPage />

      <Link href="/quiz">
        <Button type="button" className="ml-auto mt-4 block" size="lg">
          다시풀기
        </Button>
      </Link>
    </article>
  );
};

export default Page;
