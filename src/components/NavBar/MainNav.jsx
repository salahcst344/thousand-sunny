import { Link } from "react-router-dom";
import { AppBar, Toolbar, Stack } from "@mui/material";
import logo from "../../assets/thousand-sunny-logo.png";
import MainNavButtons from "./MainNavButtons";

const MainNav = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Link to="/">
            <img src={logo} alt="website logo" style={{ width: 64 }} />
          </Link>

          <MainNavButtons />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MainNav;
