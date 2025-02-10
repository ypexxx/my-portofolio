import React, { useState, useEffect, useMemo, memo } from "react";
import { FileText, Code, Award, Globe } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = memo(() => (
  <div className="text-center mb-2 lg:mb-8 px-[5%]">
    <div className="inline-block relative group">
      <h2
        className="text-4xl md:text-5xl font-bold text-black"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        About <span className="text-[#ff8046]">Me</span>
      </h2>
    </div>
    <p
      className="mt-2 text-black/80 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="600"
    >
      Transforming ideas into digital experiences
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center lg:px-4 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      <div className="relative">
        <div className="absolute inset-0 border-4 border-black/40 rounded-full z-20 transition-all duration-700"></div>
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden transform transition-all duration-700 group-hover:scale-105">
          <img
            src="/profile.png"
            alt="Profile"
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
          ></img>
        </div>
      </div>
    </div>
  </div>
));

const StatCard = memo(({ icon: Icon, value, description, animation }) => (
  <div data-aos={animation} data-aos-duration={1300} className="relative group">
    <div className="relative z-10 bg-white backdrop-blur-lg rounded-2xl p-6 border border-black/20 overflow-hidden transition-all duration-300 hover:scale-105 shadow-md hover:shadow-2xl hover:bg-[#FB9C71]/15 h-full flex flex-col justify-between">
      <div></div>
      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white transition-transform group-hover:rotate-6">
          <Icon className="w-8 h-8 text-[#ff8046]" />
        </div>
        <span className="text-4xl font-bold text-[#ff8046]">{value}</span>
      </div>

      <div>
        <p
          className="text-xs text-black"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        >
          {description}
        </p>
      </div>
    </div>
  </div>
));

const About = () => {
  const [isHovering, setIsHovering] = useState(false);
  const { totalProjects, totalCertificates, yearExperience } = useMemo(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const storedCertificates = JSON.parse(
      localStorage.getItem("certificates") || "[]"
    );

    const startDate = new Date("2023-06-30");
    const today = new Date();
    const experience =
      today.getFullYear() -
      startDate.getFullYear() -
      (today <
      new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate())
        ? 1
        : 0);

    return {
      totalProjects: storedProjects.length,
      totalCertificates: storedCertificates.length,
      yearExperience: experience,
    };
  }, []);

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false,
      });
    };

    initAOS();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const statsData = useMemo(
    () => [
      {
        icon: Code,
        color: "from-[#6366f1] to-[#a855f7]",
        value: totalProjects,
        label: "Total Projects",
        description: "Innovative web solution crafted",
        animation: "fade-up",
      },
      {
        icon: Award,
        color: "from-[#a855f7] to-[#6366f1]",
        value: totalCertificates,
        label: "Certificates",
        description: "Professional skills validated",
        animation: "fade-up",
      },
      {
        icon: Globe,
        color: "from-[#6366f1] to-[#a855f7]",
        value: yearExperience,
        label: "Years of Experience",
        description: "Continuous learning journey",
        animation: "fade-left",
      },
    ],
    [totalProjects, totalCertificates, yearExperience]
  );

  const lottieOptions = {
    src: "https://lottie.host/e5941e40-13e5-4a75-a0f0-fab4b67bd2d4/hIAChDOc5s.lottie",
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      progressiveLoad: true,
    },
    style: { width: "100%", height: "100%" },
    className: `w-full h-full transition-all duration-500 ${
      isHovering
        ? "scale-[180%] sm:scale-[160%] md:scale-[150%] lg:scale-[145%] rotate-2"
        : "scale-[175%] sm:scale-[155%] md:scale-[145%] lg:scale-[140%]"
    }`,
  };

  return (
    <div id="About" className="h-auto pb-[10%] text-black overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm:mt-0">
      <Header />
      <div className="w-full h-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-black">Hello, I'm</span>
              <span
                className="block mt-2 text-black"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Yuafiq Alfin A.K
              </span>
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl text-black/80 leading-relaxed text-justify pb-4 sm:pb-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              I'm a Web Developer based in Yogyakarta, Indonesia. I have
              experience developing various types of web/application. Passionate
              about crafting user-friendly and high-performance web, I always
              strive to stay updated with the latest technologies.
            </p>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:px-0 w-full">
              <a href="" className="w-full lg:w-auto">
                <button
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-[#FB9C71] text-black font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV{" "}
                </button>
              </a>
              <a href="" className="w-full lg:w-auto">
                <button
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-[#FB9C71] text-black font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl"
                >
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects{" "}
                </button>
              </a>
            </div>
          </div>
          <div className="lg:hidden">
            <ProfileImage />
          </div>
          <div
            className="w-full py-[10%] sm:py-0 lg:w-full h-auto lg:h-[400px] xl:h-[450px] relative lg:flex items-center justify-center order-2 hidden lg:order-2 mt-8 lg:mt-0"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <div className="relative w-full opacity-90">
              <div
                className={`absolute inset-0 bg-gradient-to-r from-[#FB9C71]/30 to-[#FB9C71]/30 rounded-3xl blur-3xl transition-all duration-700 ease-in-out ${
                  isHovering ? "opacity-30 scale-105" : "opacity-20 scale-100"
                }`}
              ></div>

              <div
                className={`relative z-10 w-full opacity-90 transform transition-transform duration-500 ${
                  isHovering ? "scale-135" : "scale-130"
                }`}
              >
                <DotLottieReact {...lottieOptions} />
              </div>

              <div
                className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
                  isHovering ? "opacity-50" : "opacity-20"
                }`}
              >
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 ${
                    isHovering ? "scale-110" : "scale-100"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <a>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
            {statsData.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </a>
      </div>
    </div>
  );
};

export default memo(About);
