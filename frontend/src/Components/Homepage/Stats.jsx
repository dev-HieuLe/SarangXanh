import { Users, CheckCircle, Award, Star } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      value: "100+",
      label: "Team Member",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      value: "960+",
      label: "Complete Works",
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      value: "38",
      label: "Awards Winning",
    },
    {
      icon: <Star className="w-8 h-8 text-white" />,
      value: "4.7",
      label: "Avg. Ratings",
    },
  ];

  return (
    <section className="relative py-16 px-6 md:px-20 bg-[url('/bg.jpg')] bg-cover bg-center text-white">
       <div className="absolute inset-0 bg-[#042f2e]/30 backdrop-blur-sm z-0" />
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center relative z-10">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-2 transform transition-transform duration-300 hover:-translate-y-2">
            <div className="w-18 h-18 rounded-full bg-white/10 flex items-center justify-center shadow-lg backdrop-blur-sm">
              {stat.icon}
            </div>
            <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
            <div className="text-xs md:xl">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
