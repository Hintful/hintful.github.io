import Link from "next/link";

const ResumeButton = () => {
    return (
        <div className="w-fit">
            <Link href="/cv.pdf" target="_blank">
                <div className="flex relative rounded-full w-fit py-2 pl-4 pr-3 cursor-pointer items-center justify-center bg-blue-500 transition-all duration-150 ease-in-out hover:gradient-primary">
                    <div className="flex justify-items-center items-center opacity-100 space-x-1">
                        <span className="text-sm font-semibold">
                            View Resume
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </Link>
        </div>
        
    );
}
 
export default ResumeButton;