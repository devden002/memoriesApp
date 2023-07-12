import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { DotsVerticalIcon, HeartIcon, TrashIcon } from "@heroicons/react/solid";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, storeId, likePost } from "../action/posts";

const Card = ({ post, postDetail }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));

  const storIdHandler = (id) => {
    dispatch(storeId(id));
    navigate("/create-new-memory");
  };

  const postDeleteHandler = (id, e) => {
    e.preventDefault();
    dispatch(deletePost(id));
  };

  return (
    <div className="my-1 px-1 w-full md:w-1/3 lg:m2-4 lg:px-4 lg:w-1/4">
      <article className="relative overflow-hidden rounded-lg shadow-lg max-h-80">
        <span className="absolute left-0 p-2 flex items-center no-underline">
          <img
            alt="Placeholder"
            className="block rounded-full"
            src={"https://picsum.photos/32/32/?random"}
          />
          <p className="ml-2 text-sm text-white">{post?.name}</p>
        </span>
        <p className="absolute right-0 p-2 text-sm">
          {(user?.result.googleId === post?.creator ||
            user?.result?._id === post?.creator) && (
            <DotsVerticalIcon
              className="h-5 w-5 text-white"
              onClick={() => storIdHandler(post?._id)}
            />
          )}
        </p>
        <span onClick={() => postDetail(post._id)}>
          <img
            alt="Placeh"
            className="block w-full h-40"
            src={post?.selectedFile}
          />
        </span>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-md">
            <Link
              className="no-underline hover:underline text-black"
              to="notification"
            >
              {post?.title}
            </Link>
          </h1>
          <p className="text-grey-darker text-xs">
            {moment(post?.createdAt).fromNow()}
          </p>
        </header>
        <main className="w-full max-h-12 h-9">
          <p className="text-gray-700 text-xs p-2">{post?.description}</p>
        </main>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          {(user?.result.googleId === post?.creator ||
            user?.result?._id === post?.creator) && (
            <TrashIcon
              className="h-5 w-5 text-red hover: cursor-pointer"
              onClick={(e) => postDeleteHandler(post?._id, e)}
            />
          )}

          <HeartIcon
            className="h-5 w-5 text-gray-300"
            onClick={() => dispatch(likePost(post?._id))}
          />
        </footer>
      </article>
    </div>
  );
};

export default Card;
