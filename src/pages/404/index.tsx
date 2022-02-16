import { useLocation } from "react-router-dom";

import { StyledNoMatchPage } from "./styles";

export const NoMatchPage = () => {
  const location = useLocation();

  return (
    <StyledNoMatchPage exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <h2>Not found #404</h2>
      <div>Ничего не найдено по пути {location.pathname}</div>
    </StyledNoMatchPage>
  );
};
