import React from "react";

const Alert = ({ message, type, button }) => {
  return (
    <div
      id="alert-1"
      className={`flex p-2 mb-2 mt-2 ${
        type === "warning"
          ? "bg-red-100"
          : type === "success"
          ? "bg-green-100"
          : "bg-white"
      } rounded-lg dark:${
        type === "warning"
          ? "bg-red-200"
          : type === "success"
          ? "bg-green-200"
          : "bg-white"
      }`}
      role="alert"
    >
      {type === "warning" ? (
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times-circle"
          class="w-4 h-4 mr-2 fill-current"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
          ></path>
        </svg>
      ) : type === "success" ? (
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="check-circle"
          class="w-4 h-4 mr-2 fill-current"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
          ></path>
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="grin-hearts"
          class="w-4 h-4 mr-2 fill-current"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
        >
          <path
            fill="currentColor"
            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM90.4 183.6c6.7-17.6 26.7-26.7 44.9-21.9l7.1 1.9 2-7.1c5-18.1 22.8-30.9 41.5-27.9 21.4 3.4 34.4 24.2 28.8 44.5L195.3 243c-1.2 4.5-5.9 7.2-10.5 6l-70.2-18.2c-20.4-5.4-31.9-27-24.2-47.2zM248 432c-60.6 0-134.5-38.3-143.8-93.3-2-11.8 9.2-21.5 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.4-3.6 22.6 6.1 20.7 17.9-9.3 55-83.2 93.3-143.8 93.3zm133.4-201.3l-70.2 18.2c-4.5 1.2-9.2-1.5-10.5-6L281.3 173c-5.6-20.3 7.4-41.1 28.8-44.5 18.6-3 36.4 9.8 41.5 27.9l2 7.1 7.1-1.9c18.2-4.7 38.2 4.3 44.9 21.9 7.7 20.3-3.8 41.9-24.2 47.2z"
          ></path>
        </svg>
      )}
      <div
        className={`ml-3 text-sm font-medium ${
          type === "warning"
            ? "text-red-700"
            : type === "success"
            ? "text-green-700"
            : "text-blue-700"
        } dark:${
          type === "warning"
            ? "text-red-800"
            : type === "success"
            ? "text-green-700"
            : "text-blue-800"
        }`}
      >
        {message}
      </div>
      {button && (
        <button
          type="button"
          className={`ml-auto -mx-1.5 -my-1.5 ${
            type === "warning"
              ? "bg-red-100"
              : type === "success"
              ? "bg-green-100"
              : "bg-blue-100"
          } ${
            type === "warning"
              ? "text-red-500"
              : type === "success"
              ? "text-green-500"
              : "text-blue-500"
          } rounded-lg focus:ring-2 focus:${
            type === "warning"
              ? "ring-red-400"
              : type === "success"
              ? "ring-green-400"
              : "ring-blue-400"
          } p-1.5 hover:${
            type === "warning"
              ? "bg-red-200"
              : type === "success"
              ? "bg-green-200"
              : "bg-blue-200"
          } inline-flex h-8 w-8 dark:${
            type === "warning"
              ? "bg-red-200"
              : type === "success"
              ? "bg-green-200"
              : "bg-blue-200"
          } dark:${
            type === "warning"
              ? "text-red-600"
              : type === "success"
              ? "text-green-600"
              : "text-blue-600"
          } dark:hover:${
            type === "warning"
              ? "bg-red-300"
              : type === "success"
              ? "bg-green-300"
              : "bg-blue-300"
          }`}
          data-collapse-toggle="alert-1"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;
