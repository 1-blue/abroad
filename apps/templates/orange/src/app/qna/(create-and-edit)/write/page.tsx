import type { Metadata, NextPage } from "next";

import { getSharedMetadata } from "#/lib/sharedMetadata";

import WriteForm from "#/app/qna/(create-and-edit)/_components/WriteForm";

export const metadata: Metadata = getSharedMetadata({ title: "Q&A 작성" });

const Page: NextPage = () => {
  return (
    <article className="mx-auto max-w-screen-md">
      <WriteForm />
    </article>
  );
};

export default Page;
