import React from "react";
import LOGO from "../assets/image/LOGO.png"
import Vector_32 from "../assets/image/Vector_32.png"
import Vector_34 from "../assets/image/Vector_34.png"
import Vector_33 from "../assets/image/Vector_33.png"



const Nav = () => {
    return (
        <div className="w-[100%]">
            <nav className="items-center h-[5%] grid grid-cols-2 mx-[6%]">
                <img className="h-[80%] w-auto justify-start ml-[1%]" src={LOGO} alt="" />
                <ul className="list-none grid grid-cols-3 justify-self-end gap-3 mr-[20px]">
                    <li className="no-underline transition ease-out delay-150"><img src={Vector_32} alt="" /></li>
                    <li className="no-underline transition ease-out delay-150"><img src={Vector_34} alt="" /></li>
                    <li className="no-underline transition ease-out delay-150"><img src={Vector_33} alt="" /></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav