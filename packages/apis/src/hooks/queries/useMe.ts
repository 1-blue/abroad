import { useQuery } from "@tanstack/react-query";

import { apis } from "../../apis";

export const useMe = () => {
  const { data, isLoading } = useQuery({
    queryKey: apis.me.getMe.key(),
    queryFn: apis.me.getMe.fn,
    select: ({ data }) => data,
  });

  return { me: data, isLoggedIn: !!data, isLoading };
};
