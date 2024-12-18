"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { useState, useRef, useEffect } from "react";

import { Button } from "@abroad/ui";

const IntroSection: React.FC = () => {
  const [key, setKey] = useState(0);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries?.[0]?.isIntersecting) {
          setKey((prev) => prev + 1);
        }
      },
      { threshold: 0.5 },
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex flex-col items-center gap-5 px-2 py-14 lg:gap-6 lg:py-28">
      <div ref={animationRef}>
        <TypeAnimation
          key={key}
          sequence={[
            "백T만의 스킬들로 수능 영어의 압도적인 통찰력을 길러줍니다.",
            1000,
          ]}
          speed={1}
          repeat={1}
          cursor={false}
          wrapper="span"
          className="block break-keep text-center text-2xl font-bold text-primary lg:text-4xl"
        />
      </div>
      <span className="text-center">
        수능이 끝나는 종소리가 울릴때까지
        <br />
        여러분들 곁에서 묵묵히 함께하겠습니다.
      </span>

      <Link href="/teacher">
        <Button className="rounded-none text-primary" variant="outline">
          강사소개 바로가기
        </Button>
      </Link>
    </section>
  );
};

export default IntroSection;
