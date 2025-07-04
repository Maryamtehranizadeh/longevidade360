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
    <div className="w-full max-w-3xl mx-auto my-12 sm:my-16 px-4 sm:px-6 md:px-12 py-8 sm:py-12  text-primary rounded-2xl shadow-lg shadow-primary/10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
        {t("Book Your Appointment")}
      </h1>
      <form action="submit" className="flex flex-col gap-y-2">
        <label htmlFor="name" className="text-base sm:text-lg font-semibold">
          {t("Name")}
        </label>
        <input type="text" placeholder={t("Name")} name="name" required />
        <label htmlFor="contact" className="text-base sm:text-lg font-semibold">
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
        <label
          htmlFor="language"
          className="text-base sm:text-lg font-semibold"
        >
          {t("Your Prefered Language")}
        </label>
        <select name="language" id="language" required>
          <option>{t("Choose Language")}</option>
          <option value="portuguese">{t("Portuguese")}</option>
          <option value="english">{t("English")}</option>
          <option value="persian">{t("Farsi or Persian")}</option>
        </select>
        <label
          htmlFor="explanation"
          className="text-base sm:text-lg font-semibold"
        >
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
