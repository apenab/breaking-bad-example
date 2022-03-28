import { Avatar, Skeleton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

type CharacterListItemProps = {
  id?: number;
  avatar?: string;
  name?: string;
  loading?: boolean;
};

export function CharacterListItem(props: CharacterListItemProps) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {props.loading ? (
        <Skeleton variant="circular">
          <Avatar />
        </Skeleton>
      ) : (
        <Avatar alt={props.name} src={props.avatar}>
          {props.name}
        </Avatar>
      )}
      {props.loading ? (
        <Skeleton width="100%">
          <Typography variant="subtitle2">.</Typography>
        </Skeleton>
      ) : (
        <Typography variant="subtitle2">
          <Link to={`character/${props.id}`}>{props.name}</Link>
        </Typography>
      )}
    </Stack>
  );
}
