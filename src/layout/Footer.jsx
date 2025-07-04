import { Link } from "react-router-dom";
import telegram from "../assets/telegram.png";
import instagram from "../assets/Instagram_Glyph_Gradient.png";
import facebook from "../assets/facebookcopy.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const buttonClass =
    "text-lg bg-primary text-secndary px-4 py-2 rounded-md hover:opacity-80 w-full md:w-auto hover:border-secondary";

  return (
    <footer className=" flex flex-col text-center p-6 bg-primary text-secondary">
      <p>Copyright © Longevidade360.pt - {t("Created by")} Chiraz.pt</p>
      {/* <p>Created by Chiraz.pt</p> */}
      <div className="flex flex-row justify-center gap-4 mt-4">
        <Link to="https://www.instagram.com/sellmyglider/">
          <button className={buttonClass}>
            <img src={instagram} alt="facebook" className="w-[30px] h-[30px]" />
          </button>
        </Link>
        <Link to="https://t.me/sellmyglider">
          <button className={buttonClass}>
            <img src={telegram} alt="facebook" className="w-[30px] h-[30px]" />
          </button>
        </Link>
        <Link to="https://www.facebook.com/profile.php?id=61577039763269">
          <button className={buttonClass}>
            <img src={facebook} alt="facebook" className="w-[30px] h-[30px]" />
          </button>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
