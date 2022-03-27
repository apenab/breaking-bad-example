import { Avatar, Skeleton, Stack, Typography } from "@mui/material";

export function CharacterDetailsLoadingIndicator() {
  return (
    <Stack alignItems="center" direction="column">
      <Skeleton variant="circular">
        <Avatar sx={{ width: 100, height: 100 }} />
      </Skeleton>
      <Typography sx={{ margin: "0px" }} variant="h6" width="20%">
        <Skeleton />
      </Typography>
      <Typography sx={{ margin: "0px" }} variant="h5" width="30%">
        <Skeleton />
      </Typography>
      <Typography sx={{ margin: "0px" }} variant="h5" width="30%">
        <Skeleton />
      </Typography>
    </Stack>
  );
}
