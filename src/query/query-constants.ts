export const QUERY_CONSTANTS = {
  Characters: "characters",
  CharacterDetails: (characterId: string) => `characters/${characterId}`,
  RandomQuoteByAuthorName: (authorName: string) =>
    `quote/random?author=${authorName}`,
};
