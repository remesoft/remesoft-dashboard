import React, { useEffect, useState } from "react";
import Options from "./Options";
import { useAnswerUpdate } from "../hooks/useAnswerUpdate";
import { QuestionProps } from "../types";

interface OptionGroupProps {
  questions: QuestionProps[] | undefined;
}

const OptionsGroup: React.FC<OptionGroupProps> = ({ questions }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const { loadingQuestionId, handleAnswerUpdate } = useAnswerUpdate();
  const optionLabels = ["ক", "খ", "গ", "ঘ"];

  useEffect(() => {
    if (questions && questions.length > 0) {
      const initialAnswers = questions.map((q) => q.answer.toString());
      setSelectedOptions(initialAnswers);
    }
  }, [questions]);

  const handleSelect = (questionIndex: number, answerIndex: number) => {
    const updated = [...selectedOptions];
    updated[questionIndex] = answerIndex.toString();
    setSelectedOptions(updated);

    const questionId = questions?.[questionIndex]?.id;
    if (questionId) {
      handleAnswerUpdate(questionId, answerIndex);
    }
  };

  return (
    <div className="overflow-y-auto py-3">
      {questions &&
        questions.map((question, index) => (
          <Options
            id={question.id}
            key={question.id}
            selected={selectedOptions[index]}
            onSelect={(answerIndex) => handleSelect(index, answerIndex)}
            labels={optionLabels}
            index={index}
            loading={loadingQuestionId === question.id}
          />
        ))}
    </div>
  );
};

export default OptionsGroup;
