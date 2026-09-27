import { useEffect, useState } from "react";

const skills = [
  { name: "Gen AI", icon: "/image/ai.png" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "Next JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "CI/CD", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "ORM Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Kafka", icon: "https://cdn.simpleicons.org/apachekafka/000000" },
  { name: "RabbitMQ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg" },
  { name: "BullMQ", icon: "https://cdn.simpleicons.org/redux/764ABC" },
];

const mobileOrbitSkills = [
  "Full Stack",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "AWS",
  "Git",
  "Jira",
];

const desktopOrbitSkills = skills.map((skill) => skill.name);

const Home = () => {
  const badge = "2+ Year Experience";
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let timeout;
    if (visibleCount < badge.length) {
      timeout = setTimeout(() => setVisibleCount((prev) => prev + 1), 55);
    } else {
      timeout = setTimeout(() => setVisibleCount(0), 2200);
    }
    return () => clearTimeout(timeout);
  }, [visibleCount]);

  return (
    <>
      <section
        id="home"
        className="min-h-screen lg:min-h-[88vh] bg-[#ECF0F3] flex items-center pt-8 lg:pt-5 pb-10 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-5 w-full">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-14 items-center">

            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start order-1">
              <div
                className="relative bg-[#ECF0F3] p-4 lg:p-5 rounded-[30px]
                shadow-[12px_12px_28px_#c8d0e7,-12px_-12px_28px_#ffffff]
                animate-float"
              >
                <div className="absolute -left-4 top-1/3 w-20 h-20 lg:w-28 lg:h-28 bg-[#FF014F] rounded-3xl rotate-12 opacity-90"></div>

                {/* MOBILE ORBIT */}
                <div className="relative lg:hidden w-[170px] h-[170px] flex items-center justify-center">
                  <div className="orbit-container mobile-orbit">
                    {mobileOrbitSkills.map((skill, index) => (
                      <div
                        key={skill}
                        className="orbit-item"
                        style={{
                          "--angle": `${index * (360 / mobileOrbitSkills.length)}deg`,
                        }}
                      >
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>

                  <img
                    src="/image/photo.png"
                    alt="Jatin Mehra"
                    className="relative z-10 w-[170px] h-[170px] rounded-full object-cover"
                  />
                </div>

                {/* DESKTOP ORBIT */}
                <div className="hidden lg:flex relative w-[470px] h-[470px] items-center justify-center">
                  <div className="orbit-container desktop-orbit">
                    {desktopOrbitSkills.map((skill, index) => (
                      <div
                        key={skill}
                        className="orbit-item"
                        style={{
                          "--angle": `${index * (360 / desktopOrbitSkills.length)}deg`,
                        }}
                      >
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>

                  <img
                    src="/image/photo.png"
                    alt="Jatin Mehra"
                    className="relative z-10 w-[390px] h-[390px] rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="space-y-4 lg:space-y-6 order-2">
              <div>
                <p className="uppercase tracking-[5px] text-[#FF014F] text-xs sm:text-sm font-semibold mb-3">
                 {` Hello, I'm`}
                </p>

                <h1 className="text-[34px] sm:text-6xl lg:text-7xl font-bold leading-none">
                  <span className="text-[#1E2125]">JATIN </span>
                  <span className="text-[#FF014F]">MEHRA</span>
                </h1>
              </div>

              {/* EXPERIENCE */}
              <div className="flex justify-start">
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#ECF0F3] shadow-[8px_8px_18px_#c8d0e7,-8px_-8px_18px_#ffffff]">
                  <div className="w-10 h-10 rounded-full bg-[#FF014F] flex items-center justify-center">
                    <i className="ri-briefcase-4-line text-white text-xl"></i>
                  </div>

                  <span className="text-sm lg:text-base font-semibold uppercase tracking-[2px] text-[#1E2125]">
                    {Array.from(badge).map((char, index) => (
                      <span
                        key={index}
                        className={`transition-opacity duration-200 ${
                          index < visibleCount ? "opacity-100" : "opacity-30"
                        }`}
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </span>
                </div>
              </div>

              {/* MOBILE SKILLS GRID */}
              <div className="lg:hidden rounded-[26px] p-4 bg-[#ECF0F3] shadow-[10px_10px_24px_#c8d0e7,-10px_-10px_24px_#ffffff]">
                <div className="grid grid-cols-4 gap-2.5">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="rounded-xl bg-[#ECF0F3] shadow-[5px_5px_12px_#c8d0e7,-5px_-5px_12px_#ffffff] p-3 flex flex-col items-center gap-2 hover:-translate-y-1 transition-all duration-300"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-7 h-7 object-contain"
                      />
                      <span className="text-[12px] font-semibold text-center leading-tight text-[#1E2125]">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* DESKTOP SKILLS GRID */}
              <div className="hidden lg:block rounded-[30px] p-6 bg-[#ECF0F3] shadow-[10px_10px_24px_#c8d0e7,-10px_-10px_24px_#ffffff]">
                <div className="grid grid-cols-4 gap-4">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group rounded-2xl px-4 py-4 bg-[#ECF0F3] shadow-[6px_6px_14px_#c8d0e7,-6px_-6px_14px_#ffffff] hover:-translate-y-1 hover:shadow-[8px_8px_18px_#c8d0e7,-8px_-8px_18px_#ffffff] transition-all duration-300 flex items-center gap-3"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-7 h-7 object-contain flex-shrink-0"
                      />
                      <span className="text-sm font-medium text-[#1E2125] leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTTOM LINE */}
              <div className="pt-2">
                <div className="w-56 h-[3px] rounded-full bg-gray-300 overflow-hidden">
                  <div className="w-10 h-full bg-[#FF014F] rounded-full"></div>
                </div>

                <p className="uppercase tracking-[4px] text-xs text-gray-500 mt-6">
                  Clean Code • Scalable Solutions • Better Tomorrow
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        /* Orbit */

        .orbit-container {
          position: absolute;
          inset: 0;
          animation: orbitSpin 28s linear infinite;
          pointer-events: none;
        }

        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .orbit-item {
          position: absolute;
          top: 50%;
          left: 50%;
          width: max-content;
          transform:
            rotate(var(--angle))
            translateY(calc(-1 * var(--radius)))
            rotate(calc(-1 * var(--angle)));
          transform-origin: center;
        }

        .mobile-orbit .orbit-item {
          --radius: 108px;
        }

        .desktop-orbit .orbit-item {
          --radius: 228px;
        }

        .orbit-item span {
          display: inline-block;
          background: #ECF0F3;
          color: #1E2125;
          font-weight: 700;
          border-radius: 999px;
          white-space: nowrap;
          box-shadow: 5px 5px 12px #c8d0e7,-5px -5px 12px #ffffff;
        }

        .mobile-orbit .orbit-item span {
          font-size: 10px;
          padding: 4px 8px;
        }

        .desktop-orbit .orbit-item span {
          font-size: 12px;
          padding: 6px 12px;
        }
      `}</style>
    </>
  );
};

export default Home;