import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Template.css";
import Dashboard from "../pages/Dashboard/Dashoboard";
import Notification from "../pages/Notification/Notification";
import EditAccount from "../pages/Account/EditAccount";
import MyAccount from "../pages/Account/MyAccount";
import Form from "../pages/Form/Form";
import Auth from "../pages/Auth/Auth";
import PostDetail from "../pages/PostDetail/postDetail"

const Template = (props) => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  let location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setUser(null);
    navigate("/auth");
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className="font-sans antialiased h-screen">
      <header className="fixed z-50 h-16 w-full bg-white shadow flex items-center justify-between">
        <div className="flex items-center h-full">
          <div className="flex items-center text-center h-full w-48  bg-blue-700">
            <span className="w-full text-white text-sm uppercase font-bold">
              SnapTalk{" "}
            </span>
          </div>
          <div className="flex items-center w-64">
            <form action="" className="w-full h-full px-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="h-6 w-6 text-black fill-current"
              >
                <path
                  className="heroicon-ui"
                  d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                />
              </svg>
              <input
                type="search"
                className="appearance-none bg-white-400 h-full w-full py-2 px-2 border-r border-grey-dark focus-visible: outline-hidden"
                placeholder="Search..."
              />
            </form>
          </div>
        </div>
        <div className="flex items-center h-full text-sm">
          <div className="flex items-center h-full">
            <span className="flex text-gray-600 h-10 w-10 font-bold text-2xl border border-gray-400 rounded-full justify-around items-center">
              <img
                className="rounded-full"
                src={user?.result?.imageUrl}
                alt={user?.result?.name.charAt(0)}
              />
            </span>
            <span className="flex items-center text-black h-full px-4">
              {user?.result?.name}
            </span>
            <div className="group relative h-full">
              <span className="text-black flex items-center h-full bg-grey-darkest px-4 cursor-pointer">
                Account
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-6 w-6 text-grey-darker fill-current ml-1"
                >
                  <path
                    className="heroicon-ui"
                    d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                  />
                </svg>
              </span>
              <div className="hidden group-hover:block absolute pin-r top-full w-48 bg-white border-2">
                <Link
                  to="my-account"
                  className="block text-left py-3 px-3 text-black hover:bg-blue-800 hover:text-white text-xs"
                >
                  My Account
                </Link>
                <Link
                  to="edit-account"
                  className="block text-left py-3 px-3 text-black hover:bg-blue-800 hover:text-white text-xs"
                >
                  Edit Account
                </Link>
                <span
                  className="block text-left py-3 px-3 text-black hover:bg-blue-800 text-xs hover:text-white cursor-pointer"
                  onClick={logout}
                >
                  Logout
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="main" className="pt-16 scroll">
        <div className="bg-blue-700 relative h-full min-h-screen">
          <div className="group relative sidebar-item with-children">
            <Link
              to="/dashboard"
              href="#"
              className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent bg-blue-600 hover:bg-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="h-6 w-6 text-white fill-current xl:mr-2"
              >
                <path
                  d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM5.68 7.1A7.96 7.96 0 0 0 4.06 11H5a1 1 0 0 1 0 2h-.94a7.95 7.95 0 0 0 1.32 3.5A9.96 9.96 0 0 1 11 14.05V9a1 1 0 0 1 2 0v5.05a9.96 9.96 0 0 1 5.62 2.45 7.95 7.95 0 0 0 1.32-3.5H19a1 1 0 0 1 0-2h.94a7.96 7.96 0 0 0-1.62-3.9l-.66.66a1 1 0 1 1-1.42-1.42l.67-.66A7.96 7.96 0 0 0 13 4.06V5a1 1 0 0 1-2 0v-.94c-1.46.18-2.8.76-3.9 1.62l.66.66a1 1 0 0 1-1.42 1.42l-.66-.67zM6.71 18a7.97 7.97 0 0 0 10.58 0 7.97 7.97 0 0 0-10.58 0z"
                  className="heroicon-ui"
                ></path>
              </svg>
              <div className="text-white text-xs">Dashboard</div>
            </Link>
          </div>
          <div className="group relative sidebar-item with-children">
            <span
              className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-blue-dark bg-blue-600 hover:bg-blue-800 cursor-pointer"
              onClick={() => setShow(!show)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="h-6 w-6 text-white fill-current xl:mr-2"
              >
                <path
                  d="M15 19a3 3 0 0 1-6 0H4a1 1 0 0 1 0-2h1v-6a7 7 0 0 1 4.02-6.34 3 3 0 0 1 5.96 0A7 7 0 0 1 19 11v6h1a1 1 0 0 1 0 2h-5zm-4 0a1 1 0 0 0 2 0h-2zm0-12.9A5 5 0 0 0 7 11v6h10v-6a5 5 0 0 0-4-4.9V5a1 1 0 0 0-2 0v1.1z"
                  className="heroicon-ui"
                ></path>
              </svg>
              <div className="text-white text-xs">Notifications</div>
            </span>
            {show && (
              <div className="absolute xl:relative hidden xl:block pin-t left-full xl:pin-none w-48 xl:w-auto group-hover:block bg-blue-400 z-50 xl:z-auto">
                <Link
                  to="/notification"
                  className="block text-left xl:flex xl:items-center shadow xl:shadow-none py-3 px-3 xl:px-4 border-l-4 border-transparent text-white hover:bg-blue-800 text-xs"
                >
                  All Notification
                </Link>
                <Link
                  to="/dashboard"
                  className="block text-left xl:flex xl:items-center shadow xl:shadow-none py-3 px-3 xl:px-4 border-l-4 border-transparent text-white hover:bg-blue-800 text-xs"
                >
                  Other
                </Link>
              </div>
            )}
          </div>
          <div className="group relative sidebar-item with-children">
            <Link
              to="/dashboard"
              className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent bg-blue-600 hover:bg-blue-800 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="h-6 w-6 text-white fill-current xl:mr-2"
              >
                <path
                  d="M2 15V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15a1 1 0 0 1-1.7.7L16.58 17H4a2 2 0 0 1-2-2zM20 5H4v10h13a1 1 0 0 1 .7.3l2.3 2.29V5z"
                  className="heroicon-ui"
                ></path>
              </svg>
              <div className="text-white text-xs">Comments</div>
            </Link>
          </div>
          <div className="py-4">
            {/* <div className="hidden xl:block uppercase font-bold text-white text-xs px-4 py-2">
          Create New
        </div> */}
            <div className="px-2">
              <Link
                to="create-new-memory"
                className="flex items-center justify-center py-2 w-full text-xs text-center text-white bg-blue-400 hover:bg-blue-800 rounded shadow-light font-bold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-4 w-4 mr-1 fill-current"
                >
                  <path
                    d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
                    className="heroicon-ui"
                  ></path>
                </svg>
                Create new Post
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 h-full p-2 md:px-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/edit-account" element={<EditAccount />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/create-new-memory" element={<Form />} />
            <Route path="/post-detail/:id" element={<PostDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Template;
