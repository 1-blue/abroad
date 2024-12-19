import { Route } from "@abroad/types";
import { generateBaseRoutes } from "@abroad/libs";

export const routes: Route[] = [
  ...generateBaseRoutes(),
  {
    label: "교재",
    path: "https://bthexaplus.shop.blogpay.co.kr/good/product_list?sCate=202623&sStep=categoryStep1",
  },
];
