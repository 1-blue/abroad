const IntroSection: React.FC = () => {
  return (
    <section className="mt-12 flex flex-col items-center gap-3">
      <span className="text-2xl font-bold text-primary lg:text-4xl">
        백정현 선생님의 The Six와 함께라면 You Always Win,
      </span>
      <span className="text-center text-zinc-500">
        6가지의 커리큘럼으로 체계적인 수능영어 학습을 도와드립니다.
      </span>
      <figure className="w-full max-w-7xl object-cover">
        <img
          src="/images/teachers/profile.jpeg"
          alt="teacher"
          className="size-full"
        />
      </figure>
    </section>
  );
};

export default IntroSection;
