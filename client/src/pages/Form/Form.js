import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Input from "../../components/Input";
import FileBase from "react-file-base64";
import { createPost, updatePost } from "../../action/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentId, setcurrentId] = useState(useSelector((state) => state.posts.id));
  const user = JSON.parse(localStorage.getItem("profile"))
  const post = useSelector((state) =>
    currentId ? state.posts.posts?.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (currentId) setPostData(post);
  }, [currentId, post]);

  const resetHandler = () => {
    setPostData({
      title: "",
      description: "",
      selectedFile: "",
    });
  };

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, {...postData, name: user?.result?.name }));
    } else {
      dispatch(createPost({...postData, name: user?.result?.name }));
    }
    navigate('/dashboard')
  };
  if(!user?.result){
    return <p>Please sign in to crreate memories</p>
  }

  return (
    <div className="p-6 mt-0 text-left bg-white shadow-lg opacity-95 w-1/3 sm:w-1/2">
      <h2>{currentId? 'Edit' : 'Create'} your memories here</h2>
      <form autoComplete="false" noValidate onSubmit={formSubmitHandler}>
        <Input
          type="text"
          name="title"
          label="Title"
          placeholder="title"
          handleChange={handleChange}
          value={postData.title}
        />
        <div className="mt-2">
          <label htmlFor="description" className="text-sm text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            type="textarea"
            name="description"
            placeholder="description"
            onChange={handleChange}
            value={postData.description}
          />
        </div>

        <div className="w-full px-4 py-2 mt-1 border rounded-md">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <div className="justify-between flex mt-4">
          <button className="bg-blue-600 w-1/3 mt-2 p-2 text-white rounded-md">
            Create
          </button>
          <button
            className="bg-red-600 w-1/3 mt-2 p-2 text-white rounded-md"
            onClick={(e) => resetHandler(e)}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
