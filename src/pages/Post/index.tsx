import { StyledPost, StyledPostInfo } from "./styles";
import { Post } from "components/Post";

export const PostPage = () => {
  return (
    <StyledPost exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <StyledPostInfo>
        <Post />
      </StyledPostInfo>
    </StyledPost>
  );
};
