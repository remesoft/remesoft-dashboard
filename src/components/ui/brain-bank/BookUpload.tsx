import { Book02FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React, { useState } from "react";

const BookUpload: React.FC = () => {
  const [coverPreview, setCoverPreview] = useState<string | null>(null);

  // handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setCoverPreview(null);
    }
  };

  return (
    <label htmlFor="upload-cover" className="block w-full cursor-pointer rounded-md">
      <input type="file" className="hidden" id="upload-cover" accept="image/*" onChange={handleFileChange} />
      <div className="border-secondary-border text-muted mb-2 flex h-56 w-full flex-col items-center justify-center overflow-hidden rounded-md border border-dashed">
        {coverPreview ? (
          <img src={coverPreview} alt="Book Cover Preview" className="h-full w-full object-contain py-4 shadow-2xl shadow-black" />
        ) : (
          <>
            <HugeiconsIcon icon={Book02FreeIcons} className="mb-2 h-8 w-8" />
            <h3 className="font-medium">Drag & Drop Book Cover</h3>
            <p className="mt-1 text-sm">Max file size 5mb</p>
          </>
        )}
      </div>
    </label>
  );
};

export default BookUpload;
