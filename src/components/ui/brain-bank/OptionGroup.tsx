import React from "react";
import Option from "./Option";

interface OptionGroupProps {
  totalOptions?: number;
  answer?: number;
}

const OptionGroup: React.FC<OptionGroupProps> = ({
  totalOptions = 4,
  answer = 0,
}) => {
  const options = Array.from({ length: totalOptions }, (_, index) => (
    <Option
      key={index}
      isSelected={index === answer}
      disabled={index >= totalOptions}
    />
  ));

  return <div className="flex gap-2">{options}</div>;
};

export default OptionGroup;
