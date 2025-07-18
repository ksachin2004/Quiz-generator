import React from "react";
import { Link } from "react-router-dom";

// Mock login state (replace with real auth logic later)
const isLoggedIn = false;

export default function StudyMaterial() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 px-4 pt-28 pb-12">
      <div className="w-full max-w-3xl mx-auto text-center mb-10 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight drop-shadow">
          Premium Study Material for OS, DBMS, CN & OOPs
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Curated resources to help you master core CS subjects for exams and placements.
        </p>

        {!isLoggedIn && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mt-6 border border-blue-100 transition hover:shadow-2xl hover:-translate-y-1 duration-300 ease-in-out">
            <p className="mb-5 text-lg text-gray-700">
              🔒 Please log in to unlock all the study materials and start learning!
            </p>
            <Link
              to="/auth"
              className="inline-block px-6 py-3 bg-indigo-600 text-white text-lg rounded-full shadow-md hover:bg-indigo-700 transition font-semibold"
            >
              Login / Signup
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}


/*

const materials = [
  { title: "Operating Systems", desc: "Best notes, MCQs, and resources for OS.", link: "/os" },
  { title: "DBMS", desc: "Top DBMS study guides and practice sets.", link: "/dbms" },
  { title: "Computer Networks", desc: "CN notes, quizzes, and cheat sheets.", link: "/cn" },
  { title: "OOPs", desc: "OOPs concepts, interview Qs, and more.", link: "/oops" },
];


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {materials.map((mat, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start hover:shadow-xl transition">
            <h2 className="text-xl font-bold mb-2 text-blue-700">{mat.title}</h2>
            <p className="text-gray-600 mb-4">{mat.desc}</p>
            <a href={mat.link} className="text-blue-600 font-medium hover:underline">Preview</a>
          </div>
        ))}
      </div>

*/