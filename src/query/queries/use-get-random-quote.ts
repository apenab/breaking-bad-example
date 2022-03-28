import { useQuery, UseQueryOptions } from "react-query";

import { Quote } from "query";

type GetRandomQuoteParamsType = {
  characterName: string;
};

export function useGetRandomQuote(
  params: GetRandomQuoteParamsType,
  queryOptions?: UseQueryOptions<[Quote]>
) {
  return useQuery<[Quote]>(
    `quote/random?author=${params.characterName}`,
    queryOptions
  );
}
