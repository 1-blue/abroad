"use client";

import "@abroad/tailwind-config/default.css";

import { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
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

import {
  Avatar,
  AvatarFallback,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
} from "@abroad/ui";
import { apis } from "@abroad/apis";
import { useVideoMutations, useMe } from "@abroad/apis/hooks";

import { getYoutubeVideoId } from "#/app/videos/_libs/reactVideo";
import ReactYoutube from "#/app/videos/[videoId]/_components/Section1/ReactYoutube";

interface Props {
  videoId: string;
}

const InfoSection: React.FC<Props> = ({ videoId }) => {
  const router = useRouter();
  const { me } = useMe();
  const { data: video } = useSuspenseQuery({
    queryKey: apis.video.getOne.key({ params: { videoId } }),
    queryFn: () => apis.video.getOne.fn({ params: { videoId } }),
    select: ({ data }) => data,
  });
  const { data } = useQuery({
    queryKey: apis.video.comment.getMany.key({ params: { videoId } }),
    queryFn: () => apis.video.comment.getMany.fn({ params: { videoId } }),
    select: ({ data }) => data,
  });

  const formattedDate = formatDistance(new Date(video.createdAt), new Date(), {
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

  const { deleteVideoMutateAsync } = useVideoMutations();
  const onClickDelete = async () => {
    if (!isMine) return toast.error("자신의 게시글만 삭제할 수 있습니다.");

    await deleteVideoMutateAsync({ params: { videoId } });

    router.push("/videos");
  };

  const isMine = useMemo(() => {
    if (!me) return false;
    if (!video) return false;

    return me.id === video.user.id;
  }, [me, video]);

  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/videos">
            <Button variant="ghost" size="icon">
              <CaretLeftIcon />
            </Button>
          </Link>
          <h1 className="text-lg font-semibold text-foreground">
            {video.title}
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
              <Link href={`/videos/edit/${videoId}`}>
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
          <AvatarFallback>{video.user.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm text-foreground">{video.user.name}</span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">QnA</span>
            <time
              dateTime={video.createdAt}
              className="text-xs text-muted-foreground"
            >
              {formattedDate}
            </time>
          </div>
        </div>
      </div>

      <div>
        <ReactYoutube videoId={getYoutubeVideoId(video.url)!} />

        <div
          className="default-content whitespace-pre-wrap break-words pb-6 text-sm text-foreground"
          dangerouslySetInnerHTML={{ __html: video.content }}
        />
      </div>

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
            <span className="text-xs">{data?.content.length || 0}</span>
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
