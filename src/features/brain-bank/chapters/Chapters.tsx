import React from "react";
import { useParams } from "react-router";
import { useChapterData } from "./hooks/useChaptersHook";
import Header from "./components/Header";
import Meta from "./components/Meta";
import Chapter from "./components/Chapter";

const Chapters: React.FC = () => {
  const params = useParams();
  const bookId = Number(params.bookId);
  const { chapters, isLoading, error } = useChapterData(bookId);

  return (
    <div className="bg-component border-border/70 flex max-h-[85vh] w-88 flex-col rounded-md border">
      {/* Header area */}
      <Header />
      <Meta />

      {isLoading && <p className="text-muted p-2 text-sm">Loading chapters...</p>}
      {error && <p className="p-2 text-sm text-red-500">Failed to load chapters</p>}
      <div className="overflow-y-scroll p-2">
        <ul>{chapters?.map((chapter, index) => <Chapter key={index} {...chapter} />)}</ul>
      </div>
    </div>
  );
};

export default Chapters;
