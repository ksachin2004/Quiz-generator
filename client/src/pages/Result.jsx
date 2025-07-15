import { motion } from "framer-motion";

export default function Result({ score, questions, selectedOptions, onRetake }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 w-full max-w-3xl md:w-4/5 lg:w-2/3 mx-auto flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Quiz Results</h2>
      <div className="mb-8 text-center">
        <span className="text-2xl font-bold text-[#3b82f6]">Score: {score} / {questions.length}</span>
      </div>
      <div className="w-full flex flex-col gap-6 mb-8">
        {questions.map((q, i) => {
          const isCorrect = selectedOptions[i] === q.answer;
          return (
            <div
              key={i}
              className={`rounded-xl p-4 border-2 ${
                isCorrect
                  ? "border-[#3b82f6] bg-[#eaf1ff]"
                  : "border-red-400 bg-red-50"
              }`}
            >
              <div className="font-semibold text-gray-800 mb-2">
                Q{i + 1}: {q.question}
              </div>
              <div className="flex flex-col gap-1 ml-2">
                {q.options.map((opt, idx) => {
                  const isSelected = selectedOptions[i] === idx;
                  const isAnswer = q.answer === idx;
                  return (
                    <div
                      key={idx}
                      className={`px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-2 ${
                        isAnswer
                          ? "bg-[#3b82f6] text-white"
                          : isSelected
                          ? isCorrect
                            ? "bg-[#60a5fa] text-white"
                            : "bg-red-400/80 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {isAnswer && <span className="font-bold">✔</span>}
                      {isSelected && !isAnswer && <span className="font-bold">✗</span>}
                      {opt}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={onRetake}
        className="mt-2 w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold text-lg shadow-lg hover:brightness-110"
      >
        Retake Quiz
      </motion.button>
    </motion.div>
  );
}
