import { useState } from "react";

const About = () => {
    const [preview, setPreview] = useState(null);

    const skill = [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", label: "HTML" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", label: "CSS" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", label: "JavaScript" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg", label: "Bootstrap" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", label: "Tailwind" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", label: "React" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", label: "Next.js" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", label: "Git" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", label: "Node.js" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", label: "Express" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", label: "MongoDB" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", label: "TypeScript" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg", label: "Redux" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", label: "Firebase" },
    ];

    return (
        <section className="lg:px-20 px-4 py-12 space-y-20">
            {/* ABOUT + SKILLS */}
            <div className="grid lg:grid-cols-2 gap-10">
                <div className="space-y-10">
                    <div id="about-me" className="space-y-4">
                        <h4 className="text-[#8670EF] font-semibold">
                            I AM A FRONT END DEVELOPER
                        </h4>
                        <h1 className="font-bold lg:text-6xl text-3xl">About Me</h1>
                        <p className="text-gray-600">
                            My name is Jatin Mehra. I completed my Diploma in Computer Engineering
                            from DSEU Rajokri Campus and love creating modern UI designs.
                        </p>
                        <p className="text-gray-500 leading-relaxed">
                            I’m a passionate front-end developer skilled in HTML, CSS,
                            JavaScript, React, and Tailwind CSS. I enjoy building responsive,
                            user-friendly interfaces and continuously learning new technologies.
                        </p>
                    </div>

                    {/* EDUCATION */}
                    <div id="education">
                        <h1 className="font-bold text-4xl mb-6">Education</h1>

                        {[
                            ["2024 - 2027", "B.Tech | Computer Science Engineering", "Shri Venkateshwara University"],
                            ["2020 - 2023", "Diploma | Computer Engineering", "DSEU Rajokri Campus"],
                            ["2019 - 2020", "10th Standard", "New Sainik Public Sr. Sec. School"],
                        ].map((edu, i) => (
                            <div key={i} className="flex gap-6 mb-6">
                                <span className="text-gray-500 min-w-[90px]">{edu[0]}</span>
                                <div>
                                    <h3 className="font-semibold text-xl">{edu[1]}</h3>
                                    <p className="text-gray-500">{edu[2]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="skill">
                    <h1 className="font-bold text-3xl mb-6">Skills</h1>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
                        {skill.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white p-4 rounded-2xl shadow-md text-center
                hover:-translate-y-1 hover:shadow-xl transition-all"
                            >
                                <img className="w-12 mx-auto" src={item.src} alt={item.label} />
                                <p className="font-semibold text-sm mt-2 capitalize">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* PROJECTS */}
            <div id="project">
                <h1 className="font-bold text-4xl mb-6">Projects</h1>

                <div className="flex gap-6 overflow-x-auto pb-4">
                    {/* Fashion */}
                    <a
                        href="https://fasho-seven.vercel.app"
                        target="_blank"
                        className="bg-white p-4 rounded-2xl shadow-md min-w-[240px]
            hover:-translate-y-1 hover:shadow-xl transition-all"
                    >
                        <img src="/image/fashion.JPG" className="rounded-lg mb-3" />
                        <h3 className="font-semibold">eCommerce Website</h3>
                        <p className="text-sm text-red-600 mt-1">
                            <strong>Working...</strong>
                        </p>
                        <p className="text-[12px] text-blue-700 mt-1">
                            <strong>Live Preview</strong>
                        </p>
                    </a>

                    {/* Admin Panel */}
                    <a
                        href="https://ecom-com.vercel.app"
                        target="_blank"
                        className="bg-white p-4 rounded-2xl shadow-md min-w-[240px]
            hover:-translate-y-1 hover:shadow-xl transition-all"
                    >
                        <img src="/image/ecom.JPG" className="rounded-lg mb-3" />
                        <h3 className="font-semibold">eCommerce Admin Panel</h3>
                        <p className="text-[14px] text-gray-700">
                            <strong>Admin login</strong>
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>Email:</strong> jatin@gmail.com
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>Password:</strong> mehra
                        </p>
                        <p className="text-[12px] text-blue-700 mt-1">
                            <strong>Live Preview</strong>
                        </p>
                    </a>

                    {/* Endgame */}
                    <a
                        href="https://endgame-omega.vercel.app"
                        target="_blank"
                        className="bg-white p-4 rounded-2xl shadow-md min-w-[240px]
            hover:-translate-y-1 hover:shadow-xl transition-all"
                    >
                        <img src="/image/endgame.JPG" className="rounded-lg mb-3" />
                        <h3 className="font-semibold">Endgame Game Website</h3>
                        <p className="text-[12px] text-blue-700 mt-1">
                            <strong>Live Preview</strong>
                        </p>
                    </a>

                    {/* Aniature */}
                    <a
                        href="https://aniature.vercel.app"
                        target="_blank"
                        className="bg-white p-4 rounded-2xl shadow-md min-w-[240px]
            hover:-translate-y-1 hover:shadow-xl transition-all"
                    >
                        <img src="/image/aniature.JPG" className="rounded-lg mb-3" />
                        <h3 className="font-semibold">Aniature Streaming Website</h3>
                        <p className="text-[12px] text-blue-700 mt-1">
                            <strong>Live Preview</strong>
                        </p>
                    </a>

                </div>
            </div>

            {/* CERTIFICATES */}
            <div id="certificate">
                <h1 className="font-bold text-4xl mb-6">Certificates</h1>
                <div className="flex gap-6 overflow-x-auto">
                    {[
                        "/image/cognifyz-offer.JPG",
                        "/image/cognifyz-inter.JPG",
                        "/image/certificate3.JPG",
                        "/image/certificate.JPG",
                        "/image/certificate2.jpeg",
                    ].map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            onClick={() => setPreview(img)}
                            className="w-[200px] rounded-xl shadow-md cursor-pointer
              hover:scale-105 transition-all"
                        />
                    ))}
                </div>
            </div>

            {/* CERTIFICATE MODAL */}
            {preview && (
                <div
                    onClick={() => setPreview(null)}
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                >
                    <img
                        src={preview}
                        className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
                    />
                </div>
            )}

            {/* CONTACT */}
            <div id="contact" className="sm:px-8 px-4">
                <h1 className="font-bold text-3xl mb-4 cursor-default">Contact-us</h1>

                <div className="grid lg:grid-cols-2 grid-clos-1 items-center gap-2 mb-5">

                    <form className="flex flex-col bg-[#8680EF] px-5 py-8 rounded-xl cursor-default text-white" action='mailto: jatinmehra8130@gmail.com' method='POST'>
                        <h1 className="bg-[#8695EF] shadow-2xl p-2 rounded-lg font-semibold sm:text-lg text-md font-serif mb-2">Let's Discuss About Your Project</h1>
                        <div className="space-y-3 pt-4 text-sm sm:text-base">
                            <p className="flex items-center gap-3">
                                📧 <span>jatinmehra8130@gmail.com</span>
                            </p>
                            <p className="flex items-center gap-3">
                                📞 <span>+91 0101010101</span>
                            </p>
                            <p className="flex items-center gap-3">
                                📍 <span>New Delhi, India</span>
                            </p>
                            <p className="flex items-center gap-3">
                                🎂 <span>06 / 02 / 2005</span>
                            </p>
                            <p className="flex items-center gap-3">
                                🌍 <span>Indian</span>
                            </p>
                        </div>
                    </form>

                    <img className="lg:flex hidden" src="/image/personal-email.svg" alt="..." />
                </div>
            </div>
        </section>
    );
};

export default About;