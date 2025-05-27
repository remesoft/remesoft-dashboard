import React from "react";
import { titleBarProps } from "../types";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

const TitleBar: React.FC<titleBarProps> = (props) => {
  return (
    <section className="bg-foreground flex items-center justify-between px-7 py-2">
      <h2 className="text-header text-lg font-semibold">{props.title}</h2>
      <ul className="flex items-center gap-2">
        {props.breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="text-details mr-2">/</span>}
            {index === props.breadcrumbs.length - 1 ? (
              <span className="text-details text-md">{breadcrumb.label}</span>
            ) : (
              <a href={breadcrumb.link} className="text-details text-md hover:text-active">
                {breadcrumb.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TitleBar;
