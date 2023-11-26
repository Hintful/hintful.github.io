import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const HeroHeader = () => {
    return ( 
        <div className="pt-24 text-3xl font-semibold leading-tight pr-2 text-white">
            <div className="relative z-0 -mb-36 rounded-full blur-[128px] opacity-100 w-48 h-48 bg-blue-500 top-20 -left-10" />
            <div className="relative z-0 -mb-36 rounded-full blur-[96px] opacity-75 w-36 h-48 bg-purple-300 top-20 left-40" />
            <div className="relative z-10">
                <RoughNotationGroup show={true}>
                    <div className="flex-col space-y-3 opacity-95">
                        <div className="z-10">Hello, my name is <div className="inline-block"><p className="text-gradient-primary font-bold">Kurt</p>.</div></div>
                        <div>I'm currently a <RoughNotation type="highlight" color="#3b82f6" multiline="true">Software Engineer</RoughNotation> at <RoughNotation type="underline" color="#3b82f6">Amazon</RoughNotation>.</div>
                    </div>    
                </RoughNotationGroup>
            </div>
      </div>
    );
}
 
export default HeroHeader;