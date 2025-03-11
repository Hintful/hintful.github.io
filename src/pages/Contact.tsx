import { useState, useEffect } from "react";
import { Mail, MapPin, Linkedin, ExternalLink, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/kurtchoi", "_blank");
    toast({
      title: "Opening LinkedIn",
      description: "Redirecting to LinkedIn profile in a new tab",
    });
  };

  const openGithub = () => {
    window.open("https://github.com/Hintful", "_blank");
    toast({
      title: "Opening GitHub",
      description: "Redirecting to GitHub profile in a new tab",
    });
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${type} Copied!`,
      description: `${text} has been copied to your clipboard.`,
    });
  };

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 opacity-0 tracking-tighter ${
              isVisible ? "animate-fade-up" : ""
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            Let's Connect!
          </h1>

          <p
            className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 tracking-tight ${
              isVisible ? "animate-fade-up" : ""
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Cards */}
          <div
            className={`bg-card rounded-xl p-6 shadow-sm border border-border/50 opacity-0 ${
              isVisible ? "animate-fade-up" : ""
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex flex-col space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground mb-2">
                    choi.kurt3@gmail.com
                  </p>
                  <button
                    onClick={() =>
                      copyToClipboard("choi.kurt3@gmail.com", "Email")
                    }
                    className="text-sm text-primary hover:underline flex items-center"
                  >
                    Copy to clipboard <ExternalLink className="ml-1 w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground">Toronto, ON</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`bg-card rounded-xl p-6 shadow-sm border border-border/50 opacity-0 ${
              isVisible ? "animate-fade-up" : ""
            }`}
            style={{ animationDelay: "0.5s" }}
          >
            <h3 className="text-lg font-medium mb-4">Social Profiles</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <button
                  onClick={openLinkedIn}
                  className="w-full px-4 py-3 bg-[#0077B5] hover:bg-[#0066a1] text-white rounded-md font-medium transition-colors flex items-center justify-center shadow-sm"
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  LinkedIn Profile
                </button>
              </div>

              <div className="flex items-center">
                <button
                  onClick={openGithub}
                  className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md font-medium transition-colors flex items-center justify-center shadow-sm"
                >
                  <Github className="w-5 h-5 mr-3" />
                  GitHub Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-12 text-center opacity-0 ${
            isVisible ? "animate-fade-up" : ""
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-muted-foreground">
            Looking forward to connecting with you and exploring potential
            collaborations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
