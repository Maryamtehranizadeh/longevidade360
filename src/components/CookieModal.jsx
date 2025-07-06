import React, { useEffect, useState } from "react";

function CookieModal() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookiesAccepted") === "true";
    if (!hasAccepted) {
      const timer = setTimeout(() => {
        setShow(true);
        document.body.style.overflow = "hidden"; // disable scroll
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);
  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShow(false);
    document.body.style.overflow = "auto"; // re-enable scroll
  };

  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 bg-primary/20 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="bg-secondary rounded-2xl shadow-2xl p-8 w-full max-w-md text-center animate-fadeIn max-h-[90vh]">
        <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 sm:mb-6">
          🍪 Cookies & Privacy
        </h2>
        <p className="text-primary mb-4 sm:mb-6 text-sm sm:text-base">
          We use cookies to improve your experience on longevidade360.pt
        </p>
        <button onClick={handleAccept}>Accept</button>
      </div>
    </div>
  );
}

export default CookieModal;
