import React from "react";
import Header from "./components/Header";
import Meta from "./components/Meta";
import OptionsGroup from "./components/OptionsGroup";
import { useGetQuestionQuery } from "./services/questionsApi";
import { useParams } from "react-router";

const Questions: React.FC = () => {
  const { groupId } = useParams();
  const { data } = useGetQuestionQuery(Number(groupId));

  return (
    <div className="bg-component border-border/70 flex max-h-[85vh] w-88 flex-col rounded-md border">
      <Header />
      <Meta total={data?.length || 0} />
      <OptionsGroup questions={data} />
    </div>
  );
};

export default Questions;
