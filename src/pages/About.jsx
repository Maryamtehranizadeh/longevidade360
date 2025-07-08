import React from "react";
import { useTranslation } from "react-i18next";
import ContactUsForm from "../components/ContactUsForm";
import { Trans } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-y-4 max-w-5xl mx-auto p-12 my-20 shadow-lg shadow-primary rounded-3xl">
      <div className="text-primary">
        <h1 className="text-3xl font-bold mb-6">{t("about.title")}</h1>

        <p className=" mb-4 font-bold text-xl italic text-center leading-loose">
          {t("about.paragraph2")}
        </p>

        <p className="text-xl mb-4 italic text-center leading-loose">
          {t("about.paragraph1")}
        </p>

        <p className="text-lg mb-4 leading-loose">
          <Trans
            i18nKey="about.paragraph4"
            components={{ bold: <span className="font-bold" /> }}
          />
        </p>

        <p className="text-lg mb-4 leading-loose">{t("about.paragraph5")}</p>

        <p className="text-lg mb-4 italic font-bold text-center leading-loose">
          {t("about.paragraph6")}
        </p>
      </div>
      <div className="text-center">
        <ContactUsForm />
      </div>
    </div>
  );
}

export default About;
