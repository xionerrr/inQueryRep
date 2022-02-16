import { Route, Routes, useLocation } from "react-router-dom";

import { LayoutDefault } from "layouts";
import { PostsPage } from "pages/Posts";
import { HomePage } from "pages/Home";
import { ROUTES } from "constants/routes";
import { NoMatchPage } from "pages/404";
import { GlobalStyle } from "style";
import { PostPage } from "pages/Post";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <LayoutDefault>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.POSTS} element={<PostsPage />} />
        <Route path={ROUTES.POST} element={<PostPage />} />
        <Route path={ROUTES.ALL} element={<NoMatchPage />} />
      </Routes>
      <GlobalStyle />
    </LayoutDefault>
  );
}

export default App;
