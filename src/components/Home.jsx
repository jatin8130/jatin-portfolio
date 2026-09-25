import { useEffect, useState } from "react";

const Home = () => {
  const text = "a Full Stack Developer";
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let timeout;

    if (visibleCount < text.length) {
      timeout = setTimeout(() => setVisibleCount((p) => p + 1), 50);
    } else {
      timeout = setTimeout(() => setVisibleCount(0), 2000);
    }

    return () => clearTimeout(timeout);
  }, [visibleCount]);

  return (
    <>
      <section
        id="home"
        className="min-h-[80vh] bg-[#ECF0F3] flex items-center py-10"
      >
        <div className="max-w-7xl mx-auto px-5 w-full">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">

            {/* LEFT IMAGE */}

            <div className="flex justify-center lg:justify-start">
              <div
                className="bg-[#ECF0F3] p-5 rounded-[28px]
                shadow-[10px_10px_25px_#c8d0e7,-10px_-10px_25px_#ffffff]
                animate-float"
              >
                <img
                  src="/image/photo.png"
                  alt="Jatin"
                  className="w-full max-w-[520px] rounded-xl object-cover"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}

            <div className="space-y-6 lg:text-left">

              <div>
                <h1 className="text-3xl md:text-6xl font-bold text-[#1e2125]">
                  {`Hi, I'm `}
                  <span className="text-[#FF014F]">Jatin Mehra</span>
                </h1>

                <h2 className="text-3xl md:text-6xl font-bold mt-4 text-[#1e2125] flex flex-wrap lg:justify-start">
                  {Array.from(text).map((char, index) => (
                    <span
                      key={index}
                      className={`transition-opacity duration-200 ${
                        index < visibleCount
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </h2>
              </div>

              <p className="text-gray-600 text-lg max-w-2xl">
                Hi, my name is Jatin Mehra. I completed my Diploma in Computer Science in 2024. After completing my diploma, I joined Techsunset company in sep 2024 as a remote full-stack developer. I have been working there for the last 2 years, mainly working with React, Node.js, Express, MongoDB
              </p>

              {/* Bottom */}

              <div className="flex flex-col md:flex-row gap-10 pt-10 justify-center lg:justify-start">

                {/* FIND WITH ME */}

                <div>
                  <p className="uppercase tracking-[4px] text-sm text-[#1e2125] mb-6">
                    Find With Me
                  </p>

                  <div className="flex gap-5 md:justify-center lg:justify-start">

                    <a
                      href="#"
                      // href="linkedin.com/in/jatin-mehra-97647b253"
                      className="group w-16 h-16 rounded-xl flex items-center justify-center
                      bg-[#ECF0F3]
                      shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff]
                      hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]
                      transition duration-300"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
                        alt=""
                        className="w-7 h-7 group-hover:brightness-0 group-hover:invert"
                      />
                    </a>

                    <a
                      href="#"
                      className="group w-16 h-16 rounded-xl flex items-center justify-center
                      bg-[#ECF0F3]
                      shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff]
                      hover:-translate-y-1 hover:bg-[#181717]
                      transition duration-300"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                        alt=""
                        className="w-7 h-7 group-hover:brightness-0 group-hover:invert"
                      />
                    </a>

                    <a
                      href="#"
                      className="group w-16 h-16 rounded-xl flex items-center justify-center
                      bg-[#ECF0F3]
                      shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff]
                      hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#EA4335] hover:via-[#FBBC05] hover:to-[#34A853]
                      transition duration-300"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
                        alt=""
                        className="w-7 h-7 group-hover:brightness-0 group-hover:invert"
                      />
                    </a>

                  </div>
                </div>

                {/* BEST SKILL */}

                <div>
                  <p className="uppercase tracking-[4px] text-sm text-[#1e2125] mb-6">
                    Best Skill On
                  </p>

                  <div className="flex gap-5 md:justify-center lg:justify-start">

                    {[
                      {
                        icon: "react/react-original.svg",
                        color: "#61DAFB",
                      },
                      {
                        icon: "nodejs/nodejs-original.svg",
                        color: "#339933",
                      },
                      {
                        icon: "express/express-original.svg",
                        color: "#181717",
                      },
                      {
                        icon: "mongodb/mongodb-original.svg",
                        color: "#47A248",
                      },
                    ].map((skill, i) => (
                      <div
                        key={i}
                        className="group w-16 h-16 rounded-xl flex items-center justify-center
                        bg-[#ECF0F3]
                        shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff]
                        hover:-translate-y-1 transition duration-300"
                        style={{
                          "--hover": skill.color,
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background = skill.color)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "#ECF0F3")
                        }
                      >
                        <img
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`}
                          alt=""
                          className="w-7 h-7 group-hover:brightness-0 group-hover:invert"
                        />
                      </div>
                    ))}

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Animations */}

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