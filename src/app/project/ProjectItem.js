"use client"

import ProjectTag from "./ProjectTag";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { Tooltip } from 'react-tooltip'
import Link from "next/link";

const ProjectItem = (props) => {
    return (  
        <div className="flex-col w-full rounded-lg p-8 space-y-2 backdrop-blur-lg bg-black/25 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
            <div className="flex items-center space-x-2 w-full justify-between">
                <span className="md:text-3xl text-2xl tracking-tight font-semibold">{ props.item.name }</span>
                <div className="flex items-center space-x-1">
                    <Link href={props.item.link} target="_blank">
                        <FontAwesomeIcon className="hover:text-gray-700 transition ease-in-out" icon={faSquareGithub} size="2xl" 
                            data-tooltip-id="github-tooltip" data-tooltip-content="GitHub Repository"
                        />
                    </Link>
                </div>
            </div>
            <div className="flex space-x-1">
                {
                    props.item.tags.map((tag, idx) => (
                        <ProjectTag name={tag} key={idx} />
                    ))
                }
            </div>
            <div className="pt-4">
                <span className="text-sm">
                    { props.item.description }
                </span>
            </div>
            <Tooltip id="github-tooltip" style={{ fontSize: "small" }}/>
        </div>
    );
}
 
export default ProjectItem;