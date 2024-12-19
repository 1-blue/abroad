"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { format } from "date-fns/format";
import { LockClosedIcon, LockOpen2Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { apis } from "@abroad/apis";
import { useMe } from "@abroad/apis/hooks";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@abroad/ui";

const QNAList = () => {
  const { me } = useMe();
  const router = useRouter();

  const {
    data: { content: qnas },
  } = useSuspenseQuery({
    queryKey: apis.qna.getMany.key(),
    queryFn: apis.qna.getMany.fn,
    select: ({ data }) => data,
  });

  const onClickQNA = ({
    qnaId,
    isPrivate,
    qnaOwnerId,
  }: {
    qnaId: number;
    isPrivate: boolean;
    qnaOwnerId: number;
  }) => {
    // 관리자라면 접근 가능
    if (me?.role === "ADMIN") return router.push(`/qna/${qnaId}`);

    // 비공개 QnA라면 작성자만 접근 가능
    if (isPrivate && me?.id !== qnaOwnerId) {
      return toast.warning("비공개 QnA입니다.");
    }

    router.push(`/qna/${qnaId}`);
  };

  return (
    <Table className="my-8 min-w-[600px] border-b">
      <TableHeader>
        <TableRow>
          <TableHead className="w-10 text-center">공개</TableHead>
          <TableHead className="w-60">제목</TableHead>
          <TableHead className="w-20 text-center">작성자</TableHead>
          <TableHead className="w-20 text-center">작성일</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {qnas.map((qna) => (
          <TableRow
            key={qna.id}
            className="cursor-pointer"
            onClick={() =>
              onClickQNA({
                qnaId: qna.id,
                isPrivate: qna.isPrivate,
                qnaOwnerId: qna.user.id,
              })
            }
          >
            <TableCell className="*:mx-auto">
              {qna.isPrivate ? <LockClosedIcon /> : <LockOpen2Icon />}
            </TableCell>
            <TableCell>
              <span className="line-clamp-1">{qna.title}</span>
            </TableCell>
            <TableCell>
              <span className="line-clamp-1 text-center text-xs text-zinc-500">
                {qna.user.name}
              </span>
            </TableCell>
            <TableCell className="text-z text-center text-xs text-zinc-500">
              <time dateTime={qna.createdAt}>
                {format(new Date(qna.createdAt), "yyyy-MM-dd")}
              </time>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default QNAList;
