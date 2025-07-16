import React from "react";

interface MetaProps {
  total: number;
}

const Meta: React.FC<MetaProps> = ({ total }) => {
  return (
    <div className="bg-background/70 py-2.5 text-center">
      <strong>{total}</strong> Questions in this book.
    </div>
  );
};

export default Meta;
