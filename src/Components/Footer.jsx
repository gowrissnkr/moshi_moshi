import React from "react";
import Group_116 from "../assets/image/Group_116.png"
import Group_118 from "../assets/image/Group_118.png"

const Footer = () => {
    return (
        <div>
            <div className="mt-[10%]">
                <div class="animate-wave px-[10%]">
                    <div className="">
                        <img src="https://metasky.me/wp-content/uploads/2022/05/Frame-118-1024x504.png" className="" alt="" />
                    </div>
                </div>
                <div className="w-[100%] flex justify-center gap-10">
                    <button className="bg-[#ffd318] rounded-[60px] p-[20px] text-[#151515]" >JOIN OUR TEAM</button>
                    <button className=" border border-[#151515] rounded-[60px] p-[20px] text-[#151515]" >BUSINESS ENQUIRES</button>
                </div>
                <div className="flex justify-center text-center mt-[10px] px-[10px]">
                    <img src={Group_116} alt="" width="700px" height="700px" />
                </div>
            </div>
        </div>
    )
}

export default Footer