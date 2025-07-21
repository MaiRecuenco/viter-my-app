import { useQuery } from "@tanstack/react-query";
import React from "react";
import { queryData } from "./queryData";

const useQueryData = (
  endpoint,
  method,
  key = "",
  fd = {},
  id = null,
  refresh = false
) => {
  const result = useQuery({
    queryKey: [key, id],
    queryFn: async () => await queryData(endpoint, method, fd),
    retry: false,
    refetchOnWindowFocus: refresh,
    cacheTime: 200,
  });

  return result;
};

export default useQueryData;
