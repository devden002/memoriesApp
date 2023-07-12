import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";

const PostDetail = () => {
  let post = useSelector((state) => state.posts.postDetail);
  const [data, setData] = useState(post)

  useEffect(() => {
    setData(post)
  
    return () => {
      setData(null)
    }
  }, [post])
  

if(!post) {
  return null
}
  return (
    <div>
      <img src={data?.selectedFile} alt="post" />
    </div>
  );
};

export default PostDetail;
