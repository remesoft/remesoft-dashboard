import React from "react";

interface PreviewProps {
  type: "video" | "markdown";
  videoUrl: string;
  markdownText: string;
}

const Preview: React.FC<PreviewProps> = ({ type, videoUrl, markdownText }) => {
  if (type === "video") {
    const embedUrl = videoUrl.replace("watch?v=", "embed/");
    return (
      <div className="mt-4">
        <iframe width="100%" height="315" src={embedUrl} title="YouTube Video" allowFullScreen />
      </div>
    );
  }

  return <div className="mt-4 border bg-gray-50 p-4 whitespace-pre-wrap">{markdownText}</div>;
};

export default Preview;
