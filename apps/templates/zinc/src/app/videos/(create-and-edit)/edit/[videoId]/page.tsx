import type { Metadata, NextPage } from "next";
import { notFound } from "next/navigation";

import { getSharedMetadata } from "#/lib/sharedMetadata";

import EditPage from "#/app/videos/(create-and-edit)/edit/[videoId]/_components/EditPage";

// export const metadata: Metadata = getSharedMetadata({ title: "수업영상 수정" });

interface IProps {
  params: { videoId: string };
}

const Page: NextPage<IProps> = ({ params }) => {
  const videoId = Number(params.videoId);

  if (isNaN(videoId)) return notFound();

  return <EditPage />;
};

export default Page;
