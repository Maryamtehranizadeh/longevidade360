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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {t("Welcome to")} Longevidade360
        </h1>
        <p className="text-base sm:text-lg md:text-xl italic leading-relaxed">
          {t("Your journey to a healthier and longer life")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 justify-center items-center w-full">
          <button
            className="text-lg md:text-xl w-full sm:w-[180px]"
            onClick={() => i18n.changeLanguage("pt")}
          >
            🇵🇹 Português
          </button>
          <button
            className="text-lg md:text-xl w-full sm:w-[180px]"
            onClick={() => i18n.changeLanguage("en")}
          >
            🇬🇧 English
          </button>
        </div>
      </div>
      <BookAppointment />
    </div>
  );
}

export default HomePage;
