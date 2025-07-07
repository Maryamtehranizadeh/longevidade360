// import { useTranslation } from "react-i18next";
// import BookAppointment from "./BookAppointment";

// function HomePage() {
//   const { t, i18n } = useTranslation();
//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     localStorage.setItem("lng", lng);
//   };
//   return (
//     <div className="flex flex-col items-center px-4 py-8 md:px-8 md:py-16 text-primary">
//       <div className="max-w-2xl w-full text-center space-y-6 md:space-y-8">
//         <h1 className="italic text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
//           Para quem tem mais de 40 anos:
//           <br /> Viva mais e melhor!
//         </h1>

//         <p className="text-base sm:text-lg md:text-xl italic leading-relaxed">
//           Guias para manter-se jovem, prevenir e tratar doenças, adiar o
//           envelhecimento e prolongar a sua vida!
//         </p>
//         <p className="text-base sm:text-lg md:text-xl italic leading-relaxed">
//           Consultas médicas online a preço acessível.
//         </p>
//       </div>
//       <BookAppointment />
//     </div>
//   );
// }

// export default HomePage;

import { useTranslation } from "react-i18next";
import BookAppointment from "./BookAppointment";

function HomePage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <div className="flex flex-col items-center px-4 py-8 md:px-8 md:py-16 text-primary">
      <div className="max-w-2xl w-full text-center space-y-6 md:space-y-8">
        <p className="text-base sm:text-lg md:text-xl italic leading-relaxed">
          {t("homepage.title_line1")}{" "}
        </p>
        <h1 className="italic text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
          {t("homepage.title_line2")}
        </h1>

        <p className="text-base sm:text-lg md:text-xl italic leading-relaxed">
          {t("homepage.subtitle")}
        </p>
        {/* <p className="text-base sm:text-lg md:text-xl italic leading-relaxed">
          {t("homepage.consultations")}
        </p> */}
      </div>
      <BookAppointment />
    </div>
  );
}

export default HomePage;
