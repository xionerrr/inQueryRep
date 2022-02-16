import { Posts } from "components/Posts";
import { StyledPostsPage } from "./styles";

export const PostsPage = () => {
  return (
    <StyledPostsPage exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <Posts />
    </StyledPostsPage>
  );
};
