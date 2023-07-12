import React from "react";

const Loader = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className=" flex m-auto animate-pulse">
          <div className="w-6 h-6 bg-blue-500 rounded-full mx-1"></div>
          <div className="w-6 h-6 bg-green-500 rounded-full mx-1"></div>
          <div className="w-6 h-6 bg-black rounded-full mx-1"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
