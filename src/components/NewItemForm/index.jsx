import React, { useState } from "react";
import useApi from "../hooks/useApi";

const Index = () => {
  const { createItem } = useApi("https://jsonplaceholder.typicode.com/posts");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setName("");
    createItem({
      title: name,
      body: "juts another content",
      userId: 1,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className=" border-gray-500 border-width-1 border-2 mr-2"
      />
      <button type="submit" className=" rounded-sm px-2 py-1 bg-pink-200">
        Add Item
      </button>
    </form>
  );
};

export default Index;
