import { MetadataRoute } from "next";

import { routes } from "#/constants/routes";

const DEFAULT_SITEMAP = {
  priority: 1,
  lastmod: new Date().toISOString(),
  changefreq: "daily",
};

const allRoutes = ["/", ...routes.filter((route) => route.path)];

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((route) => ({
    ...DEFAULT_SITEMAP,
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}${route}`,
  }));
}
