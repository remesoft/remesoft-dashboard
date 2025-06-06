import React from "react";
import { Pen01FreeIcons } from "@hugeicons/core-free-icons";
import BookUpload from "@/components/ui/brain-bank/BookUpload";
import TextInput from "@/components/ui/TextInput";
import BookInfo from "@/components/ui/brain-bank/BookInfo";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

const BookDetails: React.FC = () => {
  const { book, loading, error } = useSelector(
    (state: RootState) => state.book,
  );

  return (
    <section className="bg-primary-surface text-secondary w-76 rounded-md p-1">
      <div className="bg-secondary-surface rounded-md p-2">
        <BookUpload />
        <TextInput
          icon={Pen01FreeIcons}
          placeholder="Enter your book name..."
          value={book.name}
        />
      </div>
      <BookInfo
        createdAt={book.createdAt}
        updatedAt={book.updatedAt}
        published={book.isPublished}
        chapters={book.totalChapters}
        groups={book.totalGroups}
      />
    </section>
  );
};

export default BookDetails;
