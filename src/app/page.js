import ResumeButton from "./components/buttons/ResumeButton";
import HeroBody from "./components/hero/HeroBody";
import HeroHeader from "./components/hero/HeroHeader";
import HeroTimeline from "./components/hero/timeline/HeroTimeline";

export default function Home() {
  return (
    <div className="flex-col mt-4 text-white space-y-16 backdrop-blur-none">
      <HeroHeader />
      <HeroBody />
      <ResumeButton />
      <HeroTimeline />
    </div>
  )
}
