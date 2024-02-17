export function Balance({amount}){
    return <div className="flex p-3">
            <div className="flex  p-3 text-base font-semibold ">
                Your Balance :  
            </div>
            <div className="p-3 text-lg font-bold  ">
            ₹ {amount}
            </div>
    </div>
}   