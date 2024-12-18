"use client";

import { useEffect } from "react";
import type { ComponentType, ComponentProps } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useMe } from "@abroad/apis/hooks";

const WithAuthGuard = (Component: ComponentType) => {
  const ProtectedComponent = (props: ComponentProps<typeof Component>) => {
    const router = useRouter();

    const { isLoading, isLoggedIn } = useMe();

    useEffect(() => {
      if (isLoading) return;
      if (isLoggedIn) return;

      toast.error("로그인 후 접근해주세요!");
      const timer = setTimeout(() => router.back(), 1000);
      return () => clearTimeout(timer);
    }, [isLoading, isLoggedIn, router]);

    // 로딩 중일 때 로딩 스피너 표시
    if (isLoading) {
      return (
        <div className="mt-20 flex items-center justify-center text-2xl font-semibold">
          loading...
        </div>
      );
    }

    // 로그인하지 않은 경우
    if (!isLoggedIn) return null;

    return <Component {...props} />;
  };

  return ProtectedComponent;
};

export default WithAuthGuard;
