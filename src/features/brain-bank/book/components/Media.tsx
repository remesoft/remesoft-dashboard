import { BookEditFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

interface MediaProps {
  preview?: string;
  onChange: (image: string) => void;
  setSelectedImage: (file: File | null) => void;
}

interface PreviewProps {
  preview?: string;
}

// upload area component
const Upload: React.FC<MediaProps> = ({ onChange, setSelectedImage }) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const fileURL = URL.createObjectURL(file);
      onChange(fileURL);
    }
  };

  return (
    <div className="bg-background/50 text-secondary/50 hover:bg-background/80 h-72 w-82 rounded-md p-2 transition">
      <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} id="fileInput" />
      <label
        htmlFor="fileInput"
        className="border-border flex h-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed"
      >
        <HugeiconsIcon className="h-8 w-8 opacity-70" icon={BookEditFreeIcons} />
        <h3 className="font-semibold opacity-70">Drag & Drop Book Image</h3>
        <p className="text-sm opacity-70">Max file size 5MB</p>
      </label>
    </div>
  );
};

// preview area component
const Preview: React.FC<PreviewProps> = ({ preview }) => {
  return (
    <div className="bg-background/50 text-secondary/50 hover:bg-background/80 flex h-72 w-82 items-center justify-center rounded-md p-2 transition">
      <img className="h-[90%] shadow-md" src={preview} alt="book cover" />
    </div>
  );
};

// media component
const Media: React.FC<MediaProps> = ({ preview, onChange, setSelectedImage }) => {
  return (
    <div>
      {preview ? <Preview preview={preview} /> : <Upload onChange={onChange} setSelectedImage={setSelectedImage} />}
    </div>
  );
};

export default Media;
