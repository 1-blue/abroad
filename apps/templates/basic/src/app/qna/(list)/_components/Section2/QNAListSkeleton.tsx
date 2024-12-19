import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@abroad/ui";

const QNAListSkeleton: React.FC = () => {
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
        {Array.from({ length: 10 }).map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <Skeleton className="h-6" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-6" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-6" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-6" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default QNAListSkeleton;
