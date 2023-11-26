import ProjectItem from "./ProjectItem";

const Page = () => {
    const projects = [
        {
            name: "aram.tools",
            tags: ["React", "Node.js", "Docker"],
            link: "https://github.com/Hintful/aram.tools",
            description: "A full-stack web application that analyzes and visualizes users' performance for a popular online game, League of Legends."
        }
    ]

    return ( 
        <div className="flex-col mt-60 text-white space-y-12 relative h-screen">
            {/* <span className="text-white text-2xl">Projects</span> */}
            <div className="absolute z-0 -mb-36 rounded-full blur-[128px] opacity-100 w-48 h-48 bg-blue-500 top-20 -left-10" />
            <div className="absolute z-0 -mb-36 rounded-full blur-[96px] opacity-75 w-36 h-48 bg-purple-300 top-20 left-40" />
            <div className="flex-col z-10">
                {
                    projects.map((project, idx) => (
                        <ProjectItem item={project} key={idx} />
                    ))
                }
            </div>
        </div>
     );
}
 
export default Page;