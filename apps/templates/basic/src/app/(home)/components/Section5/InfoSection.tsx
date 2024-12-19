const INFOS = [
  {
    title: "전공자의 고효율 어휘+문법 강의",
    description: `너무 많아 막막하고 가장 하기 싫은 공부인 단어 암기를 수업 시간에 체계적이고 가장 효율적인 방법으로 해결합니다. 동의어와 반의어는 물론 구문 변형시 사용되는 파생어까지 완벽하게 어휘를 확장하여 장기기억에 저장합니다.`,
    image: "/images/tables/1.jpg",
  },
  {
    title: "내신 100% 적중 변형 포인트",
    description: `자타공인 "지문 분석 원탑" 방대한 고등 영어 내신 시험 범위를 깔끔하게 분석하여 학교별 시험 경향에 100%일치하는 변형포인트로시험 대비 효율은 물론 적중되는 결과로 증명합니다.`,
    image: "/images/tables/2.jpg",
  },
  {
    title: "수능 영어 1등급 토대 완성",
    description: `내신과 수능의 연속성 있는 학습으로 꾸준함이 중요한 언어 학습의 1등급 토대를 완성합니다. 평가원의 출제 메뉴엘에 따른 독해 방법을 통해 메타인지까지 얻어갈 수 있습니다. `,
    image: "/images/tables/3.jpg",
  },
];

const InfoSection: React.FC = () => {
  return (
    <section>
      <ul className="flex flex-col lg:flex-row">
        {INFOS.map((info, index) => (
          <li key={index} className="relative">
            <figure className="h-[250px] lg:h-[350px]">
              <img
                src={info.image}
                alt={info.title}
                className="h-full w-full object-cover object-left-top"
              />
            </figure>
            <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 bg-black/50 p-14">
              <span className="font-bold text-white lg:text-4xl">
                {info.title}
              </span>
              <p className="text-white">{info.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InfoSection;
