import { useParams } from "react-router-dom";

import { postAPI } from "service/PostService";
import {
  StyledComment,
  StyledComments,
  StyledCommentsBlock,
  StyledCommentsTitle,
  StyledCreateComment,
  StyledPostItemInfo,
} from "./styles";

export const Post = () => {
  const { id } = useParams();
  const { data: post } = postAPI.useFetchPostQuery(id!);
  const [createComment] = postAPI.useCreateCommentMutation();

  const handleCreate = () => {
    const comment = prompt() || "";
    const postId = +id!;
    if (comment.trim()) {
      createComment({ postId, body: comment });
      return;
    }
    alert("Incorrect data!");
  };

  return (
    <StyledPostItemInfo>
      {post ? (
        <>
          <h2>post id: {post.id}</h2>
          <h2>{post.title}</h2>
          <span>{post.body}</span>
          <StyledComments>
            <StyledCommentsBlock>
              <StyledCommentsTitle>Comments</StyledCommentsTitle>
              {post.comments.map((comment: any) => (
                <StyledComment key={comment.id}>
                  <h2>COMMENT ID: {comment.id}</h2>
                  <span>{comment.body}</span>
                </StyledComment>
              ))}
              <StyledCreateComment onClick={handleCreate}>Add Comment</StyledCreateComment>
            </StyledCommentsBlock>
          </StyledComments>
        </>
      ) : (
        <h3>...</h3>
      )}
    </StyledPostItemInfo>
  );
};
