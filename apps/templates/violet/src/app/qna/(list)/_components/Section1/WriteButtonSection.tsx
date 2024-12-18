"use client";

import Link from "next/link";

import { useMe } from "@abroad/apis/hooks";
import { Button } from "@abroad/ui";

const WriteButtonSection: React.FC = () => {
  const { isLoggedIn } = useMe();

  if (!isLoggedIn) return null;

  return (
    <section className="flex items-center">
      <Link href="/qna/write" className="ml-auto">
        <Button>글쓰기</Button>
      </Link>
    </section>
  );
};

export default WriteButtonSection;
