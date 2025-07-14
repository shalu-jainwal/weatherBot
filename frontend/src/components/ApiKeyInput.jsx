import React from "react";

export default function ApiKeyInput({
  weatherApiKey,
  setWeatherApiKey,
  updateApiKey,
}) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-medium text-gray-700 mb-4">Bot Settings</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          className="flex-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          placeholder="Enter OpenWeatherMap API Key"
          value={weatherApiKey}
          onChange={(e) => setWeatherApiKey(e.target.value)}
        />
        <button
          onClick={updateApiKey}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition"
        >
          Save API Key
        </button>
      </div>
    </section>
  );
}
