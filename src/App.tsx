import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "sonner";
import { useState, useEffect } from "react";

import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "@/components/Navbar";
import PageContentLayout from "./layouts/PageContentLayout";

const queryClient = new QueryClient();

// Define route order for determining animation direction
const ROUTE_ORDER = {
  "/": 0,
  "/about": 1,
  "/contact": 2,
};

// PageTransition component to handle both exit and entry animations
const PageTransition = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  const [transitionDirection, setTransitionDirection] = useState("forward");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      // Determine transition direction
      const currentIndex =
        ROUTE_ORDER[location.pathname as keyof typeof ROUTE_ORDER] ?? -1;
      const previousIndex =
        ROUTE_ORDER[displayLocation.pathname as keyof typeof ROUTE_ORDER] ?? -1;

      // Set direction based on route order
      if (currentIndex !== -1 && previousIndex !== -1) {
        setTransitionDirection(
          currentIndex > previousIndex ? "forward" : "backward"
        );
      } else {
        // Default direction if route not in order mapping
        setTransitionDirection("forward");
      }

      // Start exit animation
      setTransitionStage("fadeOut");

      // Wait for exit animation to complete before changing the displayed page
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("fadeIn");
      }, 400); // Increased duration for smoother transition

      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  // Get transition styles based on direction and stage
  const getTransitionStyles = () => {
    // Base styles
    const baseStyles = "transition-all duration-400 ease-custom transform";

    // Combined opacity and transform
    if (transitionStage === "fadeIn") {
      return `${baseStyles} opacity-100 translate-x-0 translate-y-0`;
    } else if (transitionDirection === "forward") {
      return `${baseStyles} opacity-0 translate-x-12 -translate-y-2`;
    } else {
      return `${baseStyles} opacity-0 -translate-x-12 -translate-y-2`;
    }
  };

  return (
    <div
      className={`${getTransitionStyles()} relative w-full flex-grow`}
      style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      <Routes location={displayLocation}>
        <Route
          path="/"
          element={
            <PageContentLayout>
              <Index />
            </PageContentLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PageContentLayout>
              <Contact />
            </PageContentLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PageContentLayout>
              <About />
            </PageContentLayout>
          }
        />
        <Route
          path="*"
          element={
            <PageContentLayout>
              <NotFound />
            </PageContentLayout>
          }
        />
      </Routes>
    </div>
  );
};

// AnimatedRoutes component
const AnimatedRoutes = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <div className="overflow-x-hidden flex-grow">
        <PageTransition />
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
export default App;
