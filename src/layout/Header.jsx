import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  return (
    <header className="bg-primary text-secondary w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 md:gap-x-5 items-center justify-between px-4 py-10">
        <div>
          <Link
            to="/"
            className="text-3xl md:text-4xl font-bold hover:opacity-90 transition-opacity duration-300"
          >
            Longevidade360
          </Link>
        </div>
        <nav className="flex flex-col items-center sm:flex-row space-x-4 ">
          <button>
            <Link to="/book-your-appointment">
              {t("Book Your Appointment")}
            </Link>
          </button>

          <button>
            <Link to="/about">{t("About Us")}</Link>
          </button>

          <button>
            <Link to="/blog">Blog</Link>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
