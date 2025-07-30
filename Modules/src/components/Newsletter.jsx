import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter logic here
    setEmail("");
  };

  return (
    <section className="w-full py-12 px-4 bg-gradient-to-br from-green-50 via-white to-blue-50 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-green-900">
        Subscribe to our Newsletter
      </h2>
      <p className="text-gray-600 text-center mb-6 max-w-xl">
        Get the latest updates, news, and resources delivered straight to your inbox.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter