import React, { useEffect, useState } from "react";
import Options from "./Options";
import { useQuestionData } from "../hooks/useQuestionsHook";
import { useAnswerUpdate } from "../hooks/useAnswerUpdate";
import { useParams } from "react-router";

const OptionsGroup: React.FC = () => {
  const { groupId } = useParams();
  const { questions, isLoading, error, refetch } = useQuestionData(Number(groupId));
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
    <div className="overflow-y-scroll py-3">
      {isLoading && <p className="text-muted text-sm">Loading groups...</p>}
      {error && <p className="text-sm text-red-500">Failed to load questions</p>}
      {!isLoading &&
        questions &&
        questions.map((question, index) => (
          <Options
            id={question.id}
            key={question.id}
            selected={selectedOptions[index]}
            onSelect={(answerIndex) => handleSelect(index, answerIndex)}
            labels={optionLabels}
            index={index}
            loading={loadingQuestionId === question.id}
            refetchQuestions={refetch} // ✅ pass refetch function
          />
        ))}
    </div>
  );
};

export default OptionsGroup;
