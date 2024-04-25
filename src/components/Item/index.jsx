import React from "react";
import useApi from "../hooks/useApi";

const Index = ({ item }) => {
  const { updateItem, deleteItem } = useApi(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const handleUpdate = () => {
    updateItem(item.id, {
      id: item.id,
      title: "foo",
      body: "bar",
      userId: 1,
    });
  };

  const handleDelete = () => {
    deleteItem(item.id);
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <span className="font-medium">{item.title}</span>
        <span className="text-gray-500 ml-2">- {item.body}</span>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleUpdate}
          className="text-sm px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="text-sm px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Index;
