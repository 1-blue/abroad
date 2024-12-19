const POINTS = [
  {
    title: "현재 수능영어와 수강생들의 현실",
    description: `10년전의 학생들의 책상과 현재의 수강생들의 책상에는 모두 같은 책이 올라와 있습니다.\n그러나 매년 수능영어의 난이도는 상승하고 있고 그에 맞는 대비가 필요합니다.`,
  },
  {
    title: "The Six를 소개합니다",
    description: `The Six는 백정현 선생님만의 스킬들을\n수강생들이 쉽게 받아들일 수 있게 정리한 6권의 교재로 이루어진 커리큘럼입니다.\n출제자의 출제의도를 분석하여 그 결과를 토대로 이분법, 3-1-1 등의 스킬들을 통해 수강생들을 정답으로 이끕니다.`,
  },
  {
    title: "The Six의 구성",
    description: `The Six는 수강생들의 체계적인 학습을 위해\nbasic, concept, signature [x], sequence, 6-9-11\n기출의 단계를 거쳐수험생들에게 지문을 꿰뚫는 경험을 선사합니다.`,
  },
];

const PointSection: React.FC = () => {
  return (
    <section>
      <blockquote className="mb-4 border-l-4 border-zinc-400 px-4 py-2.5 font-bold lg:text-2xl">
        POINT
      </blockquote>
      <ul className="flex flex-col gap-6 pl-8">
        {POINTS.map((point) => (
          <li key={point.title} className="list-disc">
            <span className="font-bold text-primary">{point.title}</span>
            <p className="whitespace-pre-line text-zinc-500">
              {point.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PointSection;
