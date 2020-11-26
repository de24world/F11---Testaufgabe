import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">{t("English")}</option>
        <option value="de">{t("German")}</option>
      </select>
    </>
  );
};

export default LanguageSwitcher;
