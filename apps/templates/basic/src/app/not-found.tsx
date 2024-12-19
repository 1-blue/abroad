"use client";

import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@abroad/ui";

const Page: NextPage = () => {
  const router = useRouter();

  return (
    <article className="mt-20 flex flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-lg font-semibold">존재하지 않는 페이지입니다.</p>

      <div className="flex gap-2">
        <Link href="/">
          <Button variant="outline">홈으로 돌아가기</Button>
        </Link>
        <Button variant="outline" onClick={() => router.back()}>
          뒤로가기
        </Button>
      </div>
    </article>
  );
};

export default Page;
