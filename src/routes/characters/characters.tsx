import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Character } from "../../query";

export function Characters() {
  const {
    data: characters,
    isLoading,
    isSuccess,
  } = useQuery<Character[]>("characters");
  return (
    <div>
      <h1>Characters</h1>
      {isLoading && <h1>Loading...</h1>}
      {isSuccess &&
        characters.map((character) => (
          <p key={character.char_id}>
            <Link to={`${character.char_id}`}>{character.name}</Link>
          </p>
        ))}
    </div>
  );
}
