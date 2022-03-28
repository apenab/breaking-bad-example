import {
  Alert,
  AlertTitle,
  Avatar,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import CakeIcon from "@mui/icons-material/Cake";
import { useTranslation } from "react-i18next";

import { useGetCharacterDetails } from "query";
import { CharacterRandomQuote } from "components";
import { capitalizeFirstLetter } from "utils";
import { CharacterDetailsLoadingIndicator } from "./character-details-loading-indicator";

type CharacterDetailsParams = {
  characterId: string;
};

export function CharacterDetails() {
  const { t } = useTranslation();

  const params = useParams<CharacterDetailsParams>();

  const { data, status } = useGetCharacterDetails({
    characterId: params.characterId as string,
  });

  switch (status) {
    case "loading":
      return <CharacterDetailsLoadingIndicator />;
    case "success":
      const character = data[0];
      return (
        <div>
          <Stack direction="column" alignItems="center" spacing={2}>
            <Stack direction="column" alignItems="center" spacing={1}>
              <Avatar
                alt={character.nickname}
                src={character.img}
                sizes="50"
                sx={{ width: 100, height: 100 }}
              />
              <Stack direction="row" alignItems="center" spacing={1}>
                <CakeIcon fontSize="small" sx={{ color: "gray" }} />
                <Typography variant="caption" sx={{ color: "gray" }}>
                  {character.birthday}
                </Typography>
              </Stack>
              <Chip
                label={character.status}
                size="small"
                color="info"
                variant="outlined"
              />
              <Typography variant="subtitle1" align="center">
                {character.name}
              </Typography>
            </Stack>
            <CharacterRandomQuote
              name={character.name}
              nickname={character.nickname}
            />
          </Stack>
        </div>
      );
    case "error":
      return (
        <Alert severity="error">
          <AlertTitle>{t("error").toUpperCase()}</AlertTitle>
          {capitalizeFirstLetter(t("characters.error"))}
        </Alert>
      );
    default:
      return <></>;
  }
}
