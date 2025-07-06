// import React from "react";
// import { useTranslation } from "react-i18next";

// function About() {
//   const { t } = useTranslation();
//   return (
//     <div className="max-w-5xl mx-auto p-12 my-20 text-primary shadow-lg shadow-primary rounded-3xl ">
//       <h1 className="text-3xl font-bold mb-6">About Us</h1>
//       <p className="mb-4 italic text-center font-bold">
//         The name <strong>Longevidade360</strong> reflects our holistic approach
//         to health. <strong>“Longevidade”</strong> in portuguese language means{" "}
//         <strong>"longevity"</strong>, and <strong>“360”</strong> symbolizes a
//         complete, all-around view of well-being, both in quantity and quality of
//         life.
//       </p>
//       <p className="mb-4">
//         <strong>Longevidade360</strong> was founded with a simple vision: to
//         live longer and healthier!
//       </p>
//       <p>
//         We believe that proactive care, awareness, and healthy choices made in
//         midlife, can significantly shape a happier, active and independent
//         elderly stage.
//       </p>

//       <p className="mb-4">
//         The founder, <strong>Dr. Maryam Zadeh</strong> (<em>OM: 79967</em>), is
//         a licensed General Practitioner in Portugal. At the age of 40, she began
//         to deeply reflect on the possibility of living longer and better,
//         considering physical health, diet, workout, weight balance, cancer
//         screening, infection prevention, mental balance and habit correction as
//         key elements in shaping long-term well-being.
//       </p>
//       <p className="mb-4">
//         The platform <strong>Longevidade360</strong>, provides updated longevity
//         information, accessible online medical consultations and promoting
//         health education for individuals entering midlife.
//       </p>
//       <p className="mb-4 italic font-bold text-center">
//         At <strong>Longevidade360</strong>, we believe that taking care of your
//         health in your 40s, 50s and 60s, is one of the best gifts you can give
//         to your future self.
//       </p>
//     </div>
//   );
// }

// export default About;

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
