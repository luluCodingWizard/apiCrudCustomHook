import React from "react";
import Item from "../Item";

const Index = ({ items }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {items.map((item) => (
        <li key={item.id} className="py-4">
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
};

export default Index;
