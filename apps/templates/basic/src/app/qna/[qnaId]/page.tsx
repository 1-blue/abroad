import type { Metadata, NextPage } from "next";
import { notFound } from "next/navigation";

import { getSharedMetadata } from "#/lib/sharedMetadata";

import QNADetailPage from "#/app/qna/[qnaId]/_components/QNADetailPage";

// export const metadata: Metadata = getSharedMetadata({ title: "Q&A" });

interface Props {
  params: {
    qnaId: string;
  };
}

const Page: NextPage<Props> = async ({ params }) => {
  const qnaId = Number(params.qnaId);

  if (isNaN(qnaId)) return notFound();

  return <QNADetailPage />;
};

export default Page;
