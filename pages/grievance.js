import GrievanceForm from "@/components/GrievanceForm";

export default function GrievancePage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
          Raise Your Voice
        </h1>
        <p className="text-gray-600">
          Share your grievance regarding UCIL’s operations. All entries are recorded anonymously and used only for awareness and advocacy.
        </p>
      </div>
      <GrievanceForm />
    </div>
  );
}
