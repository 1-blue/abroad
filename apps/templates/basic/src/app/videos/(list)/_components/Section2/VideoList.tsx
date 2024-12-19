"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { apis } from "@abroad/apis";

import VideoCard from "#/app/videos/(list)/_components/Section2/VideoCard";

const VideoList: React.FC = () => {
  const {
    data: { content: videos },
  } = useSuspenseQuery({
    queryKey: apis.video.getMany.key(),
    queryFn: apis.video.getMany.fn,
    select: ({ data }) => data,
  });

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </ul>
  );
};

export default VideoList;
