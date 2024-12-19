import Link from "next/link";
import { format } from "date-fns/format";

import {
  Avatar,
  AvatarFallback,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@abroad/ui";
import { IUser, IVideo } from "@abroad/types/models";

import {
  getYoutubeVideoId,
  makeThumbnailUrl,
} from "#/app/videos/_libs/reactVideo";

interface IProps {
  video: Pick<IVideo, "title" | "content" | "url" | "id" | "createdAt"> & {
    user: Pick<IUser, "id" | "name">;
  };
}

const stripHtmlTags = (html: string) => {
  return html.replace(/<[^>]*>/g, "");
};

const VideoCard: React.FC<IProps> = ({ video }) => {
  return (
    <Link href={`/videos/${video.id}`} className="group">
      <Card>
        <figure className="overflow-hidden">
          <img
            src={makeThumbnailUrl(getYoutubeVideoId(video.url)!)}
            alt={video.title}
            width={480}
            height={360}
            className="w-full rounded-t-lg transition-transform duration-300 group-hover:scale-110"
          />
        </figure>

        <CardHeader className="px-3 py-4">
          <CardTitle>{video.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {stripHtmlTags(video.content)}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center gap-2 px-3 pb-4">
          <Avatar className="size-8">
            <AvatarFallback className="text-sm">
              {video.user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0.5">
            <span className="text-xs text-foreground">{video.user.name}</span>
            <p className="text-xs text-muted-foreground">
              {format(video.createdAt, "yyyy-MM-dd")}
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default VideoCard;
