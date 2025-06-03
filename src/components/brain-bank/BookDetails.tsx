import { Book02FreeIcons, Pen01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React, { useState } from "react";
import BookUpload from "../ui/brain-bank/BookUpload";
import TextInput from "../ui/TextInput";
import BookInfo from "../ui/brain-bank/BookInfo";
import { BookInformationProps } from "@/types";

const BookDetails: React.FC = () => {
  const bookInformation: BookInformationProps = {
    createdAt: "2023-10-01",
    updatedAt: "2023-10-15",
    published: true,
    chapters: 5,
    groups: 2,
  };

  return (
    <section className="bg-primary-surface text-secondary w-76 rounded-md p-1">
      <div className="bg-secondary-surface rounded-md p-2">
        <BookUpload />
        <TextInput
          icon={Pen01FreeIcons}
          placeholder="Enter your book name..."
        />
      </div>
      <BookInfo {...bookInformation} />
    </section>
  );
};

export default BookDetails;
