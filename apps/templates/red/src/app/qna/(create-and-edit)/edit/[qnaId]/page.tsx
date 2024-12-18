import type { Metadata, NextPage } from "next";

import { getSharedMetadata } from "#/lib/sharedMetadata";

import WriteForm from "#/app/qna/(create-and-edit)/_components/WriteForm";

export const metadata: Metadata = getSharedMetadata({ title: "Q&A 수정" });

interface IProps {
  params: { qnaId: string };
}
const Page: NextPage<IProps> = ({ params }) => {
  return (
    <article className="mx-auto max-w-screen-md">
      <WriteForm qnaId={params.qnaId} />
    </article>
  );
};

export default Page;
