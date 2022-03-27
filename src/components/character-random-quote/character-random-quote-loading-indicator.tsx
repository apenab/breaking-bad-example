import { Skeleton, Stack, Typography } from "@mui/material";

export function CharacterRandomQuoteLoadingIndicator() {
  return (
    <Stack width="100%">
      <Typography sx={{ margin: "0px" }} variant="h4" width="100%">
        <Skeleton />
      </Typography>
      <Typography
        align="right"
        sx={{ margin: "0px", alignSelf: "end" }}
        variant="h6"
        width="40%"
      >
        <Skeleton />
      </Typography>
    </Stack>
  );
}
