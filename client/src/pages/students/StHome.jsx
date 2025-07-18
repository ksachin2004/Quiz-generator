import React from "react";
import { useNavigate } from "react-router-dom";

const subjectInfo = [
  {
    name: "Operating Systems (OS)",
    desc: "OS is the backbone of computer science, managing hardware and software resources. Understanding OS concepts is crucial for system design, troubleshooting, and interviews.",
    route: "/students/os",
  },
  {
    name: "Database Management Systems (DBMS)",
    desc: "DBMS knowledge is essential for handling data, designing schemas, and writing efficient queries. It is a core topic in technical interviews and real-world applications.",
    route: "/students/dbms",
  },
  {
    name: "Computer Networks (CN)",
    desc: "CN forms the basis of communication between systems. Grasping networking concepts helps in understanding protocols, security, and distributed systems—key for placements.",
    route: "/students/cn",
  },
  {
    name: "Object Oriented Programming (OOPS)",
    desc: "OOPS is fundamental for writing scalable, maintainable code. Mastery of OOPS principles is expected in coding rounds and system design interviews.",
    route: "/students/oops",
  },
];

export default function StHome() {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-700">Why These Subjects Matter for Placements</h2>
      <p className="mb-8 text-gray-700 text-center max-w-2xl mx-auto">
        Mastering OS, DBMS, CN, and OOPS is vital for cracking technical interviews and excelling in placements. These subjects form the core of computer science fundamentals, frequently asked in interviews, and are essential for problem-solving and system design.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjectInfo.map((subj) => (
          <div
            key={subj.name}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition cursor-pointer border border-transparent hover:border-blue-400"
            onClick={() => navigate(subj.route)}
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{subj.name}</h3>
            <p className="text-gray-600 mb-4">{subj.desc}</p>
            <button className="mt-auto self-end px-4 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition">Explore</button>
          </div>
        ))}
      </div>
    </div>
  );
}
