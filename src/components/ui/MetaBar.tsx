import { MetaBarProps } from "@/types/brain-bank/props-type";
import React from "react";

const MetaBar: React.FC<MetaBarProps> = (props) => {
  return (
    <p className="bg-secondary-surface py-3 text-center text-sm">
      <span className="font-semibold">{props.value}</span> {props.message}
    </p>
  );
};

export default MetaBar;
