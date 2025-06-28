import React from "react";
import { useParams } from "react-router";
import { useChapterData } from "./hooks/useChaptersHook";
import Header from "./components/Header";
import Meta from "./components/Meta";
import Chapter from "./components/Chapter";

const Chapters: React.FC = () => {
  const params = useParams();
  const bookId = Number(params.id);
  const { chapters, isLoading, error } = useChapterData(bookId); // ✅ keep chapters as is

  return (
    <div className="bg-component border-border/50 w-82 rounded-md border">
      {/* Header area */}
      <Header />
      <Meta />

      {isLoading && <p className="text-muted p-2 text-sm">Loading chapters...</p>}
      {error && <p className="p-2 text-sm text-red-500">Failed to load chapters</p>}
      <ul>{chapters?.map((chapter, index) => <Chapter key={index} {...chapter} />)}</ul>
    </div>
  );
};

export default Chapters;
