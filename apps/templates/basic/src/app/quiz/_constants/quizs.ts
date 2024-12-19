import type { IQuiz } from "@abroad/types/models";

export const QUIZS: IQuiz[] = [
  {
    id: 1,
    sequence: 1,
    title: `다음 글의 주제로 가장 적절한 것은?`,
    description: `Marine debris affects animals through ingesting it or getting entangled in it; it is estimated that up to 100,000 marine mammals, including endangered species, are killed each year by marine debris. Very serious effects happen when marine animals become entangled in debris such as fishing line and six-pack rings. Birds get fishing line entangled around their legs, which get injured and may be lost. Large amounts of plastic debris have been found in the habitat of endangered Hawaiian monk seals, including in areas that serve as nurseries. Entanglement in plastic debris has led to injury and deaths in endangered Steller sea lions, with packing bands the most common entangling material. Hatchling sea turtles run down the beach to the ocean, a critical phase in their life cycle. Debris can be a major impediment if they get entangled in fishing nets or trapped in containers such as plastic cups and open canisters. Marine debris is an aspect of habitat quality for nesting sites and may help explain declines in turtle nest numbers on certain beaches.`,
    hints: [
      `debris: 쓰레기`,
      `hatchling: 갓 부화한 동물`,
      `impediment: 방해(물)`,
    ],
    options: [
      { sequence: 1, content: `various ways that animals get their food` },
      { sequence: 2, content: `harmful impacts of marine trash on animals` },
      { sequence: 3, content: `examples of ocean species disappearing fast` },
      { sequence: 4, content: `common causes of animal habitat destruction` },
      { sequence: 5, content: `new ideas to solve the marine debris problem` },
    ],
    answer: 2,
    commentary: `우리는 새로운 기술의 영향을 과대평가하는 경향이 있는데, 부분적으로 그 이유는 기존 기술이 눈에 거의 보이지 않을 만큼 우리 삶의 일부로 흡수되었기 때문 이다. 젖병을 예로 들어 보자. 여기에 수많은 영유아와 엄마들의 인간으로서의 근본적인 경험을 바꿨으나, 기 술의 역사에서 그 자리를 찾지 못한 단순한 도구가 있 다. 이 기술은 전형적으로 시간을 조절하는 장치라고 여겨지는데 이는 엄마가 수유 시간에 대해 더 많은 통 제력을 발휘할 수 있게 하기 때문이다. 또한 젖병 수 유는 시간을 절약하는 기능도 하는데, 이는 다른 사람 이 엄마의 (수유) 시간을 대신하도록 허락하기 때문이 다. 따라서, 잠재적으로 그것(젖병)은 일상 생활의 시 간 관리에 큰 영향을 미치지만, 빠른 속도의 사회적 논의에서는 완전히 간과되고 있다.`,
  },
  {
    id: 2,
    sequence: 2,
    title: `다음 글의 주제로 가장 적절한 것은?`,
    description: `Because mobile phones are highly personal items (i.e., they go with us everywhere and often are in constant contact with our bodies), many critics of wireless advertising (as well as advertisers themselves) are concerned that unwanted messages represent an invasion of privacy. Feeling invaded, recipients of undesired advertisements may immediately delete the intruding item and hold negative feelings toward the offending advertiser. In addition to privacy invasion, others are skeptical about wireless advertising’s future on the grounds that advertising is antithetical to the reasons that people own mobile phones in the first place. The argument, in other words, is that people own mobile phones for reasons of enhancing time utilization and increasing work-related productivity while away from the workplace or home, and the last thing they want while using these devices is to receive unwanted, interrupting advertising messages.`,
    hints: [`intrude: 밀고 들어오다`, `antithetical: 상반되는, 정반대의`],
    options: [
      { sequence: 1, content: `ways to protect your privacy online` },
      { sequence: 2, content: `current trends in the advertising market` },
      {
        sequence: 3,
        content: `the do’s and don’ts of social media advertising`,
      },
      {
        sequence: 4,
        content: `the future roles of mobile phones in our daily lives`,
      },
      {
        sequence: 5,
        content: `the negative aspects of unwanted mobile phone advertising`,
      },
    ],
    answer: 5,
    commentary: `우리는 새로운 기술의 영향을 과대평가하는 경향이 있는데, 부분적으로 그 이유는 기존 기술이 눈에 거의 보이지 않을 만큼 우리 삶의 일부로 흡수되었기 때문 이다. 젖병을 예로 들어 보자. 여기에 수많은 영유아와 엄마들의 인간으로서의 근본적인 경험을 바꿨으나, 기 술의 역사에서 그 자리를 찾지 못한 단순한 도구가 있 다. 이 기술은 전형적으로 시간을 조절하는 장치라고 여겨지는데 이는 엄마가 수유 시간에 대해 더 많은 통 제력을 발휘할 수 있게 하기 때문이다. 또한 젖병 수 유는 시간을 절약하는 기능도 하는데, 이는 다른 사람 이 엄마의 (수유) 시간을 대신하도록 허락하기 때문이 다. 따라서, 잠재적으로 그것(젖병)은 일상 생활의 시 간 관리에 큰 영향을 미치지만, 빠른 속도의 사회적 논의에서는 완전히 간과되고 있다.`,
  },
  {
    id: 3,
    sequence: 3,
    title: `주어진 글 다음에 이어질 글의 순서로 가장 적절한 것은?`,
    description: `One point of difference between the consumption of water and electricity is that water can be reused multiple times while electricity cannot.  (A) Water that is accessible, especially in arid and semi-arid regions, satisfies the immediate needs of water users, whereas future precipitation may not occur in the same location or at the desired timing. (B) As a result, water can be classified as “consumed” or simply “withdrawn”. In the former, water is removed from its source and lost through either evaporation (in the case of power plant cooling or flood irrigation), or transpiration (in the growing of biocrops). (C) Withdrawn water, on the other hand, can be returned to its original water source. The argument can be made that all water demand eventually returns as precipitation via the hydrologic cycle and therefore is not “consumed”. However, evaporation and precipitation are both spatially and temporally uneven.`,
    hints: [`arid: 매우 건조한`, `precipitation: 강수`, `transpiration: 증산`],
    options: [
      { sequence: 1, content: `(A)-(C)-(B)` },
      { sequence: 2, content: `(B)-(A)-(C)` },
      { sequence: 3, content: `(B)-(C)-(A)` },
      { sequence: 4, content: `(C)-(A)-(B)` },
      { sequence: 5, content: `(C)-(B)-(A)` },
    ],
    answer: 3,
    commentary: `우리는 새로운 기술의 영향을 과대평가하는 경향이 있는데, 부분적으로 그 이유는 기존 기술이 눈에 거의 보이지 않을 만큼 우리 삶의 일부로 흡수되었기 때문 이다. 젖병을 예로 들어 보자. 여기에 수많은 영유아와 엄마들의 인간으로서의 근본적인 경험을 바꿨으나, 기 술의 역사에서 그 자리를 찾지 못한 단순한 도구가 있 다. 이 기술은 전형적으로 시간을 조절하는 장치라고 여겨지는데 이는 엄마가 수유 시간에 대해 더 많은 통 제력을 발휘할 수 있게 하기 때문이다. 또한 젖병 수 유는 시간을 절약하는 기능도 하는데, 이는 다른 사람 이 엄마의 (수유) 시간을 대신하도록 허락하기 때문이 다. 따라서, 잠재적으로 그것(젖병)은 일상 생활의 시 간 관리에 큰 영향을 미치지만, 빠른 속도의 사회적 논의에서는 완전히 간과되고 있다.`,
  },
  {
    id: 4,
    sequence: 4,
    title: `빈칸에 들어갈 단어를 고르시오`,
    description: `Important work regarding preservatives indicated that making organ meats look familiar (through their cuts, shapes, and packaging) influenced perceptions of taste. This insight was found during research on what made preserved foods most acceptable. At the beginning of World War II, there was a need for canned meats that tasted like fresh meat, for powdered milk that was reconstituted to taste like fresh whole milk, and for preserved bread that tasted like fresh bread. The government pushed food companies to preserve foods to resemble fresh foods. Because they looked and tasted fresh, people believed they must be safe and that preservatives were not harmful. Because of this work, initial efforts introduced some organ meats as filler in ground beef and sausages. In both ground meat and sausage forms, replacing existing meat with organ meats was accepted because they.`,
    hints: [`reconstitute: (물을 부어) 원상태로 만들다`],
    options: [
      { sequence: 1, content: `gained popularity thanks to their low price` },
      { sequence: 2, content: `were produced fresh in an eco-friendly way` },
      {
        sequence: 3,
        content: `did not increase the possibility of developing a disease`,
      },
      {
        sequence: 4,
        content: `did not cause the meat to look different than expected`,
      },
      {
        sequence: 5,
        content: `could be provided in large quantities anytime and anywhere`,
      },
    ],
    answer: 2,
    commentary: `우리는 새로운 기술의 영향을 과대평가하는 경향이 있는데, 부분적으로 그 이유는 기존 기술이 눈에 거의 보이지 않을 만큼 우리 삶의 일부로 흡수되었기 때문 이다. 젖병을 예로 들어 보자. 여기에 수많은 영유아와 엄마들의 인간으로서의 근본적인 경험을 바꿨으나, 기 술의 역사에서 그 자리를 찾지 못한 단순한 도구가 있 다. 이 기술은 전형적으로 시간을 조절하는 장치라고 여겨지는데 이는 엄마가 수유 시간에 대해 더 많은 통 제력을 발휘할 수 있게 하기 때문이다. 또한 젖병 수 유는 시간을 절약하는 기능도 하는데, 이는 다른 사람 이 엄마의 (수유) 시간을 대신하도록 허락하기 때문이 다. 따라서, 잠재적으로 그것(젖병)은 일상 생활의 시 간 관리에 큰 영향을 미치지만, 빠른 속도의 사회적 논의에서는 완전히 간과되고 있다.`,
  },
  {
    id: 5,
    sequence: 5,
    title: `빈칸에 들어갈 단어를 고르시오`,
    description: `Most people exhibit physical symptoms when they lie. Their bodies respond to the stress they feel when they think they will be found out. Immediately, their hearts beat faster as adrenaline bathes their system, their breathing becomes more shallow in response to feelings of panic, their hands become colder as blood flow becomes constricted, and their hands sweat and their muscles become tense. Examiners can see this pattern on the lie detector equipment and the liar is caught. This technology works nicely for most people. Most of us have brains that want to tell the truth, want to be trusted, and we feel guilty when we lie or when we think we will be caught. Our bodies respond to our thoughts and feelings. There is even new brain imaging lie detector equipment and companies\nspringing up, such as No Lie MRI, to swear in court whether or not you are telling the truth. Not only does your body react to lies, your brain does as well. Whenever most people lie, their brain becomes overall much more active than when telling the truth. It really does to lie than to tell the truth.`,
    hints: [`constrict: 위축시키다`],
    options: [
      { sequence: 1, content: `require more time` },
      { sequence: 2, content: `seem easier to some` },
      { sequence: 3, content: `evoke more pleasure` },
      { sequence: 4, content: `take more out of you` },
      { sequence: 5, content: `make your body calmer` },
    ],
    answer: 3,
    commentary: `우리는 새로운 기술의 영향을 과대평가하는 경향이 있는데, 부분적으로 그 이유는 기존 기술이 눈에 거의 보이지 않을 만큼 우리 삶의 일부로 흡수되었기 때문 이다. 젖병을 예로 들어 보자. 여기에 수많은 영유아와 엄마들의 인간으로서의 근본적인 경험을 바꿨으나, 기 술의 역사에서 그 자리를 찾지 못한 단순한 도구가 있 다. 이 기술은 전형적으로 시간을 조절하는 장치라고 여겨지는데 이는 엄마가 수유 시간에 대해 더 많은 통 제력을 발휘할 수 있게 하기 때문이다. 또한 젖병 수 유는 시간을 절약하는 기능도 하는데, 이는 다른 사람 이 엄마의 (수유) 시간을 대신하도록 허락하기 때문이 다. 따라서, 잠재적으로 그것(젖병)은 일상 생활의 시 간 관리에 큰 영향을 미치지만, 빠른 속도의 사회적 논의에서는 완전히 간과되고 있다.`,
  },
];
