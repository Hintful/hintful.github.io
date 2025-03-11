import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollArea className="flex-grow">
        <main
          className={`px-4 sm:px-6 md:px-8 lg:px-16 mx-auto w-full max-w-[1400px] ${
            isTransitioning ? "opacity-0" : "opacity-100 animate-fade-in"
          }`}
          style={{ transitionDuration: "400ms" }}
        >
          {children}
        </main>
      </ScrollArea>
    </div>
  );
};

export default MainLayout;
