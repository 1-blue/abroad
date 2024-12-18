import { Skeleton } from "@abroad/ui";

const CommentSkeleton: React.FC = () => {
  return (
    <ul className="flex flex-col gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <li key={index} className="flex items-center gap-2">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex flex-1 flex-col gap-1">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentSkeleton;
