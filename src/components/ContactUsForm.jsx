import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

function ContactUsForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_1umcivn", // replace with your Service ID
        "template_lz1qlt8", // replace with your Template ID
        formData,
        "BLB9X_uXikDQAJrRh" // replace with your Public Key
      )
      .then(() => {
        setStatus("success");
        setFormData({ fullName: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div className="mx-auto my-8 p-6 w-auto max-w-xl">
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-primary">
          {t("Contact Us")}
        </h2>
        <input
          type="text"
          placeholder={t("Full Name")}
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder={t("Message")}
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          required
        />
        <button type="submit">{t("Send")}</button>
        {status === "success" && (
          <p className="text-green-600">{t("Message sent successfully")}!</p>
        )}
        {status === "error" && (
          <p className="text-red-600">
            {t("Something went wrong. Please try again later")}.
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactUsForm;
