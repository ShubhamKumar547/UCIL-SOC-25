import { useState } from "react";

export default function GrievanceForm() {
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
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-green-50">
        <h2 className="text-2xl font-bold text-green-700 mb-2 text-center">
          ✅ Grievance Submitted!
        </h2>
        <p className="text-gray-600 text-center text-sm">
          We will try to resolve your grievance as soon as possible. Your grievance ID is:
          <span className="text-blue-600 font-semibold"> UCIL-XYZ123</span>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 md:p-10 rounded-xl shadow-xl w-full max-w-xl mx-auto space-y-5 border border-gray-200"
    >
      <input
        type="text"
        name="name"
        required
        placeholder="Full Name"
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="email"
        required
        placeholder="Email or Phone"
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="location"
        required
        placeholder="Location"
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="description"
        required
        placeholder="Describe your grievance..."
        onChange={handleChange}
        className="w-full px-4 py-3 h-32 resize-none border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        name="category"
        required
        onChange={handleChange}
        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Urgency</option>
        <option value="low">Low</option>
        <option value="moderate">Moderate</option>
        <option value="high">High</option>
      </select>
      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Upload Evidence (optional)
        </label>
        <input
          type="file"
          name="evidence"
          onChange={handleChange}
          className="w-full px-2 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg w-full shadow-md transition"
      >
        Submit Grievance
      </button>
    </form>
  );
}
