import { StyledHome } from "./styles";

export const HomePage = () => {
  return (
    <StyledHome exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <h1>Home Page</h1>
      <h2>Welcome!</h2>
    </StyledHome>
  );
};
