import React from "react";
import { Link } from "react-router-dom";

const ListNovel = ({ data = [] }) => {
  let index = 1;
  return (
    <div className="max-w-lg w-full mx-auto space-y-5 px-2.5">
      {data.map((item) => (
        <div
          key={item._id}
          className=" rounded-md px-5 py-3 shadow-lg border border-lime-600 hover:text-white hover:bg-lime-700 transition-all"
        >
          <Link to={`/${item._id}/novel`} className="text-xl truncate block">
            {index++}. {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListNovel;
