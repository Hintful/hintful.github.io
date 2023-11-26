const { default: Link } = require("next/link")

const Logo = () => {
    return ( 
        <Link href="/">
            <div className="text-xl font-bold select-none transition duration-75 ease-in-out tracking-tighter text-slate-200">
                <span className="gradient-underline">Kurt Choi</span>
                <span className="text-slate-500 text-base">.dev</span>
            </div>
        </Link>
    );
}
 
export default Logo;