import React from "react";

interface MetaProps {
  count?: number;
  message: string;
}

const Meta: React.FC<MetaProps> = ({ count, message }) => {
  return (
    <div className="bg-background/70 py-2.5 text-center">
      <strong>{count}</strong> {message}
    </div>
  );
};

export default Meta;
