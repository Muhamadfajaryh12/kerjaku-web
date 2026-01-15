import React from "react";

const List = ({ label, data, content }) => {
  return (
    <div>
      <h1>{label}</h1>
      <div className="flex flex-col gap-2">
        {data?.length > 0 ? (
          data?.map((item) => content(item))
        ) : (
          <h1>Anda belum menambahkan {label}</h1>
        )}
      </div>
    </div>
  );
};

export default List;
