import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Banner from "../Banner";

const defaultImg = "/bg.jpg";

// Teams that should not get a "Leader" badge even on the first member
const NO_LEADER_TEAMS = ["Teachers & Advisors", "Teachers & TA"];

// MemberCard component (animation removed)
const MemberCard = ({
  name,
  school,
  img = defaultImg,
  instagram,
  linkedin,
  isLeader = false,
  role,
}) => {
  return (
    <div className="relative group flex flex-col items-center p-4 rounded-xl shadow-md transition hover:shadow-xl">
      <div className="aspect-[2/3] w-full overflow-hidden rounded-md border border-gray-200 mb-2">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <p className="text-sm font-semibold text-gray-800 flex items-center gap-1 text-center">
        {name}
        {isLeader && (
          <span className="text-xs text-blue-500 font-bold bg-blue-100 px-2 py-0.5 rounded-full">
            Leader
          </span>
        )}
        {role && (
          <span className="text-xs text-green-600 font-bold bg-green-100 px-2 py-0.5 rounded-full">
            {role}
          </span>
        )}
      </p>
      <p
        className={
          school === "Korean Minjok Leadership Academy, Korea"
            ? "text-[10px] text-gray-500"
            : "text-xs text-gray-500"
        }
      >
        {school}
      </p>
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
        <MemberCard
          key={index}
          {...member}
          isLeader={!NO_LEADER_TEAMS.includes(title) && index === 0}
        />
      ))}
    </div>
  </div>
);

// Main component
const Members = () => {
  const teams = {
    "Content Team": [
      {
        name: "Jewoo Shin",
        school: "Valor International Scholars, Korea",
        instagram: "https://instagram.com/jagam0o",
        linkedin: "https://linkedin.com/in/jewoo",
        img: "/Members/Jewoo_Shin.jpeg",
      },
      {
        name: "Yehoon Park",
        school: "Valor International Scholars, Korea",
        instagram: "https://instagram.com/o6o6z3",
        linkedin: "https://linkedin.com/in/yehoon",
        img: "/Members/Yehoon_Park.jpeg",
      },
      {
        name: "Minwoo Shin",
        school: "St. Antony's High School, NY",
        instagram: "https://instagram.com/minwoo",
        linkedin: "https://linkedin.com/in/minwoo",
        img: "/Members/Minwoo_Shin.jpeg",
      },
      {
        name: "Dang Thai Hoa",
        school: "Delta Global School, Vietnam",
        instagram: "https://instagram.com/ahahahahehehehahe",
        linkedin: "https://linkedin.com/in/panda",
        img: "/Members/Hoa_Dang.jpeg",
      },
      {
        name: "Le Uyen Chi",
        school: "Delta Global School, Vietnam",
        instagram: "https://instagram.com/_iun.lychee",
        linkedin: "https://linkedin.com/in/uyench",
        img: "/Members/Uyen_Chi.jpeg",
      },
      {
        name: "Nguyen Lan Chi",
        school: "Delta Global School, Vietnam",
        instagram: "https://instagram.com/lanchi",
        linkedin: "https://linkedin.com/in/lanchi",
        img: "/Members/Lan_Chi.jpeg",
      },
      {
        name: "Nguyen Phuc Hoang",
        school: "Vietnam",
        instagram: "https://instagram.com/hoanggg_.koy",
        linkedin: "https://linkedin.com/in/phuchoang",
        img: "/Members/Hoang_Nguyen.jpeg",
      },
    ],
    "Media Team": [
      {
        name: "Jiwon Chung",
        school: "Mercersburg Academy, PA",
        instagram: "https://instagram.com/jiwon",
        linkedin: "https://linkedin.com/in/jiwon",
        img: "/Members/Jiwon_Chung.jpeg",
      },
      {
        name: "Nguyen Khanh",
        school: "Delta Global School, Vietnam",
        instagram: "https://instagram.com/kerbonthecurb",
        linkedin: "https://linkedin.com/in/khanh",
        img: "/Members/Nguyen_Khanh.jpeg",
      },
      {
        name: "Dao Ha Ngan",
        school: "Delta Global School, Vietnam",
        instagram: "https://instagram.com/ginger_nycuachi",
        linkedin: "https://linkedin.com/in/ginger",
        img: "/Members/Ha_Ngan.jpeg",
      },
    ],
    "Website Team": [
      {
        name: "Minjoo Lee",
        school: "Korean Minjok Leadership Academy, Korea",
        instagram: "https://instagram.com/ww.minjoo",
        linkedin: "https://linkedin.com/in/minjoo",
        img: "/Members/Minjoo_Lee.jpeg",
      },
      {
        name: "Nguyen Lan Chi",
        school: "Delta Global School, Vietnam",
        instagram: "https://instagram.com/lanchi",
        linkedin: "https://linkedin.com/in/lanchi",
        img: "/Members/Lan_Chi.jpeg",
      },
      {
        name: "Le Trung Hieu",
        school: "Delta Global School, Vietnam",
        instagram: "https://instagram.com/ltheiu.css",
        linkedin: "https://linkedin.com/in/hieu",
        img: "/Members/Trung_Hieu.jpeg",
      },
      {
        name: "Nguyen Khanh",
        school: "Delta Global School, Vietnam",
        instagram: "https://instagram.com/kerbonthecurb",
        linkedin: "https://linkedin.com/in/khanh",
        img: "/Members/Nguyen_Khanh.jpeg",
      },
      {
        name: "Dang Chuc An",
        school: "Delta Global School, Vietnam",
        instagram: "https://instagram.com/vuofpage",
        linkedin: "https://linkedin.com/in/chucan",
        img: "/Members/Chuc_An.jpeg",
      },
      {
        name: "Dao Ha Ngan",
        school: "Delta Global School, Vietnam",
        instagram: "https://instagram.com/ginger_nycuachi",
        linkedin: "https://linkedin.com/in/ginger",
        img: "/Members/Ha_Ngan.jpeg",
      },
    ],
    "Marketing Team": [
      {
        name: "Yehoon Park",
        school: "Valor International Scholars, Korea",
        instagram: "https://instagram.com/o6o6z3",
        linkedin: "https://linkedin.com/in/yehoon",
        img: "/Members/Yehoon_Park.jpeg",
      },
      {
        name: "Ha Ngan",
        school: "Delta Global School, Vietnam",
        instagram: "https://instagram.com/ginger_nycuachi",
        linkedin: "https://linkedin.com/in/ginger",
        img: "/Members/Ha_Ngan.jpeg",
      },
      {
        name: "Le Thi Tra My",
        school: "Delta Global School, Vietnam",
        instagram: "https://instagram.com/tmy_j.m",
        linkedin: "https://linkedin.com/in/tramy",
        img: "/Members/My.jpeg",
      },
      {
        name: "Dang Thai Hoa",
        school: "Delta Global School, Vietnam",
        instagram: "https://instagram.com/ahahahahehehehahe",
        linkedin: "https://linkedin.com/in/panda",
        img: "/Members/Hoa_Dang.jpeg",
      },
      {
        name: "Le Trung Hieu",
        school: "Delta Global School, Vietnam",
        instagram: "https://instagram.com/ltheiu.css",
        linkedin: "https://linkedin.com/in/hieu",
        img: "/Members/Trung_Hieu.jpeg",
      },
    ],
    "Teachers & TA": [
      {
        name: "Luong Thien Tai",
        school: "Delta Global School, Vietnam",
        instagram: "https://instagram.com/tai",
        linkedin: "https://linkedin.com/in/tai",
        role: "Teacher",
        img: "/Members/DrTai.jpeg",
      },
      {
        name: "Dao Hai Linh",
        school: "Delta Global School, Vietnam",
        instagram: "https://instagram.com/linh",
        linkedin: "https://linkedin.com/in/linh",
        role: "Teacher",
        img: "/Members/Linh.jpeg",
      },
      {
        name: "Yooseung Noh",
        school: "Boston University, USA",
        instagram: "https://instagram.com/yooseung",
        linkedin: "https://linkedin.com/in/yooseung",
        role: "TA",
        img: "/Members/Yooseung_Noh.jpeg",
      },
    ],
  };

  // Ensure default image on all members (only applied if missing)
  for (const team in teams) {
    teams[team] = teams[team].map((member) => ({
      img: defaultImg,
      ...member,
    }));
  }

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 text-gray-800">
      <Banner
        title="Meet Our Team"
        subtitle="Get to know the passionate members behind SarangXanh’s projects and initiatives."
        buttonText="Explore Members"
        onButtonClick={() =>
          document
            .getElementById("teams")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />

      <div className="max-w-6xl mx-auto px-6 py-20" id="teams">
        {Object.entries(teams).map(([teamName, members], idx) => (
          <TeamSection key={idx} title={teamName} members={members} />
        ))}
      </div>
    </section>
  );
};

export default Members;
