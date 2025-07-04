import React from "react";
import { useParams } from "react-router";
import { useGroupData } from "./hooks/useGroupData";

const Groups: React.FC = () => {
  const params = useParams();
  const chapterId = Number(params.id);
  const { group, isLoading, error } = useGroupData(chapterId);

  return <div>Groups</div>;
};

export default Groups;
