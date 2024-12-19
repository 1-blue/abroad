"use client";

import React from "react";
import { useParams } from "next/navigation";

import WithAuthGuard from "#/hoc/WithAuthGuard";
import WriteForm from "#/app/videos/(create-and-edit)/_components/WriteForm";

const EditPage: React.FC = () => {
  const params = useParams<{ videoId: string }>();

  return (
    <article className="mx-auto max-w-screen-md">
      <WriteForm videoId={params.videoId} />
    </article>
  );
};

export default WithAuthGuard(EditPage);
