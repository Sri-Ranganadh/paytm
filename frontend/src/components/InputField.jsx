export function InputField({label,placeholder}){
    return(
        <div>
            <div className="text-sm font-medium  py-2 text-left">
                {label}
            </div>
            <input placeholder={placeholder} className="placeholder:italic placeholder:text-slate-400 rounded-md border border-slate-200 px-2 py-1 w-full"/>
        </div>
    )
}
