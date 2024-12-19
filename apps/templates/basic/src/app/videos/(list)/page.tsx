import type { Metadata, NextPage } from "next";
import { Suspense } from "react";

import { getSharedMetadata } from "#/lib/sharedMetadata";

import WriteButtonSection from "#/app/videos/(list)/_components/Section1/WriteButtonSection";
import VideoList from "#/app/videos/(list)/_components/Section2/VideoList";
import VideoListSkeleton from "#/app/videos/(list)/_components/Section2/VideoListSkeleton";

export const dynamic = "force-dynamic";

// export const metadata: Metadata = getSharedMetadata({ title: "수업영상" });

const Page: NextPage = () => {
  return (
    <div className="px-4 py-8">
      <WriteButtonSection />

      <Suspense fallback={<VideoListSkeleton />}>
        <VideoList />
      </Suspense>
    </div>
  );
};

export default Page;
