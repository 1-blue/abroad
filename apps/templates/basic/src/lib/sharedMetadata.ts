import type { Metadata } from "next";

const sharedTitle: Metadata["title"] = {
  template: "The Six-백정현 | %s",
  default: "The Six-백정현",
};
const sharedDescription = `체계적인 커리큘럼을 통해 수강생들의 성적을 끌어올려줍니다. 출제자의 관점에서 지문을 분석하고 정답에 가까워지는 법을 알려줍니다.`;
const sharedKeywords = [
  "백정현",
  "더식스",
  "The six",
  "백정현강사",
  "영어강사",
];
const sharedImages = ["/images/main.png"];
const sharedSiteName = "The Six-백정현";

interface IGetSharedMetadataArgs {
  title?: Exclude<Metadata["title"], null>;
  description?: string;
  keywords?: string[];
  images?: string[];
  siteName?: string;
  baseURL?: string;
}

/** 공용으로 사용할 메타데이터 */
export const getSharedMetadata = ({
  title = sharedTitle,
  description = sharedDescription,
  keywords = sharedKeywords,
  images = sharedImages,
  siteName = sharedSiteName,
}: IGetSharedMetadataArgs = {}): Metadata => ({
  metadataBase: new URL(process.env.NEXT_PUBLIC_CLIENT_URL),
  title,
  description,
  keywords,
  openGraph: {
    title,
    description,
    images,
    type: "website",
    url: process.env.NEXT_PUBLIC_CLIENT_URL,
    siteName,
    locale: "ko_KR",
    countryName: "Korea",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images,
  },
});
