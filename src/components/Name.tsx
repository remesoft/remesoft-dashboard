import React from "react";
import { useAppSelector } from "../hooks"; // adjust path as needed

const Name: React.FC = () => {
  const { headingSize, paragraphSize } = useAppSelector((state) => state.theme);

  return (
    <div className="p-4 space-y-4">
      <h2 className={`${headingSize} font-bold`}>User Name Heading</h2>
      <p className={`${paragraphSize}`}>This paragraph inherits font size from Redux state.</p>
    </div>
  );
};

export default Name;