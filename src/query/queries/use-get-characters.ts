import { useQuery, UseQueryOptions } from "react-query";

import { CharacterListItemInterface, QUERY_CONSTANTS } from "query";

export function useGetCharacters(
  queryOptions?: UseQueryOptions<CharacterListItemInterface[]>
) {
  return useQuery<CharacterListItemInterface[]>(
    QUERY_CONSTANTS.Characters,
    queryOptions
  );
}
