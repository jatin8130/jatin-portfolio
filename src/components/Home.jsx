import { useEffect, useState } from "react";

const skills = [
  { name: "Gen AI", icon: "/image/ai.png" },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Node",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "ORM Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
  {
    name: "AWS Cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "CI/CD",
    icon: "https://cdn.simpleicons.org/githubactions/2088FF",
  },
  {
    name: "Kafka",
    icon: "https://cdn.simpleicons.org/apachekafka/FFFFFF",
  },
  {
    name: "RabbitMQ",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg",
  },
  {
    name: "BullMQ",
    icon: "https://cdn.simpleicons.org/redux/764ABC",
  },
];

const Home = () => {
  const badge = "2+ Year Experience";
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let timeout;

    if (visibleCount < badge.length) {
      timeout = setTimeout(
        () => setVisibleCount((prev) => prev + 1),
        55
      );
    } else {
      timeout = setTimeout(() => setVisibleCount(0), 2200);
    }

    return () => clearTimeout(timeout);
  }, [visibleCount]);

  return (
    <>
      <section
        id="home"
        className="
  relative overflow-hidden
  bg-[#0D0B10]
  pt-5 md:pt-8 pb-10
  before:absolute before:inset-0
  before:bg-[radial-gradient(ellipse_at_0%_50%,rgba(255,1,79,0.16),transparent_45%),radial-gradient(ellipse_at_100%_50%,rgba(255,1,79,0.10),transparent_45%),radial-gradient(ellipse_at_50%_100%,rgba(70,45,90,0.10),transparent_55%)]
  before:pointer-events-none
"
      >
        <div className="max-w-7xl mx-auto px-5 w-full">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-14 items-center">

            {/* ================= LEFT IMAGE ================= */}
            <div className="hidden lg:flex justify-center lg:justify-start order-1">
              <div className="relative">

                {/* Soft background accent */}
                <div
                  className="
                    absolute
                    -left-8
                    top-10
                    w-24
                    h-24
                    bg-[#FF014F]
                    rounded-[28px]
                    rotate-12
                    opacity-30
                    blur-[1px]
                  "
                />

                {/* Secondary accent */}
                <div
                  className="
                    absolute
                    -right-5
                    -bottom-5
                    w-20
                    h-20
                    border-[8px]
                    border-[#FF014F]
                    rounded-full
                    opacity-20
                  "
                />

                {/* Main photo card */}
                <div
                  className="
                    relative
                    z-10
                    p-5
                    rounded-[34px]
                    bg-[#0d0d0d]
                    border
                    border-white/10
                    shadow-[0_0_40px_rgba(255,1,79,0.12)]
                    animate-float
                  "
                >
                  <div className="relative overflow-hidden rounded-[28px]">
                    <img
                      src="/image/photo.png"
                      alt="Jatin Mehra"
                      className="
                        w-[390px]
                        h-[440px]
                        object-cover
                        object-center
                      "
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/35 to-transparent" />

                    {/* Professional label */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                      <div>
                        <p className="text-white text-lg font-bold">
                          Jatin Mehra
                        </p>

                        <p className="text-white/80 text-xs tracking-[2px] uppercase">
                          Full Stack Developer
                        </p>
                      </div>

                      <div className="w-3 h-3 rounded-full bg-[#FF014F] shadow-[0_0_18px_#FF014F]" />
                    </div>
                  </div>
                </div>

                {/* Floating experience badge */}
                <div
                  className="
                    absolute
                    -right-8
                    top-14
                    z-20
                    px-4
                    py-3
                    rounded-2xl
                    bg-[#111111]
                    border
                    border-white/10
                    shadow-[0_10px_30px_rgba(0,0,0,0.45)]
                  "
                >
                  <p className="text-[10px] uppercase tracking-[2px] text-gray-400">
                    Experience
                  </p>

                  <p className="text-sm font-bold text-white mt-1">
                    2+ Years
                  </p>
                </div>

                {/* Floating status badge */}
                <div
                  className="
                    absolute
                    -left-7
                    bottom-12
                    z-20
                    flex
                    items-center
                    gap-2
                    px-4
                    py-3
                    rounded-2xl
                    bg-[#111111]
                    border
                    border-white/10
                    shadow-[0_10px_30px_rgba(0,0,0,0.45)]
                  "
                />
              </div>
            </div>

            {/* ================= RIGHT CONTENT ================= */}
            <div className="space-y-4 lg:space-y-6 order-2">

              <div>
                <p className="uppercase tracking-[5px] text-[#FF014F] text-xs sm:text-sm font-semibold mb-3">
                  {` Hello, I'm`}
                </p>

                <h1 className="text-[34px] sm:text-6xl lg:text-7xl font-bold leading-none">
                  <span className="text-white">JATIN </span>
                  <span className="text-[#FF014F]">MEHRA</span>
                </h1>

                <div className="mt-5 flex md:hidden items-center gap-3 flex-wrap">
                  <span className="text-base sm:text-lg font-semibold text-white">
                    Full Stack Developer
                  </span>

                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF014F]" />

                  <span className="text-sm text-gray-400">
                    Web • Backend • Cloud
                  </span>
                </div>
              </div>

              {/* ================= EXPERIENCE ================= */}
              <div className="flex justify-start">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-3
                    px-5
                    py-3
                    rounded-full
                    bg-white/[0.04]
                    backdrop-blur-xl
                    border
                    border-white/10
                    shadow-[0_10px_30px_rgba(0,0,0,0.4)]
                  "
                >
                  <div className="w-10 h-10 rounded-full bg-[#FF014F] flex items-center justify-center">
                    <i className="ri-briefcase-4-line text-white text-xl" />
                  </div>

                  <span className="text-sm lg:text-base font-semibold uppercase tracking-[2px] text-white">
                    {Array.from(badge).map((char, index) => (
                      <span
                        key={index}
                        className={`transition-opacity duration-200 ${
                          index < visibleCount
                            ? "opacity-100"
                            : "opacity-30"
                        }`}
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </span>
                </div>
              </div>

              {/* ================= MOBILE SKILLS ================= */}
              <div
                className="
                  lg:hidden
                  rounded-[26px]
                  p-4
                  bg-white/[0.04]
                  backdrop-blur-xl
                  border
                  border-white/10
                  shadow-[0_10px_30px_rgba(0,0,0,0.4)]
                "
              >
                <div className="grid grid-cols-4 gap-2.5">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="
                        rounded-xl
                        bg-white/[0.04]
                        border
                        border-white/10
                        shadow-[0_8px_20px_rgba(0,0,0,0.3)]
                        p-3
                        flex
                        flex-col
                        items-center
                        gap-2
                        hover:-translate-y-1
                        hover:bg-[#FF014F]/10
                        hover:border-[#FF014F]/30
                        transition-all
                        duration-300
                      "
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-7 h-7 object-contain"
                      />

                      <span className="text-[12px] font-semibold text-center leading-tight text-white">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ================= DESKTOP SKILLS ================= */}
              <div
                className="
                  hidden
                  lg:block
                  rounded-[28px]
                  p-6
                  bg-white/[0.04]
                  backdrop-blur-xl
                  border
                  border-white/10
                  shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                "
              >
                <div className="grid grid-cols-4 gap-3">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="
                        group
                        min-w-0
                        flex
                        items-center
                        gap-3
                        px-3
                        py-3
                        rounded-xl
                        bg-white/[0.04]
                        border
                        border-white/[0.08]
                        shadow-[0_8px_20px_rgba(0,0,0,0.25)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:bg-[#FF014F]/10
                        hover:border-[#FF014F]/30
                        hover:shadow-[0_0_20px_rgba(255,1,79,0.12)]
                      "
                    >
                      {/* Icon */}
                      <div
                        className="
                          flex
                          items-center
                          justify-center
                          flex-shrink-0
                          w-9
                          h-9
                          rounded-xl
                          bg-white/[0.06]
                          border
                          border-white/10
                          shadow-[inset_0_0_10px_rgba(255,255,255,0.03)]
                          transition-transform
                          duration-300
                          group-hover:scale-105
                        "
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="
                            w-5
                            h-5
                            object-contain
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          "
                        />
                      </div>

                      {/* Name */}
                      <span
                        className="
                          min-w-0
                          text-sm
                          font-semibold
                          text-white
                          truncate
                          transition-colors
                          duration-300
                          group-hover:text-[#FF014F]
                        "
                      >
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM LINE ================= */}
          <div className="max-w-7xl mx-auto px-5 w-full">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-14 items-center">
              {/* LEFT IMAGE */}
              {/* RIGHT CONTENT */}
            </div>

            <div className="pt-8 flex flex-col items-center">
              <div className="w-56 h-[3px] rounded-full bg-white/20 overflow-hidden">
                <div className="w-10 h-full bg-[#FF014F] rounded-full" />
              </div>

              <p className="uppercase tracking-[4px] text-xs text-gray-400 mt-6 text-center">
                Clean Code • Scalable Solutions • Better Tomorrow
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%,100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        /* Orbit */

        .orbit-container {
          position: absolute;
          inset: 0;
          animation: orbitSpin 28s linear infinite;
          pointer-events: none;
        }

        @keyframes orbitSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
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
          background: rgba(255,255,255,0.04);
          color: #f5f5f5;
          font-weight: 700;
          border-radius: 999px;
          white-space: nowrap;
          box-shadow: 0 8px 20px rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.08);
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