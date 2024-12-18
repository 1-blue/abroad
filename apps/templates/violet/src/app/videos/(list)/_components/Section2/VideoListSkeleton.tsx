import { Card, CardFooter, CardHeader, Skeleton } from "@abroad/ui";

const VideoListSkeleton: React.FC = () => {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <Card key={index}>
          <Skeleton className="aspect-video w-full" />

          <CardHeader className="px-3 py-4">
            <Skeleton className="h-8" />
            <Skeleton className="h-6" />
          </CardHeader>
          <CardFooter className="flex items-center gap-2 px-3 pb-4">
            <Skeleton className="size-8 rounded-full" />
            <div className="flex flex-1 flex-col gap-0.5">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </CardFooter>
        </Card>
      ))}
    </ul>
  );
};

export default VideoListSkeleton;
