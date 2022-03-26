import { useParams } from "react-router-dom";

type CharacterParams = {
  characterId: string;
};

export function Character() {
  const params = useParams<CharacterParams>();
  return <h1>Charter ID: {params.characterId}</h1>;
}
