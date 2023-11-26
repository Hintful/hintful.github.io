import HeroTimelineItem from "./HeroTimelineItem";
import { RoughNotation } from "react-rough-notation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, faTerminal, faStar, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

const HeroTimeline = () => {
    const timelineItems = [
        {
            main: "Software Development Engineer @ Amazon",
            time: "Oct. 2021 - Present",
            content: "Part of backend team owning Amazon Kids+ subscription core technologies, serving over 10 million customers around the world",
            icon: <FontAwesomeIcon className="h-4 w-4" icon={faAmazon} />
        },
        {
            main: "Graduated from University of Waterloo",
            time: "June. 2021",
            content: "Graduated with a BCS in Computer Science at University of Waterloo",
            icon: <FontAwesomeIcon className="h-4 w-4" icon={faGraduationCap} />
        },
        {
            main: "First experience with coding",
            time: "2010",
            content: "My first experience with coding with C/C++ - eventually also participated in Canadian Computing Contest (CCC) Junior Division in 2011,\
             placing Top 10 country-wide",
            icon: <FontAwesomeIcon className="h-3.5 w-3.5" icon={faTerminal} />
        },
        {
            main: "Immigrated to Canada",
            time: "2007",
            content: "Immigrated over to Canada with my family in 2007",
            icon: <FontAwesomeIcon className="h-3.5 w-3.5" icon={faPlaneDeparture} />
        },
        {
            main: "Born in South Korea",
            time: "1995",
            content: "I was born in South Korea in 1995, and my interest in computers date all the way before Y2K in 2000 as I was fascinated by computers \
            as early as age 3-4 when my dad first brought home a Macintosh",
            icon: <FontAwesomeIcon className="h-4 w-4" icon={faStar} />
        }
    ]
    return ( 
        <div>
            <div className="relative z-0 -mb-36 rounded-full blur-[160px] opacity-100 w-48 h-48 bg-blue-500 top-72 left-72" />
            <div className="relative z-0 -mb-36 rounded-full blur-[120px] opacity-75 w-36 h-48 bg-purple-300 top-96 left-48" />
            <div className="flex-col space-y-8 z-10">
                <span className="text-2xl tracking-tight font-semibold"><RoughNotation color="#3b82f6" animationDelay="1500" show={true}>Timeline</RoughNotation></span>
                <ol className="relative border-s border-gray-200 dark:border-gray-700 space-y-8">
                    { timelineItems.map((item, idx) => {
                        return <HeroTimelineItem main={item.main} time={item.time} content={item.content} icon={item.icon} index={idx} key={idx} />
                    })}
                </ol>
            </div>
        </div>
        
    );
}
 
export default HeroTimeline;