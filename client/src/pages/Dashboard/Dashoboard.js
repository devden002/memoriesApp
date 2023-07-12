import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, postDetail } from "../../action/posts";

import Card from "../../components/Card";
import Loader from "../../components/Loader";

const Dashboard = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch, location]);

  const postDetailHandler = (id) => {
    dispatch(postDetail(id))
    navigate(`/post-detail/${id}`)
  }

  return !posts.length ? (
    <Loader/>
  ) : (
    <div className="container">
      <div className="flex flex-wrap -mx-1 lg:-mx-1">
        {posts.map((post) => (
          <Card post={post} postDetail={postDetailHandler}/>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
