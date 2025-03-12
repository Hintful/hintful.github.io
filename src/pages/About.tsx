import { useState, useEffect } from "react";
import {
  Briefcase,
  Code,
  GraduationCap,
  Book,
  Server,
  Building2,
} from "lucide-react";

// Experience data with company icons
const experiences = [
  {
    title: "Software Engineer",
    company: "Cresta",
    period: "Mar 2024 - Present",
    description:
      "📍Building Director platform - revolutionizing the contact center industry with our cutting-edge, AI-powered platform. ",
    skills: ["React", "TypeScript", "Go", "PostgreSQL"],
    icon: <Building2 size={16} />,
  },
  {
    title: "Software Development Engineer",
    company: "Amazon",
    period: "Oct 2021 - Mar 2024",
    description:
      "📍Amazon Kids+ backend subscriptions core technology team - enhancing the experience of 10 million+ customers around the world.",
    skills: ["Java", "AWS", "PostgreSQL"],
    icon: <Building2 size={16} />,
  },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h1
          className={`text-3xl md:text-4xl font-display font-bold mb-2 opacity-0 tracking-tight ${
            isVisible ? "animate-fade-up" : ""
          }`}
          style={{ animationDelay: "0.1s" }}
        >
          About Me
        </h1>

        {/* Decorative line */}
        <div
          className={`h-1 w-20 bg-primary/70 rounded-full mb-8 opacity-0 ${
            isVisible ? "animate-fade-up" : ""
          }`}
          style={{ animationDelay: "0.2s" }}
        ></div>

        {/* Bio section */}
        <div
          className={`prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none mb-12 opacity-0 ${
            isVisible ? "animate-fade-up" : ""
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 rounded-full bg-primary/20"></div>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              A passionate software engineer with over 3 years of experience
              crafting web applications that solve real-world problems. My
              journey began at age 5 when my father brought home a Macintosh
              computer, igniting a lifelong fascination with technology.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              I specialize in creating seamless user experiences through clean,
              efficient code. My approach blends technical expertise with deep
              user empathy, resulting in products that are both highly
              functional and delightful to use. I thrive when building solutions
              that I personally use and believe in.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Beyond the keyboard, you'll find me at home immersed in music,
              conquering virtual worlds in video games, or exploring content on
              YouTube. To balance my digital life, I challenge myself at the
              local bouldering gym and enjoy refreshing jogs outdoors.
            </p>
          </div>
        </div>

        {/* Experience section with timeline */}
        <div
          className={`mb-16 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.5s" }}
        >
          <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 flex items-center tracking-tight">
            <Briefcase className="mr-2" />
            Experience
          </h2>

          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-3 top-2 bottom-10 w-0.5 bg-primary/20"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10">
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                    {exp.icon}
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground flex items-center gap-1">
                      <span className="font-medium">{exp.company}</span> •{" "}
                      {exp.period}
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-sm md:text-base">{exp.description}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-0.5 bg-secondary/50 text-secondary-foreground rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div
          className={`opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "1s" }}
        >
          <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 flex items-center tracking-tight">
            <GraduationCap className="mr-2" />
            Education
          </h2>

          <div className="bg-secondary/10 p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-lg font-semibold">BCS in Computer Science</h3>
            <p className="text-muted-foreground">
              University of Waterloo • June 2021
            </p>
            <p className="mt-2 text-sm md:text-base">
              Specialized in Computer Science technologies.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <Book size={16} className="mr-1.5" />
                <span>Data Structures</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Code size={16} className="mr-1.5" />
                <span>Algorithms</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Server size={16} className="mr-1.5" />
                <span>Databases</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
