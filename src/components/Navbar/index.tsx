import { Link } from "react-router-dom";

import { ROUTES } from "constants/routes";
import { NavMenu, StyledNavbar } from "./styles";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <NavMenu>
        <Link to={ROUTES.HOME}>Logo</Link>
        <Link to={ROUTES.POSTS}>All Posts</Link>
      </NavMenu>
    </StyledNavbar>
  );
};
