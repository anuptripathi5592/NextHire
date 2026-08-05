export default function Features() {
  const features = [
    {
      title: "Resume Builder",
      description: "Create professional ATS-friendly resumes in minutes.",
      icon: "📄",
    },
    {
      title: "ATS Checker",
      description: "Analyze your resume and improve your ATS score.",
      icon: "📊",
    },
    {
      title: "Job Portal",
      description: "Discover internships and jobs from top companies.",
      icon: "💼",
    },
    {
      title: "AI Interview",
      description: "Practice interviews with AI and boost your confidence.",
      icon: "🤖",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose NextHire?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <div className="text-5xl">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-3">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}