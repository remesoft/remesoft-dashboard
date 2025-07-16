import React from "react";

interface PreviewProps {
  type: "video" | "markdown" | undefined;
  value: string | undefined;
}

const Preview: React.FC<PreviewProps> = ({ type, value }) => {
  if (type === "video" || type === undefined) {
    const embedUrl = value?.replace("watch?v=", "embed/");
    return (
      value && (
        <div className="p-2">
          <iframe className="rounded-md" width="100%" src={embedUrl} title="YouTube Video" allowFullScreen />
        </div>
      )
    );
  }

  return <div className="mt-4 border bg-gray-50 p-4 whitespace-pre-wrap">{value}</div>;
};

export default Preview;
