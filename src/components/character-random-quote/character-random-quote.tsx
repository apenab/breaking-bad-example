import { Stack, Typography } from "@mui/material";

import { useGetRandomQuoteByAuthorName } from "query";
import { CharacterRandomQuoteLoadingIndicator } from "./index";

type CharacterRandomQuoteProps = {
  name: string;
  nickname: string;
};

export function CharacterRandomQuote(props: CharacterRandomQuoteProps) {
  const { data, status } = useGetRandomQuoteByAuthorName(
    {
      name: props.name,
    },
    { refetchOnWindowFocus: true }
  );
  switch (status) {
    case "success":
      const quoteObj = data[0];
      if (!quoteObj?.quote) {
        return null;
      }
      return (
        <Stack spacing={1}>
          <Typography align="right" variant="h4" sx={{ fontWeight: 300 }}>
            “{quoteObj.quote}”
          </Typography>
          <Typography align="right" variant="h6">
            — {props.nickname}
          </Typography>
        </Stack>
      );
    case "loading":
      return <CharacterRandomQuoteLoadingIndicator />;
    default:
      return <></>;
  }
}
