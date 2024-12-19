"use client";

import "@abroad/tailwind-config/default.css";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSuspenseQuery } from "@tanstack/react-query";
import { formatDistance } from "date-fns";
import { ko } from "date-fns/locale";
import { toast } from "sonner";
import {
  CaretLeftIcon,
  ChatBubbleIcon,
  DotsHorizontalIcon,
  HeartIcon,
  Share1Icon,
} from "@radix-ui/react-icons";

import { apis } from "@abroad/apis";
import {
  Avatar,
  AvatarFallback,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
} from "@abroad/ui";
import { useMe, useQNAMutations } from "@abroad/apis/hooks";

interface Props {
  qnaId: string;
}

const InfoSection: React.FC<Props> = ({ qnaId }) => {
  const router = useRouter();
  const { me } = useMe();
  const { data } = useSuspenseQuery({
    queryKey: apis.qna.getOne.key({ params: { qnaId } }),
    queryFn: () => apis.qna.getOne.fn({ params: { qnaId } }),
    select: ({ data }) => data,
  });
  const {
    data: { content: comments },
  } = useSuspenseQuery({
    queryKey: apis.qna.comment.getMany.key({ params: { qnaId } }),
    queryFn: () => apis.qna.comment.getMany.fn({ params: { qnaId } }),
    select: ({ data }) => data,
  });

  const formattedDate = formatDistance(new Date(data.createdAt), new Date(), {
    addSuffix: true,
    locale: ko,
  });

  const onClickShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("링크가 복사되었습니다.");
    } catch (e) {
      console.error("🚫 Error QnA 클립보드 복사 >> ", e);
      toast.error("링크 복사에 실패했습니다.");
    }
  };

  const { deleteQNAMutateAsync } = useQNAMutations();
  const onClickDelete = async () => {
    if (!isMine) return toast.error("작성자만 삭제할 수 있습니다.");

    await deleteQNAMutateAsync({ params: { qnaId } });
    router.push("/qna");
  };

  const isMine = useMemo(() => {
    if (!me) return false;
    if (!data) return false;

    return me.id === data.user.id;
  }, [me, data]);

  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/qna">
            <Button variant="ghost" size="icon">
              <CaretLeftIcon />
            </Button>
          </Link>
          <h1 className="text-lg font-semibold text-foreground">
            {data.title}
          </h1>
        </div>
        {isMine && (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <DotsHorizontalIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex w-28 flex-col p-2">
              <Link href={`/qna/edit/${qnaId}`}>
                <Button variant="ghost" size="sm" className="w-full">
                  수정
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={onClickDelete}>
                삭제
              </Button>
            </PopoverContent>
          </Popover>
        )}
      </div>

      <Separator className="my-4" />

      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback>{data.user.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm text-foreground">{data.user.name}</span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">QnA</span>
            <time
              dateTime={data.createdAt}
              className="text-xs text-muted-foreground"
            >
              {formattedDate}
            </time>
          </div>
        </div>
      </div>

      <div
        className="default-content whitespace-pre-wrap break-words py-6 text-sm text-foreground"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />

      <div className="flex items-center justify-between">
        <div>
          <Button
            variant="ghost"
            onClick={() => toast.info("FIXME: 좋아요 기능 추가 예정")}
          >
            <HeartIcon />
            <span className="text-xs">0</span>
          </Button>
          <Button variant="ghost">
            <ChatBubbleIcon />
            <span className="text-xs">{comments.length}</span>
          </Button>
        </div>
        <div>
          <Button variant="ghost" size="icon" onClick={onClickShare}>
            <Share1Icon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
