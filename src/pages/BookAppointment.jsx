import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function BookAppointment() {
  const { t, i18n } = useTranslation();
  const [contactMethod, setContactMethod] = useState("");
  const contactMethodHandler = (e) => {
    console.log(e.target.value);
    setContactMethod(e.target.value);
  };
  useEffect(() => {
    console.log(contactMethod);
  }, [contactMethod]);
  return (
    <div className="flex flex-col my-20 py-12 px-20 w-auto  text-primary rounded-2xl shadow-2xl shadow-primary">
      <h1 className="text-3xl font-bold">{t("Book Your Appointment")}</h1>
      <form action="submit" className="flex flex-col gap-y-2 mt-6">
        <label htmlFor="name">{t("Name")}</label>
        <input type="text" placeholder={t("Name")} name="name" required />
        <label htmlFor="contact">
          {t("You prefer to be contacted by Email or What's App?")}
        </label>
        <select
          name="contact"
          id="contact"
          onChange={contactMethodHandler}
          required
        >
          {" "}
          <option>Email {t("or")} WhatsApp?</option>
          <option value="email">Email</option>
          <option value="whatsapp">What's App</option>
          <option value="both">{t("Both")}</option>
        </select>
        {(contactMethod === "email" || contactMethod === "both") && (
          <input
            type="email"
            placeholder={`Email, ${t("for example")}: john@yahoo.com`}
            name="email"
          />
        )}
        {(contactMethod === "whatsapp" || contactMethod === "both") && (
          <input
            type="whatsapp"
            placeholder={`What's App, ${t("for example")}: +351911123456`}
            name="text"
          />
        )}
        <label htmlFor="language">{t("Your Prefered Language")}</label>
        <select name="language" id="language" required>
          <option>{t("Choose Language")}</option>
          <option value="portuguese">{t("Portuguese")}</option>
          <option value="english">{t("English")}</option>
          <option value="persian">{t("Farsi or Persian")}</option>
        </select>
        <label htmlFor="explanation">
          {t(
            "Please explain your health issue and what you would like to achieve with the online appointment."
          )}
        </label>
        <textarea
          name="explanation"
          id="explanation"
          placeholder={t("Brief Explanation")}
        ></textarea>
        <button>{t("Book Appointment")}</button>
      </form>
    </div>
  );
}

export default BookAppointment;
