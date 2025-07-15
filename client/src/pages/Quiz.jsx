import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import questions from "../data/questions";
import QuestionCard from "./QuestionCard";
import Result from "./Result";

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Quiz() {
  const quizSectionRef = useRef(null);
  const [subject, setSubject] = useState("OS");
  const [numQuestions, setNumQuestions] = useState(5);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);

  const handleScrollToQuiz = () => {
    quizSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleStart = () => {
    const pool = subject === "Mixed" ? questions : questions.filter(q => q.subject === subject);
    const shuffled = shuffle(pool).slice(0, numQuestions);
    setQuizQuestions(shuffled);
    setSelectedOptions(Array(shuffled.length).fill(null));
    setIsQuizStarted(true);
    setIsQuizSubmitted(false);
    setScore(0);
    setTimeout(() => {
      quizSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleOptionSelect = (qIdx, optionIdx) => {
    setSelectedOptions(prev => {
      const updated = [...prev];
      updated[qIdx] = optionIdx;
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let sc = 0;
    quizQuestions.forEach((q, i) => {
      if (selectedOptions[i] === q.answer) sc++;
    });
    setScore(sc);
    setIsQuizSubmitted(true);
    setTimeout(() => {
      quizSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleRetake = () => {
    setIsQuizStarted(false);
    setIsQuizSubmitted(false);
    setQuizQuestions([]);
    setSelectedOptions([]);
    setScore(0);
    setTimeout(() => {
      quizSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#eaf1ff] to-white text-gray-800 flex flex-col">
      {/* Welcome/Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 px-4 min-h-[40vh] text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#4D9FFF] to-[#56CCF2] bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to CS Quiz Generator
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Master <span className="font-semibold text-blue-500">OS</span>, <span className="font-semibold text-blue-500">DBMS</span>, <span className="font-semibold text-blue-500">OOPs</span>, <span className="font-semibold text-blue-500">CN</span>, and more through smart quizzes.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleScrollToQuiz}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-[#4D9FFF] to-[#56CCF2] text-white font-bold text-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200"
        >
          Give Test
        </motion.button>
      </section>

      {/* Quiz Section */}
      <section ref={quizSectionRef} className="flex flex-col items-center justify-center flex-1 w-full py-8 px-2">
        <div className="w-full max-w-2xl mx-auto">
          {!isQuizStarted && !isQuizSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/60 p-8 rounded-xl shadow-lg w-full flex flex-col items-center"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Start a Quiz</h2>
              <div className="flex flex-wrap justify-center gap-3 mb-6 w-full">
                {["OS", "DBMS", "CN", "OOPS", "Mixed"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`px-4 py-2 rounded-full font-medium border transition-all duration-200 ${
                      subject === s
                        ? "bg-blue-500 text-white border-blue-500 shadow-md"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
                    }`}
                    onClick={() => setSubject(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="mb-4 w-full">
                <label className="block mb-2 font-medium text-gray-700">
                  Number of Questions
                </label>
                <input
                  type="number"
                  min={5}
                  max={20}
                  value={numQuestions}
                  onChange={e => setNumQuestions(Math.max(5, Math.min(20, Number(e.target.value))))}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                onClick={handleStart}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#4D9FFF] to-[#56CCF2] text-white font-semibold shadow-lg hover:brightness-110 mt-4"
              >
                Start Quiz
              </button>
            </motion.div>
          )}

          {isQuizStarted && !isQuizSubmitted && quizQuestions.length > 0 && (
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center space-y-6">
              <AnimatePresence>
                {quizQuestions.map((q, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="w-full"
                  >
                    <QuestionCard
                      question={q}
                      questionIndex={idx}
                      totalQuestions={quizQuestions.length}
                      selectedOption={selectedOptions[idx]}
                      onOptionSelect={optionIdx => handleOptionSelect(idx, optionIdx)}
                      isSinglePage
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
              <div className="text-center pt-4 w-full">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#4D9FFF] to-[#56CCF2] text-white font-semibold shadow-lg hover:brightness-110 disabled:opacity-50"
                  disabled={selectedOptions.some(opt => opt === null)}
                >
                  Submit Quiz
                </button>
              </div>
            </form>
          )}

          {isQuizSubmitted && (
            <div className="w-full text-center flex flex-col items-center justify-center">
              <Result
                score={score}
                questions={quizQuestions}
                selectedOptions={selectedOptions}
                onRetake={handleRetake}
              />
              <div className="mt-6 text-xl font-semibold">
                You scored {score} / {quizQuestions.length}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
