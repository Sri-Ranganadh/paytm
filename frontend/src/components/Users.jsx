import { useState } from "react";
import {Submit} from "./Submit"
export function Users(){
    const [users , setUsers] = useState([{
        firstName: "Ranganadh",
        lastName: "Sunkara",
        _id: 1
    }])
    return <div className="pl-3">
    <div className="pl-5 font-bold text-xl  ">
        Users
    </div>
    <div className="mx-4 my-2 ">
        <input type="text" placeholder="Search users..." className="w-2/4 px-2 py-1 border rounded-full border-slate-300 "></input>
    </div>
        {users.map((user)=><User user={user}/>)}
    </div>

}
function User({user}){
    return<div className="flex justify-left">
        <div className="flex pl-5 p-1 ">
            <div className="h-10 w-10 rounded-full bg-slate-400 ">
                <div className="flex flex-col justify-center h-full text-2xl p-3 ">
                        {user.firstName[0]}
                </div>

            </div>
            <div className="flex flex-col justify-center p-2 pb-2 pl-3">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center h-full pt-1 pl-7">
            <Submit label={"Send"}  />
        </div>
    </div>
}