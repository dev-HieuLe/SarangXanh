import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

// Default image
const defaultImg =
  "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg";

// MemberCard component
const MemberCard = ({ name, img = defaultImg, instagram, linkedin, isLeader = false }) => {
  return (
    <div
      className={`relative group flex flex-col items-center p-4 rounded-xl shadow-md transition hover:shadow-xl`}
    >
      <img
        src={img}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-2 border-2 border-gray-200"
      />
      <p className="text-sm font-semibold text-gray-800 flex items-center gap-1">
        {name}
        {isLeader && (
          <span className="text-xs text-blue-500 font-bold bg-blue-100 px-2 py-0.5 rounded-full">
            Leader
          </span>
        )}
      </p>

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
    </div>
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
      { name: "Yehoon", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
      { name: "Jewoo", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
      { name: "Minwoo", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
      { name: "Hoa Dang (Panda)", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
      { name: "Uyen Chi", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
      { name: "Lan Chi", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
      { name: "Linh Chi", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
      { name: "Hoang", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
    ],
    "Media Team": [
      { name: "Jiwon", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
      { name: "Nguyen Khanh (Khanh)", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
      { name: "Ha Ngan (Ginger)", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
    ],
    "Website Team": [
      { name: "Minjoo", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
      { name: "Lan Chi", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
      { name: "Hieu", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
      { name: "Nguyen Khanh (Khanh)", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
    ],
    "Marketing Team": [
      { name: "Yehoon", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
      { name: "Ha Ngan (Ginger)", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
      { name: "Tra My", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
      { name: "Panda", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
      { name: "Hieu", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
      { name: "Nam", instagram: "https://instagram.com", linkedin: "https://www.linkedin.com" },
    ],
  };

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