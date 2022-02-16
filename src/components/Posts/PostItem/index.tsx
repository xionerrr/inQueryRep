import { Link } from "react-router-dom";

import { IPost } from "models/IPost";
import { PostItemButtons, PostItemInfo, PostItemLink, StyledPostItem } from "./styles";

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

export const PostItem: React.FC<PostItemProps> = ({ post, remove, update }) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    remove(post);
  };

  const handleUpdate = (e: React.MouseEvent) => {
    const title = prompt() || "";
    const body = prompt() || "";
    if (title.trim() && body.trim()) {
      update({ ...post, title, body });
      return;
    }
    alert("Incorrect data!");
  };

  return (
    <StyledPostItem>
      <PostItemLink>
        <Link to={`${post.id}`}>More...</Link>
      </PostItemLink>
      <PostItemInfo>
        <h2>post id: {post.id}</h2>
        <h2>{post.title}</h2>
        <span>{post.body}</span>
      </PostItemInfo>
      <PostItemButtons>
        <button onClick={handleRemove}>Delete Post</button>
        <button onClick={handleUpdate}>Update Post</button>
      </PostItemButtons>
    </StyledPostItem>
  );
};
