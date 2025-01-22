import React from "react";
import { Link } from "react-router";
import telegram_logo from "../../assets/telegram_logo.png";
import phone from "../../assets/phone.png";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full bg-blue-500 text-white flex justify-center gap-20 py-6 text-center text-3xl font-bold">
        <Link to={"/"}>
          <h2>Asosiy Sahifa</h2>
        </Link>
        <Link to={"/men"}>
          <h2>Men haqimda</h2>
        </Link>
        <Link to={"/contact"}>
          <h2>Contact</h2>
        </Link>
      </header>
      <main className="flex-1 w-full max-w-4xl p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Biz bilan bog'laning
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Har qanday savollaringiz bo‘lsa, biz bilan bog‘lanishingiz mumkin.
        </p>
        <div className="flex gap-4 mx-auto w-max mt-8">
          <div className="flex gap-1">
            <img className="w-6" src={telegram_logo} alt="" />
            <h2>Telegram</h2>
          </div>
          <a href="https://t.me/Muhammad_Nuraliyev">
            https://t.me/Muhammad_Nuraliyev
          </a>
        </div>
        <div className="flex gap-4 mx-auto w-max mt-8">
          <div className="flex gap-1">
            <img className="w-6" src={phone} alt="" />
            <h2>Phone</h2>
          </div>
          <h2>+998 77 305 82 08</h2>
        </div>
      </main>
      <footer className="w-full bg-gray-800 text-white py-4 text-center">
        &copy; 2025 Barcha huquqlar himoyalangan
      </footer>
    </div>
  );
};

export default Contact;
