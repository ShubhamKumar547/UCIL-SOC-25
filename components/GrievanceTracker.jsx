// components/GrievanceStatusChecker.js
import { useState } from "react";
import env_en from "../public/locales/en/grievances.json";
import env_hi from "../public/locales/hi/grievances.json";
import comp_status from "../data/demo_grievance.json";
import { useRouter } from "next/router";

const GrievanceStatusChecker = () => {
  const { locale } = useRouter();
  const env_translation = { env_en, env_hi };
  const lang = locale === "hi" ? "env_hi" : "env_en";
  const t = env_translation[lang] || env_translation.en;
  const complaint_status = comp_status;
  // console.log(complaint_status);

  const data = t["grievanceStatusChecker"];
  const grievanceData = complaint_status["grievances_status"];
  // console.log(t);
  // console.log(data);
  // console.log(grievanceData);

  const [grievanceId, setGrievanceId] = useState("");
  const [currentGrievance, setCurrentGrievance] = useState(null);
  const [error, setError] = useState("");

  const checkStatus = () => {
    setError("");
    const foundGrievance = grievanceData.find(
      (g) => g.id.toLowerCase() === grievanceId.toLowerCase()
    );

    if (foundGrievance) {
      setCurrentGrievance(foundGrievance);
    } else {
      setError(data.errorNotFound);
      setCurrentGrievance(null);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200";
      case "in-progress":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200";
      case "resolved":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl mx-auto box-border">
      <h2 className="text-xl font-bold text-amber-500 dark:text-amber-400 mb-6">
        {data.title}
      </h2>

      <div className="mb-6">
        <label
          htmlFor="grievanceId"
          className="block text-gray-700 dark:text-gray-300 mb-2"
        >
          {data.inputLabel}
        </label>
        <div className="flex gap-2">
          <input
            id="grievanceId"
            type="text"
            value={grievanceId}
            onChange={(e) => setGrievanceId(e.target.value)}
            placeholder={data.placeholder}
            className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={checkStatus}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            {data.checkButton}
          </button>
        </div>
        {error && (
          <p className="text-red-500 dark:text-red-400 mt-2">{error}</p>
        )}
      </div>

      {currentGrievance && (
        <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300">
                {data.grievanceIdLabel}
              </h3>
              <p className="text-gray-900 dark:text-white">
                {currentGrievance.id}
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300">
                {data.dateLabel}
              </h3>
              <p className="text-gray-900 dark:text-white">
                {currentGrievance.date}
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300">
                {data.categoryLabel}
              </h3>
              <p className="text-gray-900 dark:text-white">
                {currentGrievance.category}
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300">
                {data.statusLabel}
              </h3>
              <span
                className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                  currentGrievance.status
                )}`}
              >
                {data.statusLabels[currentGrievance.status]}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-medium text-gray-700 dark:text-gray-300">
              {data.descriptionLabel}
            </h3>
            <p className="text-gray-900 break-words dark:text-white">
              {currentGrievance.description}
            </p>
          </div>

          {currentGrievance.resolution && (
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
              <h3 className="font-medium text-gray-700 dark:text-gray-300">
                {data.resolutionLabel}
              </h3>
              <p className="text-gray-900 dark:text-white">
                {currentGrievance.resolution}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GrievanceStatusChecker;
