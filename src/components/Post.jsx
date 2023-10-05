import React from "react";
import { BsBookmarkPlus } from "react-icons/bs";
import { PiStarFourBold } from "react-icons/pi";

const Post = ({ post, monthNames }) => {
  return (
    <div className="my-[2rem] flex items-center justify-between gap-4">
      <div>
        <div className="post-author flex gap-2 items-center mb-2">
          <h2 className="post-author_image">
            <div className="w-10 h-10">
              <img
                src={post.imgUrl}
                className="w-[100%] h-[100%] rounded-full"
                alt="author"
              />
            </div>
          </h2>
          <p className="post-author_name text-sm font-extrabold">
            {post?.author?.name}
          </p>
        </div>
        <div className="post-content">
          <p className="post-content_title text-lg my-1 font-extrabold">
            {" "}
            {post.title}
          </p>
          <div className="post-content_body text-sm font-thin">
            {post.content.substring(0, 100)}...
          </div>
        </div>
        <div className="post-content_metadata flex items-center text-xs justify-between my-2 font-thin">
          <div className="flex items-center gap-6">
            <div className="date flex items-center gap-1">
              <p>{monthNames[post.date.getMonth()].substring(0, 3)}, </p>

              <p>{post.date.getDate()}</p>
              <p>.</p>
              <p>{post.readlength} min read</p>
              <p>.</p>
            </div>
            <div className="tag rounded-xl bg-black bg-opacity-10 py-1 px-2 w-fit">
              {post.category}
            </div>
            <div>
              {post.isMembershipOnly && (
                <p>
                  <PiStarFourBold className="text-yellow-500 text-lg" />
                </p>
              )}
            </div>
          </div>
          <div className="action">
            <BsBookmarkPlus className="text-lg" />
          </div>
        </div>
      </div>
      <div className="w-[300px] h-[150px]">
        <img
          src={post.imgUrl}
          alt="post details"
          className="w-full h-full object-fill"
        />
      </div>
    </div>
  );
};

export default Post;
