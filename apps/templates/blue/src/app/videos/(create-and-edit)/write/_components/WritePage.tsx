"use client";

import WithAuthGuard from "#/hoc/WithAuthGuard";
import WriteForm from "#/app/videos/(create-and-edit)/_components/WriteForm";

const WritePage = () => {
  return (
    <article className="mx-auto max-w-screen-md">
      <WriteForm />
    </article>
  );
};

export default WithAuthGuard(WritePage);
