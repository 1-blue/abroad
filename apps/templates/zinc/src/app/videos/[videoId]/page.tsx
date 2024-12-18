import type { Metadata, NextPage } from "next";
import { notFound } from "next/navigation";

import { getSharedMetadata } from "#/lib/sharedMetadata";
import VideoDetailPage from "#/app/videos/[videoId]/_components/VideoDetailPage";

export const metadata: Metadata = getSharedMetadata({ title: "수업영상" });

interface Props {
  params: {
    videoId: string;
  };
}

const Page: NextPage<Props> = async ({ params }) => {
  const videoId = Number(params.videoId);

  if (isNaN(videoId)) return notFound();

  return <VideoDetailPage />;
};

export default Page;
