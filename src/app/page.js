"use client";
import React from "react";
import useApi from "../components/hooks/useApi";
import ListItems from "../components/ListItems";
import NewItemForm from "../components/NewItemForm";

export default function Home() {
  const { data, loading, error } = useApi(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }
  if (error) {
    <div> {error}</div>;
  }
  return (
    <div className="p-10">
      <h1 className=" mb-4 text-2xl">CRUD App</h1>
      <NewItemForm />
      <ListItems items={data} />
    </div>
  );
}
