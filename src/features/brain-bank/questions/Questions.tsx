import React from "react";
import Header from "./components/Header";
import Meta from "./components/Meta";
import OptionsGroup from "./components/OptionsGroup";

const Questions: React.FC = () => {
  return (
    <div className="bg-component border-border/70 flex max-h-[85vh] w-88 flex-col rounded-md border">
      <Header />
      <Meta />
      <OptionsGroup />
    </div>
  );
};

export default Questions;
