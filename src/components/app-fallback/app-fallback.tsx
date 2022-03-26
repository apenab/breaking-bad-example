import { Box, Skeleton } from "@mui/material";

export function AppFallback() {
  return (
    <Box>
      <Skeleton variant="rectangular" height={50} />
      <Skeleton variant="rectangular" height="100vh" sx={{ mt: 3 }} />
    </Box>
  );
}
