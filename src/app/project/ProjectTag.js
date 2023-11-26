import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faDocker, faJs, faPython } from '@fortawesome/free-brands-svg-icons';

const ProjectTag = (props) => {
    const getIcon = name => {
        switch (name) {
            case "React":
                return <FontAwesomeIcon icon={faReact} />
            case "Node.js":
                return <FontAwesomeIcon icon={faNodeJs} />
            case "Docker":
                return <FontAwesomeIcon icon={faDocker} />
            case "Javascript":
                return <FontAwesomeIcon icon={faJs} />
            case "Python":
                return <FontAwesomeIcon icon={faPython} />
            default:
                return <span />
        }
    }

    return (  
        <div className="flex border rounded-xl pl-2 pr-2.5 py-1 w-fit text-xs hover:cursor-default hover:bg-white hover:text-black transition ease-in-out duration-100">
            <span className="pr-1">{ getIcon(props.name) }</span>
            <span>{ props.name }</span>
        </div>
    );
}
 
export default ProjectTag;