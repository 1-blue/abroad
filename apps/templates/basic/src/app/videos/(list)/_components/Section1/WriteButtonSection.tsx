"use client";

import Link from "next/link";

import { Button } from "@abroad/ui";
import { useMe } from "@abroad/apis/hooks";

const WriteButtonSection: React.FC = () => {
  const { isLoggedIn } = useMe();

  if (!isLoggedIn) return null;

  return (
    <section className="mb-4 flex items-center">
      <Link href="/videos/write" className="ml-auto">
        <Button>글쓰기</Button>
      </Link>
    </section>
  );
};

export default WriteButtonSection;
