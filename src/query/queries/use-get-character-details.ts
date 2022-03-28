import { useQuery, UseQueryOptions } from "react-query";

import { CharacterDetailsInterface } from "query";

type GetCharacterDetailsParamsType = {
  characterId: string;
};

export function useGetCharacterDetails(
  params: GetCharacterDetailsParamsType,
  queryOptions?: UseQueryOptions<[CharacterDetailsInterface]>
) {
  return useQuery<[CharacterDetailsInterface]>(
    `characters/${params.characterId}`,
    queryOptions
  );
}
