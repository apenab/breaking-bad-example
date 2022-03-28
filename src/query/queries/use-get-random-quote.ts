import { useQuery, UseQueryOptions } from "react-query";

import { Quote, QUERY_CONSTANTS } from "query";

type GetRandomQuoteParamsType = {
  name: string;
};

export function useGetRandomQuoteByAuthorName(
  params: GetRandomQuoteParamsType,
  queryOptions?: UseQueryOptions<[Quote]>
) {
  return useQuery<[Quote]>(
    QUERY_CONSTANTS.RandomQuoteByAuthorName(params.name),
    queryOptions
  );
}
