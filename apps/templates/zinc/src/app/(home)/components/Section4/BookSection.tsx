import Link from "next/link";

import { Button } from "@abroad/ui";

import BookCarousel from "#/app/(home)/components//Section4/BookCarousel";

const BookSection: React.FC = () => {
  return (
    <section className="my-14 lg:my-28">
      <div className="mb-4 flex flex-col items-center gap-3 lg:mb-8 lg:gap-6">
        <span className="text-2xl font-bold text-primary lg:text-4xl">
          The Six 교재
        </span>
        <span className="text-sub text-center">
          압도적인 실력향상을 보조해주는 백정현쌤만의 자체 브랜딩 교재
        </span>
      </div>

      <BookCarousel />

      <Button
        variant="outline"
        className="mx-auto mt-4 block rounded-none shadow-none lg:mt-9"
      >
        <Link
          href="https://bthexaplus.shop.blogpay.co.kr/good/product_list?sCate=202623&sStep=categoryStep1"
          target="_blank"
        >
          교재 더보기
        </Link>
      </Button>
    </section>
  );
};

export default BookSection;
