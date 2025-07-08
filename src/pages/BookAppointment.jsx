import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function BookAppointment() {
  const [formData, setFormData] = useState({});
  const { t, i18n } = useTranslation();
  const [contactMethod, setContactMethod] = useState("");
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);
  const [isHuman, setIsHuman] = useState(false);

  const contactMethodHandler = (e) => {
    // console.log(e.target.value);
    setContactMethod(e.target.value);
  };

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "acceptPolicy") {
      setAcceptedPolicy(checked);
    } else if (name === "isHuman") {
      setIsHuman(checked);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!acceptedPolicy) {
      alert("You must accept the privacy policy and terms.");
      return;
    }
    if (!isHuman) {
      alert("Please confirm you're not a robot.");
      return;
    }

    console.log("Form Submitted:", formData);
  };
  useEffect(() => {
    // console.log(contactMethod);
    // console.log(formData);
  }, [contactMethod, formData, acceptedPolicy]);
  return (
    <div className="w-full max-w-3xl mx-auto my-12 sm:my-16 px-4 sm:px-6 md:px-12 py-8 sm:py-12  text-primary rounded-2xl shadow-lg shadow-primary/10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        {t("Book Your Appointment")}
      </h1>
      <form
        action="submit"
        className="flex flex-col gap-y-2"
        onChange={changeHandler}
        onSubmit={submitHandler}
      >
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
            type="text"
            placeholder={`What's App, ${t("for example")}: +351911123456`}
            name="whatsapp"
            pattern="^\+\d{8,15}$"
            title="Please enter in the format +351911123456 with only digits after the +"
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
          htmlFor="appointmentDateTime"
          className="text-base sm:text-lg font-semibold"
        >
          {t("Preferred Date and Time")}{" "}
          <span className="block text-sm text-gray-500 font-normal">
            {t("Western European Time — Lisbon, London, Dublin")}
          </span>
        </label>
        <input
          type="datetime-local"
          id="appointmentDateTime"
          name="appointmentDateTime"
          required
        />

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
          rows="4"
          required
        />
        <div>
          <input
            type="checkbox"
            id="acceptPolicy"
            name="acceptPolicy"
            className="accent-primary"
            required
          />
          <label htmlFor="acceptPolicy" className="text-sm sm:text-base ml-2">
            {t("I have read and accept the")}{" "}
            <a
              href="/privacy-policy"
              className="font-semibold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Privacy Policy")}
            </a>{" "}
            {t("and agree with the")}{" "}
            <a
              href="/terms-and-conditions"
              className="font-semibold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Terms and Conditions.")}
            </a>
          </label>
        </div>

        <div>
          <input
            type="checkbox"
            id="isHuman"
            name="isHuman"
            className="accent-primary"
            required
          />
          <label htmlFor="isHuman" className="text-sm sm:text-base ml-2">
            {t("I am not a robot")}
          </label>
        </div>
        <button>{t("Book Appointment")}</button>
      </form>
    </div>
  );
}

export default BookAppointment;
