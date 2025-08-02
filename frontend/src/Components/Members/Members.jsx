import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";


const defaultImg = "/bg.jpg";

// MemberCard component
const MemberCard = ({ name, school, img = defaultImg, instagram, linkedin, isLeader = false }) => {
  return (
    <motion.div
      className="relative group flex flex-col items-center p-4 rounded-xl shadow-md transition hover:shadow-xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        src={img}
        alt={name}
        className="w-full h-48 object-cover mb-2 rounded-md border border-gray-200"
      />
      <p className="text-sm font-semibold text-gray-800 flex items-center gap-1">
        {name}
        {isLeader && (
          <span className="text-xs text-blue-500 font-bold bg-blue-100 px-2 py-0.5 rounded-full">
            Leader
          </span>
        )}
      </p>

      {/* School name */}
      <p className="text-xs text-gray-500">{school}</p>

      {/* Hover overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-6 group-hover:h-20 bg-[#042f2e]/30 backdrop-blur-sm rounded-xl transition-all duration-500 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100">
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-xl hover:text-gray-300" />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-xl hover:text-gray-300" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

// TeamSection component
const TeamSection = ({ title, members }) => (
  <div className="mb-16 text-left">
    <h3 className="text-2xl font-extrabold text-blue-700 mb-6">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {members.map((member, index) => (
        <MemberCard key={index} {...member} isLeader={index === 0} />
      ))}
    </div>
  </div>
);

// Main component
const Members = () => {
  const teams = {
    "Content Team": [
      { name: "Yehoon", school: "Valor International Scholars, Korea" },
      { name: "Jewoo", school: "Valor International Scholars, Korea" },
      { name: "Minwoo", school: "St, Antony's High School, NY" },
      { name: "Thai Hoa (Panda)", school: "Delta Global School, Vietnam" },
      { name: "Uyen Chi", school: "Delta Global School, Vietnam" },
      { name: "Lan Chi", school: "Delta Global School, Vietnam" },
      { name: "Hai Linh", school: "Delta Global School, Vietnam" },
      { name: "Phuc Hoang", school: "Vietnam" },
    ],
    "Media Team": [
      { name: "Jiwon", school: "Mercersburg Academy, PA" },
      { name: "Khanh", school: "Delta Global School, Vietnam" },
      { name: "Ha Ngan (Ginger)", school: "Delta Global School, Vietnam" },
    ],
    "Website Team": [
      { name: "Minjoo", school: "Korean Minjok Leadership Academy, Korea" },
      { name: "Lan Chi", school: "Delta Global School, Vietnam" },
      { name: "Hieu", school: "Delta Global School, Vietnam" },
      { name: "Khanh", school: "Delta Global School, Vietnam" },
    ],
    "Marketing Team": [
      { name: "Yehoon", school: "Valor International Scholars, Korea" },
      { name: "Ha Ngan (Ginger)", school: "Delta Global School, Vietnam" },
      { name: "Tra My", school: "Delta Global School, Vietnam" },
      { name: "Thai Hoa (Panda)", school: "Delta Global School, Vietnam" },
      { name: "Hieu", school: "Delta Global School, Vietnam" },
      { name: "Nam", school: "Delta Global School, Vietnam" },
    ],
  };

  // Add default img + links to all
  for (const team in teams) {
    teams[team] = teams[team].map((member) => ({
      img: defaultImg,
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      ...member,
    }));
  }

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-16 text-gray-800 text-center">
          Meet Our <span className="text-blue-500">Team</span>
        </h2>
        {Object.entries(teams).map(([teamName, members], idx) => (
          <TeamSection key={idx} title={teamName} members={members} />
        ))}
      </div>
    </section>
  );
};

export default Members;
