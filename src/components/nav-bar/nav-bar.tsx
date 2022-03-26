import { AppBar, Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export function NavBar() {
  const { t } = useTranslation();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t("nav.title")}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
