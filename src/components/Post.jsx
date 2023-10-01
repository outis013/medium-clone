import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <div className="post-author">
        <h2 className="post-author_index">{post?.index}</h2>
        <div className="post-author_image">
          <img src={post?.author?.imgUrl} alt="author profile" />
        </div>
        <p className="post-author_name">{post?.author?.name}</p>
      </div>
      <div className="post-content">{post.content}</div>
    </div>
  );
};

export default Post;
