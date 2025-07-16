import React from "react";

const strategies = [
  { icon: "📚", title: "Master Concepts", desc: "Focus on understanding core principles in OS, DBMS, CN, and OOPs." },
  { icon: "📝", title: "Practice MCQs", desc: "Solve topic-wise MCQs and previous year questions regularly." },
  { icon: "🗂️", title: "Make Notes", desc: "Summarize each topic in your own words for quick revision." },
  { icon: "⏰", title: "Time Management", desc: "Allocate fixed time slots for each subject and stick to your plan." },
  { icon: "🤝", title: "Group Study", desc: "Discuss tricky concepts with friends to gain new perspectives." },
  { icon: "🔄", title: "Revise Often", desc: "Regularly revise to keep concepts fresh before exams/interviews." },
];

export default function Strategy() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-50 to-indigo-100 px-4 py-12 animate-fade-in">
      <div className="w-full max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Placement & Exam Preparation Strategy</h1>
        <h2 className="text-xl md:text-2xl text-blue-700 font-semibold mb-6">Effective Roadmaps for OS, DBMS, CN, OOPs</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {strategies.map((s, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition animate-fade-in" style={{ animationDelay: `${100 * idx}ms` }}>
            <div className="text-4xl mb-3">{s.icon}</div>
            <h3 className="text-lg font-bold mb-2">{s.title}</h3>
            <p className="text-gray-600 text-center">{s.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
} 