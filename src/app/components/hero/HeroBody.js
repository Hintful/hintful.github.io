import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const HeroBody = () => {
    return (  
        <div className="text-lg text-white text-opacity-70 space-y-2">
            <RoughNotationGroup show={true}>
                <p>
                    Currently <RoughNotation>working in a Backend focused team</RoughNotation> at <FontAwesomeIcon className="ml-0.5" icon={faAmazon} /> Amazon, my professional experience
                     is mostly from backend development. 
                </p>
                <p>
                    However, I'm also <RoughNotation type={"circle"}>very interested</RoughNotation> in <RoughNotation>frontend development</RoughNotation> and often work on the frontend aspect in personal/group projects.
                </p>
            </RoughNotationGroup>
        </div>
    );
}
 
export default HeroBody;