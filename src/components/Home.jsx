import { useEffect, useState } from "react";

const skills = [
  { name: "Gen AI", icon: "/image/ai.png" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
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

const Home = () => {
  const badge = "2+ Year Experience";
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let timeout;

    if (visibleCount < badge.length) {
      timeout = setTimeout(() => setVisibleCount((p) => p + 1), 60);
    } else {
      timeout = setTimeout(() => setVisibleCount(0), 2500);
    }

    return () => clearTimeout(timeout);
  }, [visibleCount]);

  return (
    <>
      <section
        id="home"
        className="min-h-[88vh] bg-[#ECF0F3] flex items-center pt-8 md:pt-5 pb-8"
      >
        <div className="max-w-7xl mx-auto px-5 w-full">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start">
              <div
                className="relative bg-[#ECF0F3] p-5 rounded-[32px]
                shadow-[12px_12px_28px_#c8d0e7,-12px_-12px_28px_#ffffff]
                animate-float"
              >
                <div className="absolute -left-6 top-1/3 w-28 h-28 bg-[#FF014F] rounded-3xl rotate-12 opacity-90"></div>

                <img
                  src="/image/photo.png"
                  alt="Jatin"
                  className="relative z-10 w-full max-w-[470px] rounded-[24px] object-cover"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="space-y-6">
              <div>
                <p className="uppercase tracking-[6px] text-[#FF014F] text-sm font-semibold mb-3">
                  {`Hello, I'm`}
                </p>

                <h1 className="text-5xl md:text-7xl font-bold leading-none">
                  <span className="text-[#1E2125]">JATIN </span>
                  <span className="text-[#FF014F]">MEHRA</span>
                </h1>

                <div
                  className="inline-flex items-center gap-3 mt-6 px-6 py-4 rounded-full
                  bg-[#ECF0F3]
                  shadow-[8px_8px_18px_#c8d0e7,-8px_-8px_18px_#ffffff]"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FF014F] flex items-center justify-center">
                    <i className="ri-briefcase-4-line text-white text-xl"></i>
                  </div>

                  <span className="text-lg font-semibold uppercase tracking-[3px] text-[#1E2125]">
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

              {/* TECH STACK */}
              <div
                className="rounded-[30px] p-6 bg-[#ECF0F3]
                shadow-[10px_10px_24px_#c8d0e7,-10px_-10px_24px_#ffffff]"
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="group rounded-2xl px-4 py-4 bg-[#ECF0F3]
                      shadow-[6px_6px_14px_#c8d0e7,-6px_-6px_14px_#ffffff]
                      hover:-translate-y-1 hover:shadow-[8px_8px_18px_#c8d0e7,-8px_-8px_18px_#ffffff]
                      transition-all duration-300 flex items-center gap-3"
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

              {/* Bottom Line */}
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
        .animate-float{
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float{
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-15px)}
        }
      `}</style>
    </>
  );
};

export default Home;