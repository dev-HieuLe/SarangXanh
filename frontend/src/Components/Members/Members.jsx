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
      <p
        className={
          school === "Korean Minjok Leadership Academy, Korea"
            ? "text-[10px] text-gray-500"
            : "text-xs text-gray-500"
        }
      >
        {school}
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
      { name: "Yehoon Park", school: "Valor International Scholars, Korea", instagram: "https://instagram.com/o6o6z3", linkedin: "https://linkedin.com/in/yehoon" },
      { name: "Jewoo Shin", school: "Valor International Scholars, Korea", instagram: "https://instagram.com/jagam0o", linkedin: "https://linkedin.com/in/jewoo" },
      { name: "Minwoo Shin", school: "St. Antony's High School, NY", instagram: "https://instagram.com/minwoo", linkedin: "https://linkedin.com/in/minwoo" },
      { name: "Dang Thai Hoa", school: "Delta Global School, Vietnam", instagram: "https://instagram.com/ahahahahehehehahe", linkedin: "https://linkedin.com/in/panda" },
      { name: "Le Uyen Chi", school: "Delta Global School, Vietnam", instagram: "https://instagram.com/_iun.lychee", linkedin: "https://linkedin.com/in/uyench" },
      { name: "Nguyen Lan Chi", school: "Delta Global School, Vietnam", instagram: "https://instagram.com/lanchi", linkedin: "https://linkedin.com/in/lanchi" },
      { name: "Dao Hai Linh", school: "Delta Global School, Vietnam", instagram: "https://instagram.com/hailinh", linkedin: "https://linkedin.com/in/hailinh" },
      { name: "Nguyen Phuc Hoang", school: "Vietnam", instagram: "https://instagram.com/hoanggg_.koy", linkedin: "https://linkedin.com/in/phuchoang" },
    ],
    "Media Team": [
      { name: "Jiwon Chung", school: "Mercersburg Academy, PA", instagram: "https://instagram.com/jiwon", linkedin: "https://linkedin.com/in/jiwon" },
      { name: "Nguyen Khanh", school: "Delta Global School, Vietnam", instagram: "https://instagram.com/kerbonthecurb", linkedin: "https://linkedin.com/in/khanh" },
      { name: "Dao Ha Ngan", school: "Delta Global School, Vietnam", instagram: "https://instagram.com/ginger_nycuachi", linkedin: "https://linkedin.com/in/ginger" },
    ],
    "Website Team": [
      { name: "Minjoo Lee", school: "Korean Minjok Leadership Academy, Korea", instagram: "https://instagram.com/ww.minjoo", linkedin: "https://linkedin.com/in/minjoo" },
      { name: "Nguyen Lan Chi", school: "Delta Global School, Vietnam", instagram: "https://instagram.com/lanchi", linkedin: "https://linkedin.com/in/lanchi" },
      { name: "Le Trung Hieu", school: "Delta Global School, Vietnam", instagram: "https://instagram.com/ltheiu.css", linkedin: "https://linkedin.com/in/hieu" },
      { name: "Nguyen Khanh", school: "Delta Global School, Vietnam", instagram: "https://instagram.com/kerbonthecurb", linkedin: "https://linkedin.com/in/khanh" },
      { name: "Dang Chuc An", school: "Delta Global School, Vietnam", instagram: "https://instagram.com/vuofpage", linkedin: "https://linkedin.com/in/chucan" },
      { name: "Dao Ha Ngan", school: "Delta Global School, Vietnam", instagram: "https://instagram.com/ginger_nycuachi", linkedin: "https://linkedin.com/in/ginger" },
    ],
    "Marketing Team": [
      { name: "Yehoon Park", school: "Valor International Scholars, Korea", instagram: "https://instagram.com/o6o6z3", linkedin: "https://linkedin.com/in/yehoon" },
      { name: "Ha Ngan", school: "Delta Global School, Vietnam", instagram: "https://instagram.com/ginger_nycuachi", linkedin: "https://linkedin.com/in/ginger" },
      { name: "Le Thi Tra My", school: "Delta Global School, Vietnam", instagram: "https://instagram.com/tmy_j.m", linkedin: "https://linkedin.com/in/tramy" },
      { name: "Dang Thai Hoa", school: "Delta Global School, Vietnam", instagram: "https://instagram.com/ahahahahehehehahe", linkedin: "https://linkedin.com/in/panda" },
      { name: "Le Trung Hieu", school: "Delta Global School, Vietnam", instagram: "https://instagram.com/ltheiu.css", linkedin: "https://linkedin.com/in/hieu" },
    ],
  };

  // Add default img to all
  for (const team in teams) {
    teams[team] = teams[team].map((member) => ({
      img: defaultImg,
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
