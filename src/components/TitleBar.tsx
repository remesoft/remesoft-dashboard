import React from "react";
import { titleBarProps } from "../types/brain-bank/props-type";

const TitleBar: React.FC<titleBarProps> = (props) => {
  return (
    <section className="bg-primary-surface flex items-center justify-between px-4 py-2">
      <h2 className="text-header text-lg font-semibold">{props.title}</h2>
      <ul className="flex items-center gap-2">
        {props.breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center text-sm">
            {index > 0 && <span className="text-muted mr-2">/</span>}
            {index === props.breadcrumbs.length - 1 ? (
              <span className="text-muted text-md">{breadcrumb.label}</span>
            ) : (
              <a
                href={breadcrumb.link}
                className="text-primary hover:text-highlight text-md hover:text-active"
              >
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
