export default function QuizSetup({ subject, setSubject, numQuestions, setNumQuestions, onStart }) {
  const subjects = ["OS", "DBMS", "CN", "OOPS", "Mixed"];
  
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 w-full max-w-3xl md:w-4/5 lg:w-2/3 mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Start a New Quiz</h2>
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Select Subject</label>
        <div className="flex flex-wrap gap-2">
          {subjects.map((s) => (
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
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Number of Questions</label>
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
        onClick={onStart}
        className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold shadow-lg hover:brightness-110"
      >
        Start Quiz
      </button>
    </div>
  );
}
