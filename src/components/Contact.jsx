import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
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
      const res = await fetch("https://jatin-portfolio-server.vercel.app/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          type: "success",
          message:
            "Thanks for reaching out! Your message has been sent successfully.",
        });

        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Failed to send your message.",
        });
      }
    } catch (err) {
      console.error(err);

      setStatus({
        type: "error",
        message: "Unable to connect to the server. Please try again later.",
      });
    }

    setLoading(false);

    setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="bg-[#ECF0F3] py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-[#FF014F] text-sm font-medium">
            Contact
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-[#1e2125] mt-3">
            Contact With Me
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-10">

          {/* Left Card */}
          <div
            className="bg-[#ECF0F3] rounded-[30px] p-5
            shadow-[10px_10px_25px_#c8d0e7,-10px_-10px_25px_#ffffff]"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/image/contact1.png"
                alt="Jatin Mehra"
                className="w-full h-72 object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <h3 className="text-4xl font-bold text-[#1e2125] mt-8">
              Jatin Mehra
            </h3>

            <p className="text-gray-500 text-xl mt-2">
              Full Stack Developer
            </p>

            <p className="text-gray-600 leading-9 text-lg mt-8">
              {`I'm a Full Stack Developer with **2 Years 2 Months** of
              professional experience building modern web applications using
              React, Next.js, Node.js, Express, MongoDB, Redis, and AWS.
              I'm available for full-time opportunities and exciting
              development projects.`}
            </p>

            <div className="mt-8 space-y-4 text-lg">
              <p className="text-gray-700">
                <span className="font-semibold">Company:</span> Techsunset
              </p>

              <p className="text-gray-700">
                <span className="font-semibold">Location:</span> Bengaluru
                Electronic City Phase-1
              </p>

              <p className="text-gray-700">
                <span className="font-semibold">Email:</span>{" "}
                jatinmehra8130@gmail.com
              </p>
            </div>

            <div className="mt-12">
              <p className="uppercase tracking-[3px] text-[#1e2125] font-medium mb-6">
                Find With Me
              </p>

              <div className="flex gap-5">

                {/* LinkedIn */}
                <a
                  href="#"
                  className="group w-16 h-16 flex items-center justify-center rounded-xl
                  bg-[#ECF0F3]
                  shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff]
                  hover:-translate-y-1 hover:bg-[#181717]
                  transition duration-300"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
                    alt="LinkedIn"
                    className="w-7 h-7 group-hover:brightness-0 group-hover:invert"
                  />
                </a>

                {/* GitHub */}
                <a
                  href="#"
                  className="group w-16 h-16 flex items-center justify-center rounded-xl
                  bg-[#ECF0F3]
                  shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff]
                  hover:-translate-y-1 hover:bg-[#181717]
                  transition duration-300"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                    alt="GitHub"
                    className="w-7 h-7 group-hover:brightness-0 group-hover:invert"
                  />
                </a>

                {/* Gmail */}
                <a
                  href="#"
                  className="group w-16 h-16 flex items-center justify-center rounded-xl
                  bg-[#ECF0F3]
                  shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff]
                  hover:-translate-y-1 hover:bg-[#181717]
                  transition duration-300"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
                    alt="Email"
                    className="w-7 h-7 group-hover:brightness-0 group-hover:invert"
                  />
                </a>

              </div>
            </div>
          </div>

          {/* Right Form */}
          <div
            className="bg-[#ECF0F3] rounded-[30px] py-8 px-4 md:p-10
            shadow-[10px_10px_25px_#c8d0e7,-10px_-10px_25px_#ffffff]"
          >
            <form onSubmit={sendMessage} className="space-y-8">

              <div className="grid md:grid-cols-2 gap-8">

                <div>
                  <label className="uppercase tracking-[3px] text-sm text-gray-600 mb-3 block">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full h-16 px-5 rounded-xl bg-[#ECF0F3]
                    border border-gray-300
                    focus:border-[#FF014F] focus:outline-none
                    shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]"
                  />
                </div>

                <div>
                  <label className="uppercase tracking-[3px] text-sm text-gray-600 mb-3 block">
                    Phone Number{" "}
                    <span className="text-gray-400">(Optional)</span>
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-16 px-5 rounded-xl bg-[#ECF0F3]
                    border border-gray-300
                    focus:border-[#FF014F] focus:outline-none
                    shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]"
                  />

                  <p className="text-xs text-gray-500 mt-2">
                    Optional — your email is enough. Share your phone number
                    only if you prefer a call.
                  </p>
                </div>

              </div>

              <div>
                <label className="uppercase tracking-[3px] text-sm text-gray-600 mb-3 block">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-16 px-5 rounded-xl bg-[#ECF0F3]
                  border border-gray-300
                  focus:border-[#FF014F] focus:outline-none
                  shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]"
                />
              </div>

              <div>
                <label className="uppercase tracking-[3px] text-sm text-gray-600 mb-3 block">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full h-16 px-5 rounded-xl bg-[#ECF0F3]
                  border border-gray-300
                  focus:border-[#FF014F] focus:outline-none
                  shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]"
                />
              </div>

              <div>
                <label className="uppercase tracking-[3px] text-sm text-gray-600 mb-3 block">
                  Your Message
                </label>

                <textarea
                  rows="8"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-[#ECF0F3]
                  border border-gray-300 resize-none
                  focus:border-[#FF014F] focus:outline-none
                  shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]"
                />
              </div>

              {/* Modern Status Message */}
              {status.message && (
                <div
                  className={`rounded-2xl p-4 flex items-start gap-3
                  shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff]
                  ${
                    status.type === "success"
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="text-green-500 mt-0.5" size={24} />
                  ) : (
                    <AlertCircle className="text-red-500 mt-0.5" size={24} />
                  )}

                  <div>
                    <p
                      className={`font-semibold ${
                        status.type === "success"
                          ? "text-green-700"
                          : "text-red-700"
                      }`}
                    >
                      {status.type === "success"
                        ? "Message Sent"
                        : "Something Went Wrong"}
                    </p>

                    <p
                      className={`text-sm mt-1 ${
                        status.type === "success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {status.message}
                    </p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group w-full h-16 rounded-xl uppercase tracking-[3px]
                text-[#1e2125] font-medium
                bg-[#ECF0F3]
                shadow-[8px_8px_18px_#c8d0e7,-8px_-8px_18px_#ffffff]
                hover:-translate-y-1 hover:text-[#FF014F]
                transition duration-300 flex items-center justify-center gap-3
                disabled:opacity-70 disabled:cursor-not-allowed"
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
