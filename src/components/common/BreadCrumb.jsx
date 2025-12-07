import React from "react";

const BreadCrumb = ({ text }) => {
  return (
    <div className="flex items-center gap-2 text-gray-600 my-4">
      {text.map((item, index) => (
        <>
          <span key={item} className="text-sm ">
            {item}
          </span>
          {index < text.length - 1 ? "/" : ""}
        </>
      ))}
    </div>
  );
};

export default BreadCrumb;
