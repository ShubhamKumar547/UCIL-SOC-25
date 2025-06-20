import { useState } from "react";

export default function GrievancePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    description: "",
    category: "",
    urgency: "",
    evidence: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dummy submission:", formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-bold text-green-400 mb-2 text-center">
          ✅ Grievance Submitted!
        </h2>
        <p className="text-gray-300 text-sm text-center">
          We will try to resolve your grievance as soon as possible. Your grievance ID is:
          <span className="text-blue-400 font-semibold"> UCIL-XYZ123</span>
        </p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('/grievance.jpg')",
      }}
    >
      {/* Overlay for darkness */}
      <div className="min-h-screen w-full px-4 py-20 overflow-y-auto">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-2">
            Raise Your Voice
          </h1>
          <p className="text-gray-300">
            Share your grievance regarding UCIL’s operations.
            All entries are recorded anonymously and used only for awareness and advocacy.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900/80 backdrop-blur-md border border-gray-700 p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-xl mx-auto space-y-5"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="text"
            name="email"
            required
            placeholder="Email or Phone"
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="text"
            name="location"
            required
            placeholder="Location"
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            name="description"
            required
            placeholder="Describe your grievance..."
            onChange={handleChange}
            className="w-full px-4 py-3 h-32 resize-none bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <select
            name="category"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select Category</option>
            <option value="health">Health</option>
            <option value="water">Water</option>
            <option value="displacement">Displacement</option>
            <option value="harassment">Harassment</option>
            <option value="academic">Academic</option>
          </select>
          <select
            name="urgency"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select Urgency</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Upload Evidence (optional)
            </label>
            <input
              type="file"
              name="evidence"
              onChange={handleChange}
              className="w-full px-2 py-2 bg-gray-800 border border-gray-600 rounded-xl text-gray-300"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-xl w-full shadow-lg transition duration-200"
          >
            Submit Grievance
          </button>
        </form>
      </div>
    </div>
  );
}
