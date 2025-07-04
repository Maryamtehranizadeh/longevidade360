import { useTranslation } from "react-i18next";
import BookAppointment from "./BookAppointment";

function HomePage() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  return (
    <div className="flex flex-col items-center p-8 text-primary">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-5xl font-bold leading-tight text-primary">
          {t("Welcome to")} Longevidade360
        </h1>
        <p className="text-xl text-italic leading-relaxed text-primary">
          {t("Your journey to a healthier and longer life")}
        </p>
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          <button
            className="text-xl w-[180px]"
            onClick={() => i18n.changeLanguage("pt")}
          >
            🇵🇹 Português
          </button>
          <button
            className="text-xl w-[180px]"
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
