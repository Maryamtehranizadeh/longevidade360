import React from "react";
import { useTranslation } from "react-i18next";

function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto p-12 my-20 text-primary shadow-lg shadow-primary rounded-3xl">
      <h1 className="text-3xl font-bold mb-6">{t("privacy.title")}</h1>
      <p className="italic mb-6">{t("privacy.effectiveDate")}</p>

      <p className="mb-4 italic text-center">{t("privacy.intro")}</p>
      <p className="mt-8 font-semibold italic text-center">
        {t("privacy.agreement")}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {t("privacy.section1.title")}
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>{t("privacy.section1.item1")}</li>
        <li>{t("privacy.section1.item2")}</li>
        <li>{t("privacy.section1.item3")}</li>
        <li>{t("privacy.section1.item4")}</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {t("privacy.section2.title")}
      </h2>
      <p className="mb-4">{t("privacy.section2.description")}</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>{t("privacy.section2.item1")}</li>
        <li>{t("privacy.section2.item2")}</li>
        <li>{t("privacy.section2.item3")}</li>
        <li>{t("privacy.section2.item4")}</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {t("privacy.section3.title")}
      </h2>
      <p className="mb-4">{t("privacy.section3.description")}</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {t("privacy.section4.title")}
      </h2>
      <p className="mb-4">{t("privacy.section4.description")}</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {t("privacy.section5.title")}
      </h2>
      <p className="mb-4">{t("privacy.section5.description")}</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {t("privacy.section6.title")}
      </h2>
      <p className="mb-4">{t("privacy.section6.description")}</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>{t("privacy.section6.item1")}</li>
        <li>{t("privacy.section6.item2")}</li>
        <li>{t("privacy.section6.item3")}</li>
        <li>{t("privacy.section6.item4")}</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {t("privacy.section7.title")}
      </h2>
      <p className="mb-4">{t("privacy.section7.description")}</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {t("privacy.section8.title")}
      </h2>
      <p className="mb-4">{t("privacy.section8.description")}</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {t("privacy.section9.title")}
      </h2>
      <p className="mb-4">{t("privacy.section9.description")}</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>{t("privacy.section9.item1")}</li>
        <li>
          Website: <a href="/contact-us">longevidade360.pt/contact-us</a>
        </li>
      </ul>
    </div>
  );
}

export default PrivacyPolicy;
