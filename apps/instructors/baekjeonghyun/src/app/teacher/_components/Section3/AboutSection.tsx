const ABOUTS = [
  "현 분당 두각 강사",
  "현 대치명인학원 강사",
  "현 규정 모의고사 대표",
  "현 대치720 재종반 강사",
  "전 비상에듀 강사",
  "전 대치mesa영과고 수능반강사",
];
const PUBLICATIONS = [
  "The Six - basic, concept",
  "signature [x]",
  "sequence,6-9-11기출",
];

const AboutSection: React.FC = () => {
  return (
    <section className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
      <div>
        <blockquote className="mb-4 border-l-4 border-zinc-400 px-4 py-2.5 font-bold lg:text-2xl">
          백정현 강사 이력
        </blockquote>
        <ul className="flex list-disc flex-col pl-8 text-zinc-500">
          {ABOUTS.map((about) => (
            <li key={about}>{about}</li>
          ))}
        </ul>
      </div>
      <div>
        <blockquote className="mb-4 border-l-4 border-zinc-400 px-4 py-2.5 font-bold lg:text-2xl">
          저서 및<br />
          집필활동
        </blockquote>
        <ul className="flex list-disc flex-col pl-8 text-zinc-500">
          {PUBLICATIONS.map((publication) => (
            <li key={publication}>{publication}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
