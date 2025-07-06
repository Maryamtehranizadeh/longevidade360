import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto p-12 my-20 text-primary shadow-lg shadow-primary rounded-3xl">
      <h1 className="text-3xl font-bold mb-6">{t("about.title")}</h1>

      <p className="mb-4 italic text-center font-bold">
        {t("about.paragraph1")}
      </p>

      <p className="mb-4">{t("about.paragraph2")}</p>

      <p>{t("about.paragraph3")}</p>

      <p className="mb-4">{t("about.paragraph4")}</p>

      <p className="mb-4">{t("about.paragraph5")}</p>

      <p className="mb-4 italic font-bold text-center">
        {t("about.paragraph6")}
      </p>
    </div>
  );
}

export default About;
