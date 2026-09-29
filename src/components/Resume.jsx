import { useState } from "react";
import PropTypes from "prop-types";
import {
  Building2,
  GraduationCap,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

const tabs = ["Experience", "Professional Skills", "Education"];

/* ---------------------- EXPERIENCE ---------------------- */

const experienceLeft = [
  {
    year: "Sep 2024 – Feb 2027",
    title: "Full Stack Developer",
    org: "Techsunset (Remote)",
    desc: "Built responsive React and Next.js applications, developed REST APIs with Node.js and Express, worked with MongoDB, Redis, AWS EC2, S3 and Lambda while contributing to production-ready client projects.",
  },
];

const experienceRight = [
  {
    year: "Production Projects",
    title: "Project Categories",
    org: "Techsunset",
    desc: "Worked on CRM, accounting, HR, inventory, project management, and education platforms, contributing to scalable full-stack solutions and collaborating with cross-functional teams to deliver business-focused applications.",
  },
];

/* ---------------------- EDUCATION ---------------------- */

const educationLeft = [
  {
    year: "2020 – 2024",
    title: "Diploma in Computer Science",
    org: "Board of Technical Education",
    desc: "Studied Data Structures, DBMS, Networking, Web Development and Software Engineering while building practical development projects.",
  },
  {
    year: "2020",
    title: "10th Standard",
    org: "CBSE Board",
    desc: "Completed secondary education before pursuing Computer Science.",
  },
];

const educationRight = [
  {
    year: "2024 – Present",
    title: "Professional Journey",
    org: "Techsunset (Remote)",
    desc: "Started my professional journey as a Remote Full Stack Developer working on production-ready client applications using modern JavaScript technologies.",
  },
];

/* ---------------------- SKILLS ---------------------- */

const technologies = [
  {
    name: "Gen AI",
    icon: "/image/ai.webp",
    skills: ["AI", "Prompts", "Automation"],
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    skills: ["ES6+", "Async", "DOM"],
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    skills: ["Hooks", "State", "UI"],
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    skills: ["Responsive", "Design", "Animation"],
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    skills: ["SSR", "Routing", "API"],
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    skills: ["REST", "Backend", "Logic"],
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    skills: ["Routes", "Auth", "Middleware"],
  },
  {
    name: "CI/CD",
    icon: "https://cdn.simpleicons.org/githubactions/2088FF",
    skills: ["Deploy", "Pipeline", "Actions"],
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    skills: ["CRUD", "Index", "Aggregation"],
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    skills: ["SQL", "Relations", "Queries"],
  },
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    skills: ["Schema", "Migration", "ORM"],
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    skills: ["Container", "Image", "Deploy"],
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    skills: ["EC2", "S3", "Lambda"],
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    skills: ["Cache", "Session", "Queue"],
  },
  {
    name: "Kafka",
    icon: "https://cdn.simpleicons.org/apachekafka/ffffff",
    skills: ["Events", "Stream", "Queue"],
  },
  {
    name: "RabbitMQ",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg",
    skills: ["Worker", "Queue", "Async"],
  },
  {
    name: "BullMQ",
    icon: "https://cdn.simpleicons.org/redux/764ABC",
    skills: ["Jobs", "Queue", "Schedule"],
  },
];

/* ---------------------- TIMELINE CARD ---------------------- */

const TimelineCard = ({ item, type }) => (
  <div className="relative pl-9">
    {/* Gradient Line */}
    <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FF014F] via-pink-400 to-gray-700 rounded-full"></div>

    {/* Node */}
    <div className="absolute left-0 top-7 w-7 h-7 rounded-full bg-[#17191D] shadow-[4px_4px_10px_#08090b,-4px_-4px_10px_#24272d] flex items-center justify-center">
      {type === "experience" ? (
        <Briefcase size={14} color="#FF014F" />
      ) : (
        <GraduationCap size={14} color="#FF014F" />
      )}
    </div>

    {/* Card */}
    <div
      className="group relative rounded-[24px] bg-[#17191D] p-5
      border border-white/5
      shadow-[8px_8px_18px_#08090b,-8px_-8px_18px_#24272d]
      hover:-translate-y-2
      hover:shadow-[12px_12px_24px_#08090b,-12px_-12px_24px_#24272d]
      transition-all duration-500"
    >
      {/* Year Badge */}
      <span className="absolute -top-3 right-5 px-4 py-1.5 rounded-full bg-[#FF014F] text-white text-[11px] font-bold uppercase tracking-[2px] shadow-[0_5px_15px_rgba(255,1,79,0.25)]">
        {item.year}
      </span>

      <h3 className="text-lg md:text-xl font-bold text-white mt-3 group-hover:text-[#FF014F] transition-colors">
        {item.title}
      </h3>

      <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
        <Building2 size={15} />
        {item.org}
      </div>

      <p className="mt-5 text-gray-400 text-[14px] leading-7">
        {item.desc}
      </p>

      <div className="flex justify-between items-center mt-5 pt-4 border-t border-white/10">
        <span className="text-[11px] uppercase tracking-[2px] text-gray-500">
          Professional Milestone
        </span>

        <div className="w-10 h-10 rounded-full bg-[#17191D] border border-white/5 shadow-[4px_4px_10px_#08090b,-4px_-4px_10px_#24272d] flex items-center justify-center group-hover:bg-[#FF014F] transition-all duration-300">
          <ArrowUpRight
            size={18}
            className="text-gray-400 group-hover:text-white transition-colors"
          />
        </div>
      </div>
    </div>
  </div>
);

TimelineCard.propTypes = {
  type: PropTypes.string.isRequired,
  item: PropTypes.shape({
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    org: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

/* ---------------------- MAIN ---------------------- */

export default function Resume() {
  const [active, setActive] = useState("Experience");

  const renderTimeline = (
    leftTitle,
    rightTitle,
    leftData,
    rightData,
    leftYear,
    rightYear,
    type
  ) => (
    <div className="grid lg:grid-cols-2 gap-10 mt-8">
      <div>
        <p className="uppercase tracking-[4px] text-[#FF014F] text-xs font-semibold mb-2">
          {leftYear}
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
          {leftTitle}
        </h3>

        <div className="space-y-8">
          {leftData.map((item, i) => (
            <TimelineCard key={i} item={item} type={type} />
          ))}
        </div>
      </div>

      <div>
        <p className="uppercase tracking-[4px] text-[#FF014F] text-xs font-semibold mb-2">
          {rightYear}
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
          {rightTitle}
        </h3>

        <div className="space-y-8">
          {rightData.map((item, i) => (
            <TimelineCard key={i} item={item} type={type} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="resume"
      className="
  relative overflow-hidden
  bg-[#0D0B10]
  py-16 md:py-20
  before:absolute before:inset-0
  before:bg-[radial-gradient(ellipse_at_0%_50%,rgba(255,1,79,0.16),transparent_45%),radial-gradient(ellipse_at_100%_50%,rgba(255,1,79,0.10),transparent_45%),radial-gradient(ellipse_at_50%_100%,rgba(70,45,90,0.10),transparent_55%)]
  before:pointer-events-none
"
    >

      <div className="relative max-w-7xl mx-auto px-5">
        {/* Heading */}

        <p className="text-center uppercase tracking-[4px] text-[#FF014F] text-xs font-semibold">
          2+ Years of Professional Experience
        </p>

        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mt-2 mb-8">
          My Resume
        </h2>

        {/* Tabs */}

        <div className="grid grid-cols-1 md:grid-cols-3 rounded-[22px] bg-[#17191D] border border-white/5 shadow-[8px_8px_20px_#08090b,-8px_-8px_20px_#24272d] overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`py-5 text-sm font-semibold uppercase tracking-[2px] transition-all duration-300 ${active === tab
                ? "bg-[#17191D] text-[#FF014F] shadow-[inset_8px_8px_16px_#08090b,inset_-8px_-8px_16px_#24272d]"
                : "text-gray-400 hover:text-[#FF014F]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* EXPERIENCE */}

        {active === "Experience" &&
          renderTimeline(
            "Professional Experience",
            "Project Categories",
            experienceLeft,
            experienceRight,
            "2024 – 2027",
            "Production Projects",
            "experience"
          )}

        {/* PROFESSIONAL SKILLS */}

        {active === "Professional Skills" && (
          <div className="mt-8">
            <div className="text-center mb-10">
              <p className="uppercase tracking-[4px] text-[#FF014F] text-xs font-semibold">
                Technical Expertise
              </p>

              <h3 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Capability Matrix
              </h3>

              <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm">
                Production-ready technologies I use to build scalable web
                applications.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="group rounded-[18px] p-4 bg-[#17191D]
                  border border-white/5
                  shadow-[6px_6px_14px_#08090b,-6px_-6px_14px_#24272d]
                  hover:-translate-y-2
                  hover:shadow-[10px_10px_20px_#08090b,-10px_-10px_20px_#24272d]
                  transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-xl bg-[#17191D] border border-white/5 shadow-[4px_4px_10px_#08090b,-4px_-4px_10px_#24272d] flex items-center justify-center mb-3">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-7 h-7 object-contain"
                      />
                    </div>

                    <h4 className="text-sm font-bold text-white mb-3">
                      {tech.name}
                    </h4>

                    <div className="flex flex-wrap justify-center gap-1">
                      {tech.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 rounded-full text-[10px] font-medium bg-[#17191D] border border-white/5 shadow-[2px_2px_6px_#08090b,-2px_-2px_6px_#24272d] text-gray-400 group-hover:text-[#FF014F] transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EDUCATION */}

        {active === "Education" &&
          renderTimeline(
            "Education",
            "Professional Journey",
            educationLeft,
            educationRight,
            "2020 – 2024",
            "2024 – Present",
            "education"
          )}
      </div>
    </section>
  );
}
