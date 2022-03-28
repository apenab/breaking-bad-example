import { useQuery, UseQueryOptions } from "react-query";

import { CharacterDetailsInterface, QUERY_CONSTANTS } from "query";

type GetCharacterDetailsParamsType = {
  characterId: string;
};

export function useGetCharacterDetails(
  params: GetCharacterDetailsParamsType,
  queryOptions?: UseQueryOptions<[CharacterDetailsInterface]>
) {
  return useQuery<[CharacterDetailsInterface]>(
    QUERY_CONSTANTS.CharacterDetails(params.characterId),
    queryOptions
  );
}
