import React from "react";
import { Link } from "react-router";

const MenHaqimda = () => {
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
          Salom, men Muhammad
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Men Front-end dasturlash bilan shug‘ullanaman va yangi
          texnologiyalarni o‘rganishni yaxshi ko‘raman.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition">
          Ko'proq bilish
        </button>
      </main>
      <footer className="w-full bg-gray-800 text-white py-4 text-center">
        &copy; 2025 Barcha huquqlar himoyalangan
      </footer>
    </div>
  );
};

export default MenHaqimda;
