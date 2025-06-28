import {
  Calendar03FreeIcons,
  CalendarUpload01FreeIcons,
  LicenseFreeIcons,
  News01FreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import moment from "moment";
import React from "react";

interface TemplateProps {
  icon: IconSvgElement;
  property: string;
  value: string;
}

const Template: React.FC<TemplateProps> = ({ icon, property, value }) => {
  return (
    <div className="text-secondary grid grid-cols-2 py-1">
      <div className="flex items-center gap-2">
        <HugeiconsIcon icon={icon} className="h-5 w-5" />
        <span className="font-semibold">{property}</span>
      </div>
      <span>: {value}</span>
    </div>
  );
};

const Info: React.FC = () => {
  return (
    <div className="px-4 pb-4">
      <Template icon={Calendar03FreeIcons} property="Created At" value={moment().format("MMMM Do YYYY")} />
      <Template icon={CalendarUpload01FreeIcons} property="Updated At" value={moment().format("MMMM Do YYYY")} />
      <Template icon={News01FreeIcons} property="Chapters" value="0" />
      <Template icon={LicenseFreeIcons} property="Group" value="0" />
    </div>
  );
};

export default Info;
