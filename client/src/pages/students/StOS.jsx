import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const OS = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="text-4xl font-bold text-center text-blue-700">
        {/* Subject Title */}
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Operating System (OS)</h1>
        </div>

        {/* Subject Flow */}
        <section className="mb-16">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4 ">📘 Subject Flow — Operating Systems</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl ml-0">
    {[
      "Introduction to OS",
      "Process Management",
      "CPU Scheduling",
      "Memory Management",
      "Virtual Memory",
      "File Systems",
      "I/O Management",
      "Deadlocks",
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

        {/* Preview for unauthenticated users */}
        {!user && (
          <div className="mt-10 text-center bg-white/80 rounded-xl shadow p-8 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">Sign in to unlock full OS study material!</h2>
            <p className="text-gray-600 mb-4">You can preview the subject flow and important topics. To access detailed notes and quizzes, please <Link to='/auth' className="text-blue-600 underline font-medium">login or signup</Link>.</p>
          </div>
        )}

        {/* Full content for authenticated users */}
        {user && <>
        {/* Important Topics */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4 ">⭐ Important Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm shadow">CPU Scheduling</span>
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm shadow">Deadlocks</span>
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm shadow">Paging & Segmentation</span>
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm shadow">Process Synchronization</span>
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm shadow">File System Implementation</span>
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm shadow">Memory Management</span>
          </div>
        </section>

        {/* Topic Sections */}
        <section className="space-y-12">
          {[
            "Introduction to OS",
            "Process Management",
            "CPU Scheduling",
            "Memory Management",
            "Virtual Memory",
            "File Systems",
            "I/O Management",
            "Deadlocks",
          ].map((topic, index) => (
            <div key={index} id={topic.toLowerCase().replace(/\s+/g, "-")} className="bg-slate-50 p-6 rounded-xl shadow-md">
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
            Take OS Quiz
          </Link>
        </div>
        </>}
      </div>
    </>
  );
};

export default OS;
