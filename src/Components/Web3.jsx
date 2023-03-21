import React from "react";
import Group_126 from "../assets/image/Group_126.png";
import Communities from "../assets/image/Communities.png";
import Decentralised from "../assets/image/Decentralised.png";
import Metasky from "../assets/image/Metasky.png";
import WEB3 from "../assets/image/WEB3.png"

const Web3 = () => {
    return (
        <div className="w-[100%] h-[130vh] bg-cover flex relative m-0 z-20" style={{ "backgroundImage": `url(${Group_126})`, "backgroundPosition": "cover", "backgroundColor": "#F5F5F5" }}>
            <div className="w-[50%] pt-[10%] px-[10%]">
                <div className="pb-[20px]">
                    <img src={Communities} alt="" />
                </div>
                <div className="pb-[20px]">
                    <img src={Decentralised} alt="" />
                </div>
                <div className="pb-[20px]">
                    <img src={Metasky} alt="" />
                </div>
            </div>
            <div className="w-[50%] absolute bottom-0 right-0">
            <img src={WEB3} alt="" />
            </div>
        </div>
    )
}

export default Web3