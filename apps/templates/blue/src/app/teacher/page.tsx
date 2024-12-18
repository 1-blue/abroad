import type { Metadata, NextPage } from "next";

import { getSharedMetadata } from "#/lib/sharedMetadata";

import IntroSection from "#/app/teacher/_components/Section1/IntroSection";
import PointSection from "#/app/teacher/_components/Section2/PointSection";
import AboutSection from "#/app/teacher/_components/Section3/AboutSection";

export const metadata: Metadata = getSharedMetadata({ title: "강사소개" });

const Page: NextPage = () => {
  return (
    <article className="flex flex-col gap-16 px-4">
      <IntroSection />

      <PointSection />

      <AboutSection />
    </article>
  );
};

export default Page;
