import React, { useState } from "react";

const ROADMAP = [
  {
    key: "dsa",
    title: "Master Data Structures & Algorithms",
    goal: "Solve maximum quality problems across categories",
    focus: [
        "Master at least one Programming Language",
        "Mastering problem-solving by building strong intuition, logical thinking, and recognizing core patterns.",
    ],
    depth: [
      "Go beyond brute-force; optimize with time-space analysis",
      "Understand trade-offs; write dry-run tables for recursion/DP",
    ],
    outcome: [
      "Preferably 300+ problems solved",
      "Can solve medium problems within 30 minutes",
    ],
    resources: [
      {
        label: "Neetcode150",
        url: "https://neetcode.io/practice?tab=neetcode150"
      },
      {
        label: "Striver's Blind75",
        url: "https://takeuforward.org/interviews/blind-75-leetcode-problems-detailed-video-solutions"
      },
      {
        label: "Striver's SDE Sheet",
        url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      }
    ],
  },
  {
    key: "cs",
    title: "CS Core Subject Fluency",
    goal: "Be interview-ready in OS, DBMS, CN, OOPs",
    focus: [
      "OS Important Topics : Processes, Scheduling, Threads vs Processes, Deadlocks",
      "DBMS Important Topics: SQL, Indexing, Transactions, Joins, Normal Forms",
      "CN Important Topics: TCP vs UDP, IP/TCP headers, DNS, HTTP",
      "OOP Important Topics: SOLID, Class/Interface design, Design patterns",
    ],
    depth: [
      "Able to explain concepts + draw diagrams + answer corner cases",
    ],
    outcome: [
      "Can teach each topic clearly in 2 mins with diagram",
    ],
    resources: [
      "Study Material section of this Website",
    ],
  },
  {
    key: "projects",
    title: "Build 2–3 Strategic Projects",
    goal: "Have real, problem-solving, scalable apps that reflect system design & development skills",
    focus: [
      "Example Project 1 (LLD + Backend): Auth system, Blog platform, File Sharing App",
      "Example Project 2 (Fullstack): Dashboard App with filters, charts, CRUD, JWT auth",
      "Example Project 3 (Bonus/AI): OpenAI-powered chatbot, ML-powered recommendation, or DevTool",
    ],
    depth: [
      "Use real-world stack: Node.js/Express + MongoDB or PostgreSQL + React",
      "Clean architecture: MVC, error handling, pagination, deployment",
      "Backend should have auth, database modeling, caching, API testing",
    ],
    outcome: [
      "GitHub with clean ReadMe, Deployed demo link",
      "Can explain each feature, schema, and tradeoff",
    ],
    tips: [
      "Record 2-min demo walkthroughs",
      "Use GitHub actions for auto-deploy",
    ],
  },
//   {key: "system",
//     title: "Learn System Design (LLD Focus for Fresher)",
//     goal: "Build strong fundamentals in class-level and component-level design thinking",
//     focus: [
//       "Object-oriented design principles and class structuring",
//       "Designing building blocks: Rate limiter, URL shortener, Feed system",
//     ],
//     depth: [
//       "Solid grasp of class responsibilities, interactions, and flow",
//       "Clarity in design trade-offs, extensibility, and basic scalability",
//     ],
//     tools: ["draw.io", "Whimsical", "PlantUML"],
//     outcome: [
//       "Able to confidently walk through the design of real-world systems (e.g., Instagram Feed)",
//       "Stand out in interviews with clarity on design decisions and code-level thought process",
//     ],
//     resources: [
//       "Arpit Bhayani’s LLD Notes",
//       "Grokking the LLD Interview",
//     ],
//     note: "While HLD gives a bird’s-eye view, LLD reflects your practical grasp on structuring real systems. For freshers, it's not about building massive systems—but showing that you can design components cleanly and logically is a key differentiator."
    
//   },
  {
    key: "resume",
    title: "Resume & LinkedIn Optimization",
    goal: "Be discoverable and impressive to recruiters",
    focus: [
      "Resume: 1-pager, metrics-backed, STAR format, ATS-friendly",
      "LinkedIn: Banner, About, Projects, Skills, Recommendations",
    ],
    depth: [
      "Use action verbs, quantify impact",
      "Mention LeetCode/Codeforces rating if 1900+",
    ],
    outcome: [
      "Upload resume to Google Drive with public view link",
      "GitHub with 4+ pinned repos & live projects",
    ],
    tips: [
      "Get resume reviewed by 2 seniors",
    ],
  },
  {
    key: "mocks",
    title: "Mock Interviews + Behavioral Prep",
    goal: "Be confident under pressure",
    focus: [
      "5+ technical mock interviews (DSA + LLD)",
      "2 HR mocks (STAR stories)",
    ],
    depth: [
      "Record mock interviews, note mistakes",
      "Learn to handle unknown problems with calm",
    ],
    outcome: [
      "100% ready for Amazon/Google final rounds",
    ],
    resources: [
      "Pramp",
      "Interviewing.io",
      "peers",
      "YouTube live mocks",
    ],
  },
];

function FadeInSection({ children, delay = 0 }) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-opacity duration-700 ease-out ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}

export default function FaangRoadmap() {
  const [expanded, setExpanded] = useState({});
  const handleToggle = (key) => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <section className="min-h-screen bg-slate-50 pb-16">
      <div className="max-w-3xl mx-auto px-2 md:px-0 pt-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-sky-400 to-teal-300 bg-clip-text text-transparent mb-2 drop-shadow-sm mt-[50px]">Interview Preparation Roadmap</h1>
          <h2 className="text-lg md:text-xl text-slate-700 font-medium">Your step-by-step playbook to crack top tech interviews</h2>
        </div>
        <div className="relative border-l-2 border-blue-100 pl-4 md:pl-8 space-y-10">
          {ROADMAP.map((block, idx) => (
            <FadeInSection key={block.key} delay={idx * 120}>
              <div className="relative group">
                {/* Timeline dot (empty for minimal look) */}
                <span className="absolute -left-6 top-6 w-4 h-4 flex items-center justify-center bg-white border-2 border-blue-100 rounded-full shadow z-10"></span>
                <div className="bg-indigo-50 border border-blue-100 rounded-2xl shadow-md px-6 py-6 md:py-8 md:px-10 transition group-hover:shadow-lg group-hover:border-indigo-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900 flex items-center gap-2">{block.title}</h3>
                    {block.tools && (
                      <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                        {block.tools.map((tool) => (
                          <span key={tool} className="bg-slate-100 text-sky-700 text-xs font-medium px-2 py-1 rounded shadow-sm border border-blue-100">{tool}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div>
                      <div className="mb-2">
                        <span className="font-bold text-slate-700">Goal:</span> <span className="text-slate-800">{block.goal}</span>
                      </div>
                      <div className="mb-2">
                        <span className="font-bold text-slate-700">Focus:</span>
                        <ul className="list-disc ml-6 text-slate-800">
                          {block.focus.map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                      </div>
                      {block.depth && (
                        <div className="mb-2">
                          <span className="font-bold text-slate-700">How Deep:</span>
                          <ul className="list-disc ml-6 text-slate-800">
                            {block.depth.map((d, i) => <li key={i}>{d}</li>)}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div>
                      {block.outcome && (
                        <div className="mb-2">
                          <span className="font-bold text-slate-700">Outcome:</span>
                          <ul className="list-disc ml-6 text-slate-800">
                            {block.outcome.map((o, i) => <li key={i}>{o}</li>)}
                          </ul>
                        </div>
                      )}
                      {block.tips && (
                        <div className="mb-2">
                          <span className="font-bold text-slate-700">Tips:</span>
                          <ul className="list-disc ml-6 text-slate-800">
                            {block.tips.map((t, i) => <li key={i}>{t}</li>)}
                          </ul>
                        </div>
                      )}
                      {block.resources && (
                        <div className="mb-2">
                          <button
                            className="text-xs px-3 py-1 rounded bg-yellow-50 hover:bg-yellow-100 text-yellow-800 font-semibold border border-yellow-100 shadow-sm transition focus:outline-none mb-1"
                            onClick={() => handleToggle(block.key)}
                          >
                            {expanded[block.key] ? "Hide Resources" : "See Resources"}
                          </button>
                          <div className={`transition-all duration-300 ${expanded[block.key] ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                            <ul className="list-disc ml-6 text-slate-700 text-sm">
                              {Array.isArray(block.resources) && block.key === "dsa"
                                ? block.resources.map((r, i) => (
                                    <li key={i}>
                                      <a
                                        href={r.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sky-700 underline hover:text-sky-900 transition"
                                      >
                                        {r.label}
                                      </a>
                                    </li>
                                  ))
                                : block.resources && block.resources.map((r, i) => <li key={i}>{r}</li>)}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
        <div className="mt-12 text-center text-slate-500 text-sm">
          <span className="inline-block bg-sky-50 border border-blue-100 rounded px-4 py-2 shadow-sm">More sections coming soon: Internship Strategy, Off-campus Plan, and more!</span>
        </div>
      </div>
    </section>
  );
} 