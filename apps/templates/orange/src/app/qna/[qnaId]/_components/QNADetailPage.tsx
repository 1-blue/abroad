"use client";

import { Suspense, useEffect } from "react";
import { notFound, useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { apis } from "@abroad/apis";
import { Separator } from "@abroad/ui";
import { useMe } from "@abroad/apis/hooks";

import WithAuthGuard from "#/hoc/WithAuthGuard";
import InfoSection from "#/app/qna/[qnaId]/_components/Section1/InfoSection";
import InfoSkeleton from "#/app/qna/[qnaId]/_components/Section1/InfoSkeleton";
import CommentListSection from "#/app/qna/[qnaId]/_components/Section2/CommentListSection";
import CommentSkeleton from "#/app/videos/[videoId]/_components/Section2/CommentSkeleton";
import CommentFormSection from "#/app/qna/[qnaId]/_components/Section3/CommentFormSection";

const QNADetailPage: React.FC = () => {
  const router = useRouter();
  const params = useParams<{ qnaId: string }>();
  const { me } = useMe();

  const { data, isLoading } = useQuery({
    queryKey: apis.qna.getOne.key({ params: { qnaId: params.qnaId } }),
    queryFn: () => apis.qna.getOne.fn({ params: { qnaId: params.qnaId } }),
    select: ({ data }) => data,
  });

  useEffect(() => {
    if (isLoading) return;
    if (!data) return;

    // 비밀글이 아니면
    if (!data.isPrivate) return;
    // 작성자라면
    if (data.user.id === me?.id) return;
    // 관리자라면
    if (me?.role === "ADMIN") return;

    toast.warning("비공개 Q&A입니다.");
    router.back();
  }, [isLoading, data, me, router]);

  if (isLoading) return null;
  if (!data) return notFound();

  return (
    <article className="p-4">
      <Suspense fallback={<InfoSkeleton />}>
        <InfoSection qnaId={params.qnaId} />
      </Suspense>

      <Separator className="my-4" />

      <Suspense fallback={<CommentSkeleton />}>
        <CommentListSection qnaId={params.qnaId} />
      </Suspense>

      <Separator className="my-4" />

      <CommentFormSection qnaId={params.qnaId} />
    </article>
  );
};

export default WithAuthGuard(QNADetailPage);
