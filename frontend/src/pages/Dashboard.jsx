import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export function Dashboard(){
    return <div>
        <Appbar/>
        <Balance amount={"987545"}/>
        <Users/>
    </div>
}