import { IPost } from "models/IPost";
import { postAPI } from "service/PostService";
import { PostItem } from "./PostItem";
import { PostCreateButton, StyledPosts } from "./styles";

export const Posts = () => {
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery("");
  const [createPost] = postAPI.useCreatePostMutation();
  const [removePost] = postAPI.useRemovePostMutation();
  const [updatePost] = postAPI.useUpdatePostMutation();

  const handleCreate = () => {
    const title = prompt() || "";
    const text = prompt() || "";
    if (title.trim() && text.trim()) {
      createPost({ title, body: text });
      return;
    }
    alert("Incorrect data!");
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  const handleRemove = (post: IPost) => {
    removePost(post);
  };

  return (
    <StyledPosts>
      {isLoading && <h3>...</h3>}
      {posts &&
        posts.map((post) => (
          <PostItem post={post} key={post.id} remove={handleRemove} update={handleUpdate} />
        ))}
      {error && <h3>Error</h3>}
      <PostCreateButton onClick={handleCreate}>Create Post</PostCreateButton>
    </StyledPosts>
  );
};
