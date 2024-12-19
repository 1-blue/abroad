"use client";

import { Suspense } from "react";
import { useParams } from "next/navigation";

import { Separator } from "@abroad/ui";

import WithAuthGuard from "#/hoc/WithAuthGuard";
import InfoSection from "#/app/videos/[videoId]/_components/Section1/InfoSection";
import CommentList from "#/app/videos/[videoId]/_components/Section2/CommentList";
import CommentFormSection from "#/app/videos/[videoId]/_components/Section2/CommentFormSection";
import CommentSkeleton from "#/app/videos/[videoId]/_components/Section2/CommentSkeleton";
import InfoSkeleton from "#/app/videos/[videoId]/_components/Section1/InfoSkeleton";

const VideoDetailPage: React.FC = () => {
  const params = useParams<{ videoId: string }>();

  return (
    <article className="p-4">
      <Suspense fallback={<InfoSkeleton />}>
        <InfoSection videoId={params.videoId} />
      </Suspense>

      <Separator className="my-4" />

      <Suspense fallback={<CommentSkeleton />}>
        <CommentList videoId={params.videoId} />
      </Suspense>

      <Separator className="my-4" />

      <CommentFormSection videoId={params.videoId} />
    </article>
  );
};

export default WithAuthGuard(VideoDetailPage);
