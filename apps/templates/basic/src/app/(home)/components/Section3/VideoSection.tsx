import Link from "next/link";

import { Button } from "@abroad/ui";

const VideoSection: React.FC = () => {
  return (
    <section className="relative left-1/2 right-1/2 -mx-[calc(50vw-0.5rem+1px)] flex w-[calc(100vw-1rem+1px)] flex-col items-center justify-center bg-primary px-4 py-14 text-white lg:px-0 lg:py-16">
      <span className="mb-3 lg:mb-6">
        금주의 추천 <span className="font-bold">수업영상</span>을 확인해보세요
      </span>
      <span className="mb-3 text-center text-2xl font-bold lg:mb-7 lg:text-4xl">
        백정현쌤의 수업영상을
        <br />
        바로 만나보세요
      </span>
      <Link href="/videos" className="mb-7 lg:mb-8">
        <Button className="rounded-none border border-white text-primary text-white shadow-none hover:bg-white/10">
          수업영상 더보기
        </Button>
      </Link>
    </section>
  );
};

export default VideoSection;
