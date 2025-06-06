import React from "react";
import {
  GroupQuestionProps,
  QuestionInfoProps,
} from "@/types/brain-bank/props-type";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { bnDigit } from "@/utils";
import MenuIconButton from "../MenuIconButton";
import { MoreHorizontalFreeIcons } from "@hugeicons/core-free-icons";
import CircularOption from "./CircularOption";

// COMPONENT: question options
const QuestionInterface: React.FC<QuestionInfoProps> = (props) => {
  const { id, serial, options, selectedIndex, onSelect } = props;

  return (
    <div className="flex items-center px-2 py-1">
      <p className="font-hind-siliguri">{bnDigit(serial)}</p>
      <div className="flex flex-1 justify-center gap-2">
        {options.map((option, index) => (
          <CircularOption
            key={index}
            label={option}
            selected={selectedIndex === index}
            handleClick={() => onSelect(index)}
          />
        ))}
      </div>
      <MenuIconButton icon={MoreHorizontalFreeIcons} />
    </div>
  );
};

// COMPONENT : group row
const GroupQuestion: React.FC<GroupQuestionProps> = (props) => {
  // destructure props
  const { id, serial, answer, info } = props;
  const { group } = useSelector((state: RootState) => state.group);

  // handle selection
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(
    answer ?? null,
  );

  return (
    <div>
      <QuestionInterface
        id={id}
        serial={serial}
        info={info}
        options={group.options}
        answer={answer}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
      />
    </div>
  );
};

export default GroupQuestion;
