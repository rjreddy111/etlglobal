import {LayoutDashboard,Search,Mail,ChartNoAxesColumn,Settings} from "lucide-react"

import "./index.css"

const NavigationLink = ()=> {

    return (
    <ul className="list-styling">
        <li className="each-list-item"> <LayoutDashboard size = {20}/>Dashboard</li>
        <li  className="each-list-item not_selected"> <Search size = {20} color={"#EC6316"}/>Find</li>
        <li className="each-list-item not_selected"> <Mail size = {20} color={"#EC6316"}/>Inbox</li>
        <li className="each-list-item not_selected"> <ChartNoAxesColumn size = {20} color={"#EC6316"}/>Analytics</li>
        <li className="each-list-item not_selected"> <Settings size = {20} color={"#EC6316"} />Settings</li>
    </ul>
    )
}



export default NavigationLink