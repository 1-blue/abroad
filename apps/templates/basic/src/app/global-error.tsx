"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Button } from "@abroad/ui";

interface IProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const GlobalError: React.FC<IProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error("🚫 Error global-error.tsx >> ", error);
  }, [error]);

  return (
    <html>
      <body>
        <article className="mt-20 flex flex-col items-center justify-center gap-4">
          <span className="text-6xl font-bold">500</span>
          <p className="text-lg font-semibold">
            알 수 없는 에러가 발생했습니다.
          </p>

          <div className="flex gap-2">
            <Link href="/">
              <Button variant="outline">홈으로 돌아가기</Button>
            </Link>
            <Button onClick={reset}>다시 시도하기</Button>
          </div>
        </article>
      </body>
    </html>
  );
};

export default GlobalError;
