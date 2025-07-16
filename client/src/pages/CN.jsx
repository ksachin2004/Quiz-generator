import React from 'react';
import { Link } from 'react-router-dom';



const CN = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 px-4 pt-10 pb-12">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        {/* Subject Title */}
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Computer Networks (CN)</h1>

        {/* Subject Flow */}
        <section className="mb-16">

            <h2 className="text-2xl font-semibold text-indigo-600 mb-4 ">📘 Subject Flow — Database Management System</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl ml-0">
    {[
      "Introduction to Networks",
      "OSI & TCP/IP Models",
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
      "Application Layer",
      "Network Security",
    ].map((topic, index) => (
      <div
        key={index}
        className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md border border-indigo-100 hover:shadow-xl transition duration-300"
      >
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-700 font-semibold">
          {index + 1}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-800">{topic}</h3>
        </div>
      </div>
    ))}
  </div>
</section>








        {/* Important Topics */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">⭐ Important Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm shadow">OSI vs TCP/IP</span>
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm shadow">IP Addressing</span>
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm shadow">Subnetting</span>
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm shadow">Routing Algorithms</span>
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm shadow">TCP vs UDP</span>
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm shadow">Network Security</span>
          </div>
        </section>

        {/* Topic Sections */}
        <section className="space-y-12">
          {[
            "Introduction to Networks",
            "OSI & TCP/IP Models",
            "Physical Layer",
            "Data Link Layer",
            "Network Layer",
            "Transport Layer",
            "Application Layer",
            "Network Security",
          ].map((topic, index) => (
            <div key={index} id={topic.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")} className="bg-slate-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{topic}</h3>
              <p className="text-gray-600 italic">[Insert content here later]</p>
            </div>
          ))}
        </section>

        {/* Take Test Button */}
        <div className="mt-16 text-center">
          <Link
            to="/quiz"
            className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg font-semibold px-8 py-3 rounded-full shadow hover:scale-105 transition"
          >
            Take CN Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CN;
