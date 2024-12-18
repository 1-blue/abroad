import type { Metadata, NextPage } from "next";

import { getSharedMetadata } from "#/lib/sharedMetadata";

import WritePage from "#/app/videos/(create-and-edit)/write/_components/WritePage";

export const metadata: Metadata = getSharedMetadata({ title: "수업영상 작성" });

const Page: NextPage = () => {
  return <WritePage />;
};

export default Page;
