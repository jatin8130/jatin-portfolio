import { useState } from "react";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Briefcase,
  Sparkles,
} from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch(
        "https://jatin-portfolio-server.vercel.app/send-mail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.success) {
        setStatus({
          type: "success",
          message:
            "Your message has been sent successfully. I'll get back to you soon.",
        });

        setFormData({
          name: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Failed to send your message.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Unable to connect to the server.",
      });
    }

    setLoading(false);

    setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="
  relative overflow-hidden
  bg-[#0D0B10]
  py-16 md:py-20
  before:absolute before:inset-0
  before:bg-[radial-gradient(ellipse_at_0%_50%,rgba(255,1,79,0.16),transparent_45%),radial-gradient(ellipse_at_100%_50%,rgba(255,1,79,0.10),transparent_45%),radial-gradient(ellipse_at_50%_100%,rgba(70,45,90,0.10),transparent_55%)]
  before:pointer-events-none
"
    >
      <div className="max-w-7xl mx-auto px-5">
        {/* ================= HEADING ================= */}

        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <p className="uppercase tracking-[5px] text-[#FF014F] text-xs md:text-sm font-bold">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            {`Let's Build Something Great`}
          </h2>

          <p className="text-gray-400 mt-5 text-sm md:text-base leading-7">
            Looking for a Full Stack Developer for your next project or
            {`opportunity? I'd love to hear from you.`}
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.2fr] gap-8 items-start">
          {/* ================= LEFT CARD ================= */}

          <div
            className="
              rounded-[30px]
              bg-[#15181D]
              p-6
              border border-white/5
              shadow-[10px_10px_22px_#08090c,-8px_-8px_20px_#1d2128]
            "
          >
            {/* Image */}

            <div className="overflow-hidden rounded-[22px]">
              <img
                src="/image/contact1.png"
                alt="Jatin Mehra"
                className="
                  w-full
                  h-72
                  object-cover
                  hover:scale-105
                  transition
                  duration-500
                "
              />
            </div>

            {/* Profile */}

            <div className="mt-8">
              <h3 className="text-3xl font-bold text-white">
                Jatin Mehra
              </h3>

              <p className="text-[#FF014F] font-semibold mt-2">
                Full Stack Developer • 2+ Years Experience
              </p>

              <p className="text-gray-400 leading-7 text-[15px] mt-6">
                I develop modern, scalable web applications using React,
                Next.js, Node.js, Express.js, MongoDB, Redis, Docker and AWS.
                I'm currently available for full-time opportunities and
                freelance collaborations.
              </p>
            </div>

            {/* ================= CONTACT DETAILS ================= */}

            <div className="mt-8 space-y-5">
              {/* Email */}

              <div className="flex items-center gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-[#15181D]
                    border border-white/5
                    shadow-[5px_5px_12px_#08090c,-5px_-5px_12px_#1d2128]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Mail size={20} className="text-[#FF014F]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[2px] text-gray-500">
                    Email
                  </p>

                  <p className="font-medium text-gray-200 break-all">
                    jatintechsunset@gmail.com
                  </p>
                </div>
              </div>

              {/* WhatsApp */}

              <div className="flex items-center gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-[#15181D]
                    border border-white/5
                    shadow-[5px_5px_12px_#08090c,-5px_-5px_12px_#1d2128]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Phone size={20} className="text-[#25D366]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[2px] text-gray-500">
                    WhatsApp
                  </p>

                  <p className="font-medium text-gray-200">
                    +91 8130163436
                  </p>
                </div>
              </div>

              {/* Location */}

              <div className="flex items-center gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-[#15181D]
                    border border-white/5
                    shadow-[5px_5px_12px_#08090c,-5px_-5px_12px_#1d2128]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <MapPin size={20} className="text-[#FF014F]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[2px] text-gray-500">
                    Location
                  </p>

                  <p className="font-medium text-gray-200">
                    Bengaluru, India
                  </p>
                </div>
              </div>
            </div>

            {/* ================= WHATSAPP BUTTON ================= */}

            <a
              href="https://wa.me/918130163436?text=Hi%20Jatin,%20I'd%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10
                flex
                items-center
                justify-center
                gap-3
                w-full
                py-4
                rounded-2xl
                text-white
                font-semibold
                transition-all
                duration-300
                hover:-translate-y-1
              "
              style={{
                background:
                  "linear-gradient(135deg,#25D366,#16A34A)",
                boxShadow:
                  "0 0 18px rgba(37,211,102,.35),0 0 35px rgba(37,211,102,.18)",
              }}
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* ================= RIGHT CARD ================= */}

          <div
            className="
              rounded-[30px]
              bg-[#15181D]
              p-6
              md:p-8
              border border-white/5
              shadow-[10px_10px_22px_#08090c,-8px_-8px_20px_#1d2128]
            "
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white">
                Send a Message
              </h3>

              <p className="text-gray-400 mt-2">
                I'll receive your message directly in my inbox.
              </p>
            </div>

            {/* ================= FORM ================= */}

            <form onSubmit={sendMessage} className="space-y-6">
              {/* Name */}

              <div>
                <label className="uppercase tracking-[3px] text-xs text-gray-400 block mb-3">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="
                    w-full
                    h-14
                    px-5
                    rounded-xl
                    bg-[#111419]
                    border border-white/5
                    text-white
                    placeholder:text-gray-600
                    shadow-[inset_4px_4px_9px_#08090c,inset_-4px_-4px_9px_#1d2128]
                    focus:border-[#FF014F]
                    focus:outline-none
                    transition
                  "
                />
              </div>

              {/* Phone */}

              <div>
                <label className="uppercase tracking-[3px] text-xs text-gray-400 block mb-3">
                  WhatsApp Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className="
                    w-full
                    h-14
                    px-5
                    rounded-xl
                    bg-[#111419]
                    border border-white/5
                    text-white
                    placeholder:text-gray-600
                    shadow-[inset_4px_4px_9px_#08090c,inset_-4px_-4px_9px_#1d2128]
                    focus:border-[#FF014F]
                    focus:outline-none
                    transition
                  "
                />
              </div>

              {/* Message */}

              <div>
                <label className="uppercase tracking-[3px] text-xs text-gray-400 block mb-3">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-xl
                    resize-none
                    bg-[#111419]
                    border border-white/5
                    text-white
                    placeholder:text-gray-600
                    shadow-[inset_4px_4px_9px_#08090c,inset_-4px_-4px_9px_#1d2128]
                    focus:border-[#FF014F]
                    focus:outline-none
                    transition
                  "
                />
              </div>

              {/* Status */}

              {status.message && (
                <div
                  className={`rounded-xl p-4 flex items-start gap-3 ${
                    status.type === "success"
                      ? "bg-green-500/10 border border-green-500/20"
                      : "bg-red-500/10 border border-red-500/20"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2
                      size={22}
                      className="text-green-400"
                    />
                  ) : (
                    <AlertCircle
                      size={22}
                      className="text-red-400"
                    />
                  )}

                  <p
                    className={`text-sm ${
                      status.type === "success"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {status.message}
                  </p>
                </div>
              )}

              {/* Submit Button */}

              <button
                type="submit"
                disabled={loading}
                className="
                  group
                  w-full
                  h-14
                  rounded-xl
                  font-semibold
                  uppercase
                  tracking-[3px]
                  bg-[#15181D]
                  border border-white/5
                  text-white
                  shadow-[8px_8px_18px_#08090c,-8px_-8px_18px_#1d2128]
                  hover:-translate-y-1
                  hover:text-[#FF014F]
                  hover:shadow-[10px_10px_22px_#08090c,-10px_-10px_22px_#252a32]
                  transition-all
                  duration-300
                  disabled:opacity-70
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 transition"
                    />
                  </>
                )}
              </button>
            </form>

            {/* ================= WHY WORK WITH ME ================= */}

            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles
                  size={18}
                  className="text-[#FF014F]"
                />

                <h4 className="text-xl font-bold text-white">
                  Why Work With Me
                </h4>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Production Experience */}

                <div
                  className="
                    rounded-2xl
                    p-4
                    bg-[#111419]
                    border border-white/5
                    shadow-[6px_6px_14px_#08090c,-6px_-6px_14px_#1d2128]
                    hover:-translate-y-1
                    hover:shadow-[8px_8px_18px_#08090c,-8px_-8px_18px_#252a32]
                    transition-all
                  "
                >
                  <Briefcase
                    size={22}
                    className="text-[#FF014F] mb-3"
                  />

                  <h5 className="font-semibold text-white">
                    Production Experience
                  </h5>

                  <p className="text-sm text-gray-400 mt-1">
                    2+ years building real client projects.
                  </p>
                </div>

                {/* Opportunities */}

                <div
                  className="
                    rounded-2xl
                    p-4
                    bg-[#111419]
                    border border-white/5
                    shadow-[6px_6px_14px_#08090c,-6px_-6px_14px_#1d2128]
                    hover:-translate-y-1
                    hover:shadow-[8px_8px_18px_#08090c,-8px_-8px_18px_#252a32]
                    transition-all
                  "
                >
                  <MessageCircle
                    size={22}
                    className="text-[#25D366] mb-3"
                  />

                  <h5 className="font-semibold text-white">
                    Open to Opportunities
                  </h5>

                  <p className="text-sm text-gray-400 mt-1">
                    Full-time and remote collaborations.
                  </p>
                </div>
              </div>

              {/* ================= TECH CHIPS ================= */}

              <div className="mt-8">
                <p className="uppercase tracking-[3px] text-xs text-gray-500 mb-3">
                  Core Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "CI/CD",
                    "Docker",
                    "AWS",
                    "Jira",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-2
                        rounded-full
                        text-xs
                        font-medium
                        bg-[#15181D]
                        text-gray-400
                        border border-white/5
                        shadow-[3px_3px_8px_#08090c,-3px_-3px_8px_#1d2128]
                        hover:text-[#FF014F]
                        transition-colors
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;