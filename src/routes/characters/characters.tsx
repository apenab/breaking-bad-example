import { Alert, AlertTitle, Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

import { CharacterListItemInterface } from "../../query";
import { capitalizeFirstLetter } from "../../utils";
import { Character } from "./index";

export function Characters() {
  const { t } = useTranslation();

  const {
    data: characters,
    isLoading,
    isSuccess,
    isError,
  } = useQuery<CharacterListItemInterface[]>("characters");

  return (
    <div>
      <Typography variant="h4">
        {capitalizeFirstLetter(t("characters.title"))}
      </Typography>
      {!isError ? (
        <Box mt={2}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {isLoading &&
              Array.from(Array(50).keys()).map((number) => (
                <Grid item xs={2} sm={4} md={4} key={number}>
                  <Character key={number} loading />
                </Grid>
              ))}

            {isSuccess &&
              characters.map((character) => (
                <Grid item xs={2} sm={4} md={4} key={character.char_id}>
                  <Character
                    id={character.char_id}
                    avatar={character.img}
                    name={character.nickname}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
      ) : (
        <Alert severity="error">
          <AlertTitle>{t("error").toUpperCase()}</AlertTitle>
          {capitalizeFirstLetter(t("characters.error"))}
        </Alert>
      )}
    </div>
  );
}
