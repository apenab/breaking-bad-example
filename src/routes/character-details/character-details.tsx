import { useParams } from "react-router-dom";

type CharacterDetailsParams = {
  characterId: string;
};

export function CharacterDetails() {
  const params = useParams<CharacterDetailsParams>();
  return <h1>Charter ID: {params.characterId}</h1>;
}
