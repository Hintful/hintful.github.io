import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PageContentLayoutProps {
  children: React.ReactNode;
}

const PageContentLayout = ({ children }: PageContentLayoutProps) => {
  const location = useLocation();
  const childrenElements = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clear any existing animations first
    if (childrenElements.current) {
      const elements = Array.from(childrenElements.current.children);
      elements.forEach((el) => {
        const element = el as HTMLElement;
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "none"; // Remove transitions temporarily
      });
    }

    // Small delay to start animations after page transition begins
    const animationDelay = setTimeout(() => {
      // Animate children with staggered delay
      if (childrenElements.current) {
        const elements = Array.from(childrenElements.current.children);
        elements.forEach((el, index) => {
          const element = el as HTMLElement;

          setTimeout(() => {
            element.style.transition =
              "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
          }, 450 + index * 120); // Staggered delay starting after page transition
        });
      }
    }, 100);

    // Scroll to top on route change
    window.scrollTo(0, 0);

    return () => {
      clearTimeout(animationDelay);
    };
  }, [location.pathname]);

  return (
    <ScrollArea className="flex-grow">
      <main className="px-4 sm:px-6 md:px-8 lg:px-16 mx-auto w-full max-w-[1400px] relative min-h-[calc(100vh-80px)] py-12">
        <div ref={childrenElements} className="space-y-6">
          {children}
        </div>
      </main>
    </ScrollArea>
  );
};

export default PageContentLayout;
