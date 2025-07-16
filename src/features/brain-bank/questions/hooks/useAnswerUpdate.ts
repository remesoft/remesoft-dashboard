// hooks/useAnswerUpdate.ts
import { useState } from "react";
import { useUpdateAnswerMutation } from "../services/questionsApi";

export const useAnswerUpdate = () => {
  const [loadingQuestionId, setLoadingQuestionId] = useState<number | null>(null);
  const [updateAnswer] = useUpdateAnswerMutation();

  const handleAnswerUpdate = async (
    questionId: number,
    answerIndex: number,
    onSuccess?: () => void,
    onError?: (err: unknown) => void,
  ) => {
    setLoadingQuestionId(questionId);
    try {
      await updateAnswer({ questionId, answer: answerIndex }).unwrap();
      console.log(`Updated question ${questionId} to answer ${answerIndex}`);
      onSuccess?.();
    } catch (err) {
      console.error("Failed to update answer", err);
      onError?.(err);
    } finally {
      setLoadingQuestionId(null);
    }
  };

  return {
    loadingQuestionId,
    handleAnswerUpdate,
  };
};
