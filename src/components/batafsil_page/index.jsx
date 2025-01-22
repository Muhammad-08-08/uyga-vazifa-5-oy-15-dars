import React from "react";
import { Link } from "react-router";

function Batafsil() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-lg w-full text-center relative">
        <Link to={"/"}>
          <button className="w-20 h-10 bg-green-400 rounded-lg text-lg text-white absolute left-3 top-1">
            orqaga
          </button>
        </Link>
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Salom</h1>
        <h2 className="text-2xl font-semibold mb-2">
          Ismim, <span className="text-blue-500">Muhammad</span>
        </h2>
        <h2 className="text-2xl font-semibold mb-2">
          Familyam, <span className="text-blue-500">Nuraliyev</span>
        </h2>
        <h2 className="text-2xl font-semibold mb-6">
          Sharfim, <span className="text-blue-500">Mutalib o'gli</span>
        </h2>
        <h3 className="text-xl font-medium text-gray-700 mb-4">
          Men haqimda ma'lumot
        </h3>
        <p className="text-lg mb-4 leading-relaxed">
          Men Qashqadaryo viloyati Dehqonobod tumanida 2008-yilda tug'ilganman.
        </p>
        <p className="text-lg leading-relaxed">
          Hozir 2024-2025-yillarda Toshkent shahri, Najot Ta'limning Chilonzor
          filialida dasturlashning front-end sohasini o'rganyapman
        </p>
      </div>
    </div>
  );
}

export default Batafsil;
