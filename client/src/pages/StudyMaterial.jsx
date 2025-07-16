import React from "react";
import { Link } from "react-router-dom";

// Mock login state (replace with real auth logic later)
const isLoggedIn = false;

const materials = [
  { title: "Operating Systems", desc: "Best notes, MCQs, and resources for OS.", link: "/os" },
  { title: "DBMS", desc: "Top DBMS study guides and practice sets.", link: "/dbms" },
  { title: "Computer Networks", desc: "CN notes, quizzes, and cheat sheets.", link: "/cn" },
  { title: "OOPs", desc: "OOPs concepts, interview Qs, and more.", link: "/oops" },
];

export default function StudyMaterial() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-50 to-indigo-100 px-4 pt-28 pb-12">
      <div className="w-full max-w-2xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Access Top-Quality Study Material for OS, DBMS, CN, OOPs</h1>
        <p className="text-gray-600 mb-6">Curated resources to help you ace your exams and placements.</p>
        {!isLoggedIn && (
          <div className="bg-white rounded-xl shadow p-6 mb-6 flex flex-col items-center">
            <p className="mb-4 text-lg text-gray-700">Please login to access all study materials.</p>
            <Link to="/auth" className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition font-semibold">Login / Signup</Link>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {materials.map((mat, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start hover:shadow-xl transition">
            <h2 className="text-xl font-bold mb-2 text-blue-700">{mat.title}</h2>
            <p className="text-gray-600 mb-4">{mat.desc}</p>
            <a href={mat.link} className="text-blue-600 font-medium hover:underline">Preview</a>
          </div>
        ))}
      </div>
    </main>
  );
} 