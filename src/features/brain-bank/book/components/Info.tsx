import ConfirmationToast from "@/components/ConfirmationToast";
import {
  Calendar03FreeIcons,
  CalendarUpload01FreeIcons,
  Delete02FreeIcons,
  HelpSquareFreeIcons,
  LicenseFreeIcons,
  News01FreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import moment from "moment";
import React from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { useDeleteBook } from "../hooks";

interface TemplateProps {
  icon: IconSvgElement;
  property: string;
  value: string;
}

interface InfoProps {
  createdAt: string;
  updatedAt: string;
  totalChapters: string;
  totalGroups: string;
  totalQuestions: string;
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

const Info: React.FC<InfoProps> = (props) => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const { createdAt, updatedAt, totalChapters, totalGroups, totalQuestions } = props;
  const { deleteBook } = useDeleteBook();

  const handleDelete = (bookId: number) => {
    deleteBook(Number(bookId), () => {
      toast.success("Book Delete Successful");
      navigate("/brain-bank/create-book");
    });
  };
  return (
    <div className="relative px-4 pb-4">
      <Template icon={Calendar03FreeIcons} property="Created At" value={moment(createdAt).format("MMMM Do YYYY")} />
      <Template
        icon={CalendarUpload01FreeIcons}
        property="Updated At"
        value={moment(updatedAt).format("MMMM Do YYYY")}
      />

      <Template icon={News01FreeIcons} property="Chapters" value={totalChapters} />
      <Template icon={LicenseFreeIcons} property="Group" value={totalGroups} />
      <Template icon={HelpSquareFreeIcons} property="Questions" value={totalQuestions} />

      {bookId && (
        <button
          onClick={() => handleDelete(Number(bookId))}
          className="bg-background/50 hover:bg-background absolute right-0 bottom-0 m-5 rounded-full p-2 transition"
        >
          <HugeiconsIcon className="h-4 w-4" icon={Delete02FreeIcons} />
        </button>
      )}
    </div>
  );
};

export default Info;
