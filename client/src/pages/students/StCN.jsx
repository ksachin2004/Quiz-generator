import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const subjectFlowTopics = [
  '',
  '',
];

const detailedTopics = [
  '',
  '',
];

function SubjectFlowBar({ topics, activeIdx, setActiveIdx }) {
  return (
    <div className="w-full overflow-x-auto pb-4 mb-30 flex justify-center">
      <div className="inline-flex gap-10 min-w-full px-2">
        {topics.map((topic, idx) => (
          <button
            key={topic}
            type="button"
            onClick={() => setActiveIdx(idx)}
            className={`relative flex flex-col items-center group transition-transform duration-300 focus:outline-none ${activeIdx === idx ? 'scale-110 z-10' : 'hover:scale-105'} `}
            style={{ minWidth: 220 }}
          >
            {/* Roadmap line */}
            {idx !== 0 && (
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-8 h-1 bg-gradient-to-r from-indigo-300 to-blue-300 opacity-60 z-0" />
            )}
            {/* Node */}
            <span
              className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all duration-300 border-2 ${
                activeIdx === idx
                  ? 'bg-gradient-to-br from-indigo-500 to-blue-400 border-indigo-400 shadow-indigo-300/60 text-white'
                  : 'bg-white/60 border-slate-200 shadow-slate-200/60 text-indigo-500 group-hover:shadow-indigo-200/80'
              } ${activeIdx === idx ? 'ring-4 ring-indigo-200/40' : ''}`}
              style={{ boxShadow: activeIdx === idx ? '0 0 16px 4px #6366f1aa' : undefined }}
            >
              <span className="font-bold text-lg select-none">{idx + 1}</span>
            </span>
            {/* Label */}
            <span
              className={`mt-2 text-xs font-medium transition-colors duration-300 whitespace-nowrap ${
                activeIdx === idx ? 'text-indigo-700' : 'text-slate-600 group-hover:text-indigo-500'
              }`}
            >
              {topic}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Accordion({ topics, openIdx, setOpenIdx }) {
  return (
    <div className="w-full flex flex-col gap-6">
      {topics.map((topic, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={topic}
            className={`w-full rounded-2xl shadow-xl transition-all duration-300 border border-slate-200 backdrop-blur-md bg-white/40 bg-gradient-to-br from-white/60 to-slate-100/60 hover:shadow-2xl ${
              isOpen ? 'bg-white/70 border-indigo-200 shadow-indigo-200/40' : ''
            }`}
            style={{ boxShadow: isOpen ? '0 8px 32px 0 rgba(99,102,241,0.10)' : undefined }}
          >
            <button
              className={`w-full flex items-center justify-between px-8 py-5 text-left font-semibold text-lg tracking-wide rounded-2xl transition-all duration-300 focus:outline-none ${
                isOpen ? 'text-indigo-700 bg-indigo-50/60' : 'text-slate-800 hover:bg-slate-50/60'
              }`}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              aria-expanded={isOpen}
              aria-controls={`panel-${topic}`}
            >
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 mr-2 shadow-md" />
                {topic}
              </span>
              <svg
                className={`w-6 h-6 ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-500' : 'rotate-0 text-slate-400'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id={`panel-${topic}`}
              className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-none py-6 px-8 opacity-100' : 'max-h-0 py-0 px-8 opacity-0'}`}
              aria-hidden={!isOpen}
            >
              {isOpen && (
                <div className="text-slate-700 text-base animate-fade-in">
                  {topic === '' ? (
                    <div className="space-y-6">
                      
                    </div>
                  ) 
                  
                  : topic === '' ? (
                    <div className="space-y-6">
                      
                    </div>
                  ) 
                  
                  : topic === '' ? (
                    <div className="space-y-6">
                      
                    </div>
                  ) 
                  
                  : topic === '' ? (
                    <div className="space-y-6">
                      
                    </div>
                  ) 
                  
                  : topic === '' ? (
                    <div className="space-y-6">
                      
                    </div>
                  ) 
                  
                  : topic === '' ? (
                    <div className="space-y-6">
                      
                    </div>
                  ) 
                  
                  : topic === '' ? (
                    <div className="space-y-6">
                      
                    </div>
                  ) 
                  
                  : topic === '' ? (
                    <div className="space-y-6">
                      
                    </div>
                  ) 
                  
                  : topic === '' ? (
                    <div className="space-y-6">
                      
                    </div>
                  ) 
                  
                  : topic === '' ? (
                    <div className="space-y-6">

                    </div>
                  ) 
                  
                  
                  : topic === '' ? (
                    <div className="space-y-6">
                      
                    </div>
                  ) 
                  
                  
                  : topic === '' ? (
                    <div className="space-y-6">
                      
                    </div>
                  ) 
                  
                  
                  : topic === '' ? (
                    <div> </div>
                  ) 
                  
                  
                  : topic === '' ? (
                    <div>
                      
                    </div>
                  ) 
                  
                  
                  : topic === 'Relevant Interview Questions' ? (
                    <div className="space-y-8 mt-16 w-full">
                      <div className="flex items-center gap-4 mb-4 justify-center">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg">Most Relevant Interview Questions</h2>
                      </div>
                      <div className="rounded-3xl bg-white/60 backdrop-blur-md shadow-2xl p-2 md:p-4 w-full">
                        <div className="flex flex-col gap-4 w-full">
                          {[
                            "Question 1",
                            "Question 2",
                            "Question 3",
                          ].map((q, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-indigo-100/80 to-blue-100/60 shadow-md hover:shadow-xl transition-shadow duration-300 group w-full">
                              <span className="mt-1 text-indigo-500 group-hover:text-blue-500 font-bold text-lg min-w-[2.5rem]">{i + 1}.</span>
                              <span className="text-base md:text-lg text-slate-800 group-hover:text-indigo-700 font-medium leading-snug w-full">{q}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <span className="block font-medium text-indigo-500 mb-2">{topic}</span>
                      <span className="block">Topic content goes here... </span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

const CN = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeFlowIdx, setActiveFlowIdx] = useState(null);
  const [openAccordionIdx, setOpenAccordionIdx] = useState(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-white to-blue-100 font-sans tracking-wide flex flex-col items-center">
      {/* Top Section: Heading */}
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center pt-10 pb-4 px-4 md:px-12 animate-fade-in">
        <div className="w-full text-center mb-2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2 tracking-tight drop-shadow-lg" style={{ fontFamily: 'Inter, ui-sans-serif' }}>
            Computer Networks (CN)
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-2 font-medium animate-slide-in-up">
            Master the core concepts of CN with a modern, structured flow
          </p>
        </div>
      </div>

      {/* Middle Section: Subject FlowBar */}
      <section className="w-full max-w-screen-2xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-16 pb-10 animate-fade-in">
        <SubjectFlowBar topics={subjectFlowTopics} activeIdx={activeFlowIdx} setActiveIdx={setActiveFlowIdx} />
      </section>

      {/* Bottom Section: Accordion & Test Button */}
      <section className="w-full max-w-screen-2xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-16 pb-10 animate-fade-in">

        <Accordion topics={detailedTopics} openIdx={openAccordionIdx} setOpenIdx={setOpenAccordionIdx} />

        {/* Give Test Button */}
        <div className="w-full flex justify-center pt-12 pb-4">
          <button
            className="w-full max-w-md bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-white text-2xl font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-indigo-400/40 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 hover:scale-105 active:scale-98 mt-4"
            style={{ boxShadow: '0 4px 32px 0 rgba(99,102,241,0.18), 0 1.5px 8px 0 rgba(59,130,246,0.10)' }}
            onClick={() => navigate('/quiz')}
          >
            <span className="inline-block animate-slide-in-up">Give Test</span>
          </button>
        </div>
      </section>

      {/* Animations & Custom Styles */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes glow {
          0% { box-shadow: 0 0 16px 4px #6366f1aa, 0 1.5px 8px 0 #3b82f680; }
          50% { box-shadow: 0 0 32px 8px #6366f1cc, 0 1.5px 8px 0 #3b82f6cc; }
          100% { box-shadow: 0 0 16px 4px #6366f1aa, 0 1.5px 8px 0 #3b82f680; }
        }
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite;
        }
        .neumorphic-glow {
          box-shadow: 0 4px 32px 0 rgba(99,102,241,0.18), 0 1.5px 8px 0 rgba(59,130,246,0.10);
        }
      `}</style>
    </div>
  );
};

export default CN;
