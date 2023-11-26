import { RoughNotation } from "react-rough-notation";

const HeroTimelineItem = (props) => {
    const BASE_ANIMATION_OFFSET = 1500;

    return (  
        <div>
            <li className="ms-7">
                <span className="-mt-0.5 text-white absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 ring-4 ring-white 
                dark:ring-gray-900 dark:bg-blue-900" >
                    { props.icon }
                </span>
                <div className="pl-2">
                    <h3 className="mb-2 text-md font-semibold text-gray-900 dark:text-white">
                        <RoughNotation show={true} multiline={true} animationDelay={(BASE_ANIMATION_OFFSET + ((props.index + 1) * 300)).toString()}>
                            { props.main }
                        </RoughNotation>
                    </h3>

                    <div className="flex items-center space-x-1 mb-2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 
                            7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        <time className="block text-sm font-normal leading-none dark:text-gray-500">{ props.time }</time>
                    </div>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{ props.content }</p>
                </div>
            </li>
        </div>
    );
}
 
export default HeroTimelineItem;