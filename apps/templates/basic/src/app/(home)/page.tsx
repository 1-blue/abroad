import type { NextPage } from "next";

import ImageSection from "#/app/(home)/components/Section1/ImageSection";
import IntroSection from "#/app/(home)/components/Section2/IntroSection";
import VideoSection from "#/app/(home)/components/Section3/VideoSection";
import BookSection from "#/app/(home)/components/Section4/BookSection";
import InfoSection from "#/app/(home)/components/Section5/InfoSection";

const Page: NextPage = () => {
  return (
    <article>
      <ImageSection />

      <IntroSection />

      <VideoSection />

      <BookSection />

      <InfoSection />
    </article>
  );
};

export default Page;
