import type { Metadata, NextPage } from "next";
import { Suspense } from "react";

import { getSharedMetadata } from "#/lib/sharedMetadata";

import WriteButtonSection from "#/app/qna/(list)/_components/Section1/WriteButtonSection";
import QNAList from "#/app/qna/(list)/_components/Section2/QNAList";
import QNAListSkeleton from "#/app/qna/(list)/_components/Section2/QNAListSkeleton";

export const dynamic = "force-dynamic";

export const metadata: Metadata = getSharedMetadata({ title: "Q&A" });

const Page: NextPage = async () => {
  return (
    <article className="px-4 py-8">
      <WriteButtonSection />

      <Suspense fallback={<QNAListSkeleton />}>
        <QNAList />
      </Suspense>
    </article>
  );
};

export default Page;
