import React from "react";

interface MetaProps {
  message: string;
}

const Meta: React.FC<MetaProps> = ({ message }) => {
  return <div className="bg-background/70 py-2.5 text-center">{message}</div>;
};

export default Meta;
