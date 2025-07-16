interface FormInputProps {
  type: "video" | "markdown" | undefined;
  value: string | undefined;
  setInputType: (type: "video" | "markdown" | undefined) => void;
  setInputValue: (value: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({ type, value, setInputValue, setInputType }) => {
  return (
    <div className="space-y-2 rounded-sm px-2 py-2">
      <select
        value={type}
        onChange={(e) => setInputType(e.target.value as "video" | "markdown")}
        className="bg-background/50 border-border/60 w-full rounded-sm border p-2 focus:outline-0"
      >
        <option value="video">Video</option>
        <option value="markdown">Markdown</option>
      </select>
      {type == "video" || type == undefined ? (
        <input
          type="text"
          value={value}
          placeholder="https://youtube.com/watch?v=..."
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-background/50 border-border/60 w-full rounded-sm border p-2 focus:outline-0"
        />
      ) : (
        <textarea
          value={value}
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-background/50 border-border/60 w-full rounded-sm border p-2 focus:outline-0"
          placeholder="Write your markdown here..."
          rows={6}
        />
      )}
    </div>
  );
};

export default FormInput;

// import React from "react";

// interface FormInputProps {
//   type: "video" | "markdown";
//   setType: React.Dispatch<React.SetStateAction<"video" | "markdown">>;
//   videoUrl: string;
//   setVideoUrl: React.Dispatch<React.SetStateAction<string>>;
//   markdownText: string;
//   setMarkdownText: React.Dispatch<React.SetStateAction<string>>;
// }

// const FormInput: React.FC<FormInputProps> = ({
//   type,
//   setType,
//   videoUrl,
//   setVideoUrl,
//   markdownText,
//   setMarkdownText,
// }) => {
//   return (
//     <form className="space-y-2 rounded-sm px-2 py-2">
//       <div>
// <select
//   value={type}
//   onChange={(e) => setType(e.target.value as "video" | "markdown")}
//   className="bg-background/50 border-border/60 w-full rounded-sm border p-2 focus:outline-0"
// >
//   <option value="Video">Video</option>
//   <option value="Markdown">Markdown</option>
// </select>
//       </div>

//       {type === "video" ? (
// <input
//   type="text"
//   placeholder="https://youtube.com/watch?v=..."
//   value={videoUrl}
//   onChange={(e) => setVideoUrl(e.target.value)}
//   className="bg-background/50 border-border/60 w-full rounded-sm border p-2 focus:outline-0"
// />
//       ) : (
// <textarea
//   value={markdownText}
//   onChange={(e) => setMarkdownText(e.target.value)}
//   rows={6}
//   className="bg-background/50 border-border/60 w-full rounded-sm border p-2 focus:outline-0"
// />
//       )}
//     </form>
//   );
// };

// export default FormInput;
