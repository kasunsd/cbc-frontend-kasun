import { Link } from "react-router-dom"
import UserData from "./userData.jsx"

export default function Header(){
    return(
        <div className="bg-red-200">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/singup">Sing Up</Link>
            <h1 className="font-bold text-[48px]">Crystal Beauty Clear</h1>
            <p className="font-bold text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat praesentium cupiditate dolorum aliquam eligendi vel.</p>
        </div>
    )
}