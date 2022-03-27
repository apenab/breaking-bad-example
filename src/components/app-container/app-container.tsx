import { Box, Container } from "@mui/material";

type AppContainerProps = {
  children: React.ReactNode;
};

export function AppContainer(props: AppContainerProps) {
  return (
    <Box my={2}>
      <Container maxWidth="sm">{props.children}</Container>
    </Box>
  );
}
