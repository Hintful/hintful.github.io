import { useEffect, useRef, useState } from "react";
import { ArrowRight, FileText } from "lucide-react";
import * as motion from "motion/react-client";

const RESUME_URL = "/assets/kurtchoi_cv_25.pdf";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const downloadResume = () => {
    window.open(RESUME_URL, "_blank");
  };

  return (
    <section
      ref={sectionRef}
      className="flex flex-col justify-center items-center min-h-[calc(100vh-120px)] py-12 md:py-20 relative overflow-hidden"
    >
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8 relative">
        <div
          className={`text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-balance mb-6 opacity-0 transform ${
            isVisible ? "animate-fade-up" : ""
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          <span className="block">
            Hello{" "}
            <motion.div
              style={{
                display: "inline-block",
                transformOrigin: "center",
              }}
              animate={{ rotate: [0, 15, -15, 15, -15, 15, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              👋
            </motion.div>
            ,
          </span>
          <span className="block">I'm a</span>
          <span className="antialiased italic text-gradient-highlight tracking-tighter">
            Software Engineer
          </span>
          <span className="block">crafting digital experiences.</span>
        </div>

        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 opacity-0 transform tracking-tight ${
            isVisible ? "animate-fade-up" : ""
          }`}
          style={{ animationDelay: "0.5s" }}
        >
          I build{" "}
          <span className="antialiased italic text-gradient-highlight font-medium">
            elegant, intuitive interfaces
          </span>{" "}
          and robust backend solutions that help businesses thrive in the
          digital world.
        </p>

        <div
          className={`opacity-0 transform ${
            isVisible ? "animate-fade-up" : ""
          }`}
          style={{ animationDelay: "0.7s" }}
        >
          <button
            onClick={downloadResume}
            className="group inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 text-white hover:bg-gradient-to-r hover:from-orange-600 hover:via-purple-600 hover:to-blue-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <FileText className="mr-2 h-4 w-4" />
            View Resume
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
