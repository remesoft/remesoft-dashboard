import React, { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import "../locales/i18n";
import Name from "./Name";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
  };

  return (
    <div>
      <select onChange={changeLanguage}>
        <option value="en">English</option>
        <option value="bn">Bangla</option>
      </select>
      <header className="bg-primary p-4 text-white">{t("welcome")}</header>
      <Name />
    </div>
  );
};

export default Header;
