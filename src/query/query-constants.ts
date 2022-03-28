export const QUERY_CONSTANTS = {
  Characters: "characters",
  CharacterDetails: (characterId: string) => `characters/${characterId}`,
  RandomQuoteByAuthorName: (name: string) => `quote/random?author=${name}`,
};
