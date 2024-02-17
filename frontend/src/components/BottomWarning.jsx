import { Link } from "react-router-dom"

export function BottomWarning({label,to, btntext}){
    return <div className="text-sm flex justify-center py-2">
        <div>
            {label}
        </div>
        <Link to={to} className="underline cursor-pointer px-1">
            {btntext}
        </Link>
    </div>
}