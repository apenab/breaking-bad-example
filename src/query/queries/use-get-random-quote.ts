import { useQuery, UseQueryOptions } from "react-query";

import { Quote } from "query";
import { QUERY_CONSTANTS } from "query/query-constants";

type GetRandomQuoteParamsType = {
  characterName: string;
};

export function useGetRandomQuoteByAuthorName(
  params: GetRandomQuoteParamsType,
  queryOptions?: UseQueryOptions<[Quote]>
) {
  return useQuery<[Quote]>(
    QUERY_CONSTANTS.RandomQuoteByAuthorName(params.characterName),
    queryOptions
  );
}
