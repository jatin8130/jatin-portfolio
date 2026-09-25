import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ArrowRight } from "lucide-react";

const tabs = ["Education", "Professional Skills", "Experience", "Interview"];

const educationLeft = [
  {
    year: "2020",
    title: "10th Standard",
    org: "CBSE Board",
    badge: "Completed",
    desc: "Completed secondary education in 2020 with a strong foundation before pursuing Computer Science.",
  },
  {
    year: "2020 - 2024",
    title: "Diploma in Computer Science",
    org: "Board of Technical Education",
    badge: "Completed",
    desc: "Studied Data Structures, DBMS, Networking, Web Development and Software Engineering while building practical programming projects.",
  },
];

const educationRight = [
  {
    year: "Sep 2024 - Nov 2026",
    title: "Full Stack Developer",
    org: "Techsunset (Remote)",
    badge: "2Y 2M",
    desc: "Worked remotely as a Full Stack Developer building production-ready web applications using modern JavaScript technologies.",
  },
];

const designSkills = [
  { name: "UI Design", value: 78 },
  { name: "Responsive Design", value: 75 },
  { name: "Tailwind CSS", value: 76 },
  { name: "Component Design", value: 72 },
];

const devSkills = [
  { name: "React.js", value: 78 },
  { name: "Next.js", value: 72 },
  { name: "Node.js", value: 76 },
  { name: "Express.js", value: 74 },
  { name: "MongoDB", value: 73 },
  { name: "Redis", value: 66 },
  { name: "AWS (6 Months)", value: 60 },
  { name: "Git", value: 72 },
];

const experienceLeft = [
  {
    year: "09 Sep 2024 - 12 Nov 2026",
    title: "Full Stack Developer",
    org: "Techsunset (Remote)",
    badge: "2Y 2M",
    desc: "Built responsive user interfaces using React and Next.js, developed REST APIs with Node.js and Express, managed MongoDB databases, integrated Redis where required, and worked with AWS services including EC2, S3 and Lambda.",
  },
];

const experienceRight = [
  {
    year: "Company Projects",
    title: "Service-Based Projects",
    org: "Techsunset",
    badge: "Production",
    desc: "Worked on E-commerce, Real Estate and Healthcare web applications while collaborating with team members to deliver production-ready solutions.",
  },
];

const interviewLeft = [
  {
    year: "Latest Project",
    title: "ProFlowers Booking Platform",
    org: "Team Project",
    badge: "Production",
    desc: "Contributed to the admin panel UI and developed REST APIs for a flower booking platform while working as part of a development team.",
  },
];

const interviewRight = [
  {
    year: "Professional Growth",
    title: "Problem Solving",
    org: "Node.js Development",
    badge: "Experience",
    desc: "Resolved dependency and deprecation-related issues during backend development while maintaining application functionality and improving project stability.",
  },
];

const Progress = ({ name, value }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(value), 150);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="mb-7">
      <div className="flex justify-between mb-3 uppercase tracking-[2px] text-xs md:text-sm text-gray-700">
        <span>{name}</span>
        <span>{value}%</span>
      </div>

      <div className="h-3 rounded-full bg-gray-300 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-pink-300 to-pink-600 transition-all duration-1000"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

Progress.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

const TimelineCard = ({ item }) => (
  <div className="relative pl-8 md:pl-12">
    {/* Timeline Line */}
    <div className="absolute left-0 top-0 h-full border-l-4 border-gray-300"></div>

    {/* Timeline Dot */}
    <div className="absolute left-[-10px] top-10 w-5 h-5 rounded-full border-[5px] border-gray-300 bg-[#ECF0F3]"></div>

    {/* Card */}
    <div
      className="group rounded-[22px] p-5 md:p-8
      bg-[#ECF0F3]
      shadow-[8px_8px_20px_#c8d0e7,-8px_-8px_20px_#ffffff]
      hover:-translate-y-2
      transition-all duration-500"
      style={{
        background: "linear-gradient(145deg, #ECF0F3 0%, #ECF0F3 100%)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "linear-gradient(145deg, #7B6FE8 0%, #9A61C0 35%, #C96F9D 70%, #F36A7A 100%)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background =
          "linear-gradient(145deg, #ECF0F3 0%, #ECF0F3 100%)";
      }}
    >
      {/* Year */}
      <p className="uppercase tracking-[3px] text-pink-500 text-xs md:text-sm mb-3 group-hover:text-pink-100 transition-colors duration-500">
        {item.year}
      </p>

      <div className="flex justify-between items-start gap-3">
        <div>
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-500">
            {item.title}
          </h3>

          {/* Organization */}
          <p className="text-gray-600 mt-1 text-sm md:text-base group-hover:text-white transition-colors duration-500">
            {item.org}
          </p>
        </div>

        {/* Badge */}
        <span
          className="px-3 py-1 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap
          bg-[#ECF0F3] text-pink-500
          shadow-[4px_4px_10px_#c8d0e7,-4px_-4px_10px_#ffffff]
          group-hover:bg-white group-hover:text-[#DD2A7B]
          transition-all duration-500"
        >
          {item.badge}
        </span>
      </div>

      {/* Divider */}
      <hr className="my-5 border-gray-300 group-hover:border-white/30 transition-colors duration-500" />

      {/* Description */}
      <p className="text-gray-600 leading-7 text-sm md:text-base group-hover:text-white transition-colors duration-500">
        {item.desc}
      </p>

      {/* Bottom Arrow */}
      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <ArrowRight
          size={22}
          className="text-white group-hover:translate-x-1 transition-transform duration-300"
        />
      </div>
    </div>
  </div>
);

TimelineCard.propTypes = {
  item: PropTypes.shape({
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    org: PropTypes.string.isRequired,
    badge: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default function Resume() {
  const [active, setActive] = useState("Education");

  const renderTimeline = (
    leftTitle,
    rightTitle,
    leftData,
    rightData,
    leftYear,
    rightYear
  ) => (
    <div className="grid lg:grid-cols-2 gap-12 mt-12 md:mt-20">
      <div>
        <p className="uppercase tracking-[4px] text-pink-500 text-xs md:text-sm mb-4">
          {leftYear}
        </p>
        <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10 md:mb-12">
          {leftTitle}
        </h3>

        <div className="space-y-10 md:space-y-12">
          {leftData.map((item, i) => (
            <TimelineCard key={i} item={item} />
          ))}
        </div>
      </div>

      <div>
        <p className="uppercase tracking-[4px] text-pink-500 text-xs md:text-sm mb-4">
          {rightYear}
        </p>
        <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10 md:mb-12">
          {rightTitle}
        </h3>

        <div className="space-y-10 md:space-y-12">
          {rightData.map((item, i) => (
            <TimelineCard key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="resume" className="bg-[#ECF0F3] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-5">

        <p className="text-center uppercase tracking-[4px] text-pink-500 text-xs sm:text-sm">
          2 Years 2 Months of Professional Experience
        </p>

        <h2 className="text-center text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 mt-3 mb-10 md:mb-14">
          My Resume
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 rounded-[28px] bg-[#ECF0F3] shadow-[10px_10px_25px_#c8d0e7,-10px_-10px_25px_#ffffff] overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`py-8 text-lg font-semibold transition-all duration-300 ${
                active === tab
                  ? "bg-[#ECF0F3] text-pink-500 shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff]"
                  : "text-gray-800 hover:text-pink-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {active === "Education" &&
          renderTimeline(
            "Education Quality",
            "Professional Journey",
            educationLeft,
            educationRight,
            "2020 - 2026",
            "2024 - 2026"
          )}

        {active === "Professional Skills" && (
          <div className="grid lg:grid-cols-2 gap-16 mt-12 md:mt-20">

            <div>
              <p className="uppercase tracking-[4px] text-pink-500 text-xs md:text-sm mb-4">
                Features
              </p>

              <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10 md:mb-12">
                Design Skill
              </h3>

              {designSkills.map((skill, i) => (
                <Progress key={i} name={skill.name} value={skill.value} />
              ))}
            </div>

            <div>
              <p className="uppercase tracking-[4px] text-pink-500 text-xs md:text-sm mb-4">
                Features
              </p>

              <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10 md:mb-12">
                Development Skill
              </h3>

              {devSkills.map((skill, i) => (
                <Progress key={i} name={skill.name} value={skill.value} />
              ))}
            </div>

          </div>
        )}

        {active === "Experience" &&
          renderTimeline(
            "Professional Experience",
            "Project Experience",
            experienceLeft,
            experienceRight,
            "Sep 2024 - Nov 2026",
            "Company Projects"
          )}

        {active === "Interview" &&
          renderTimeline(
            "Recent Project",
            "Professional Highlights",
            interviewLeft,
            interviewRight,
            "Latest Work",
            "Career Growth"
          )}

      </div>
    </section>
  );
}