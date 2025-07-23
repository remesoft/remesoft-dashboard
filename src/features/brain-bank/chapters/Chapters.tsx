import React from "react";
import { useParams } from "react-router";
import Header from "./components/Header";
import Meta from "./components/Meta";
import Chapter from "./components/Chapter";
import { ChapterProps } from "./types";
import { useGetChaptersQuery } from "./api";

const Chapters: React.FC = () => {
  const params = useParams();
  const bookId = Number(params.bookId);
  const { data, isLoading, error } = useGetChaptersQuery(bookId);

  return (
    <div className="bg-component border-border/70 flex max-h-[85vh] w-88 flex-col rounded-md border">
      {/* Header area */}
      <Header />
      <Meta count={data?.length} message="Chapters is this book" />

      {isLoading && <p className="text-muted p-2 text-sm">Loading chapters...</p>}
      {error && <p className="p-2 text-sm text-red-500">Failed to load chapters</p>}
      <ul className="overflow-auto p-2">
        {data?.map((chapter: ChapterProps, index: number) => (
          <Chapter key={index} {...chapter} />
        ))}
      </ul>
    </div>
  );
};

export default Chapters;
