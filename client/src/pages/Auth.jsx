import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Auth() {
  const [tab, setTab] = useState("login");
  const [form, setForm] = useState({ email: "", password: "", confirm: "" });
  const [error, setError] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.email || !form.password || (tab === "signup" && !form.confirm)) {
      setError("Please fill all fields.");
      return;
    }
    if (tab === "signup" && form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    // Mock: show success or redirect
    alert(tab === "login" ? "Logged in!" : "Signed up!");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-50 to-indigo-100 px-4 py-12">
      <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent mb-6">{tab === "login" ? "Login" : "Signup"}</h1>
        <div className="flex mb-6 w-full">
          <button
            className={`flex-1 py-2 rounded-l-full font-semibold transition ${tab === "login" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-blue-100"}`}
            onClick={() => setTab("login")}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 rounded-r-full font-semibold transition ${tab === "signup" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-blue-100"}`}
            onClick={() => setTab("signup")}
          >
            Signup
          </button>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
            required
          />
          {tab === "signup" && (
            <input
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              value={form.confirm}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
              required
            />
          )}
          {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-sky-400 text-white rounded-full font-semibold shadow-md hover:brightness-110 transition mb-2"
          >
            {tab === "login" ? "Login" : "Signup"}
          </button>
        </form>
        <div className="mt-4 text-gray-500 text-sm">
          {tab === "login" ? (
            <>Don't have an account? <button className="text-blue-600 hover:underline" onClick={() => setTab("signup")}>Signup</button></>
          ) : (
            <>Already have an account? <button className="text-blue-600 hover:underline" onClick={() => setTab("login")}>Login</button></>
          )}
        </div>
      </div>
    </main>
  );
} 