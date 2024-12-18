interface IGetSharedMetadataArgs {
  title: any;
  description: string;
  keywords: string[];
  images?: string[];
  siteName?: string;
  baseURL?: string;
}

/** 메타데이터 생성 */
export const generateBaseMetadata = ({
  title,
  description,
  keywords,
  images,
  siteName = description,
  baseURL = "",
}: IGetSharedMetadataArgs) => ({
  metadataBase: new URL(baseURL),
  title,
  description,
  keywords,
  openGraph: {
    title,
    description,
    images,
    type: "website",
    url: baseURL,
    siteName,
    locale: "ko_KR",
    countryName: "Korea",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description,
    images,
  },
});
