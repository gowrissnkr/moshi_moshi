import React, { useEffect, useState } from "react";
import Group_21 from "../assets/image/Group_21.png"
import Group_111 from "../assets/image/Group_111.png"
import Group_112 from "../assets/image/Group_112.png"
import "../global.css"


const Main = () => {

    const [isFirstImageLoaded, setIsFirstImageLoaded] = useState(false);
    const [isSecondImageLoaded, setIsSecondImageLoaded] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsFirstImageLoaded(true);
        }, 1000); // set a timeout of 1 second before triggering the first animation

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        if (isFirstImageLoaded) {
            setIsSecondImageLoaded(true);
        }
    }, [isFirstImageLoaded]);



    return (
        <>
            <div className="relative h-[110vh] w-[100%] box-border">
                <div className={`absolute top-2 right-[13%] w-[50%] h-[80%] bg-contain bg-center bg-no-repeat z-10 zoom-in-effect ${isFirstImageLoaded ? "opacity-0" : ""
                    }}`} style={{
                        "backgroundImage": `url(${Group_111})`
                    }}>
                </div>
                <div className="absolute w-[50%] top-7 z-0 h-[15%] right-[17%] bg-contain bg-right bg-no-repeat" style={{ "backgroundImage": `url(${Group_21})` }}></div>
                <div className="relative z-20 left-[7%] pt-[6%] w-[50%]">
                    <h2 className="text-[96px] font-extrabold leading-[110px] text-[#000] whitespace-wrap">
                        WE ARE YOUR
                        BRIDGE TO
                        WEB3
                    </h2>
                </div>
                <div className="absolute left-[55%] z-10 bottom-[-15%]">
                    <img src={Group_112} className={`fade-in-up-effect  ${isSecondImageLoaded ? "opacity-100 block" : "opacity-0"}`} alt="" width="200px"/>
                </div>
                <div style={{}} className="absolute left-[49%] w-auto bottom-[10vh] z-50">
                    <div className="mouse" style={{
                        "width": "30px",
                        "height": "60px",
                        "border": "3px solid #333",
                        "borderRadius": "60px",
                        "position": "relative",
                    }}></div>
                </div>
                <div className={`absolute top-[60%] left-[16%] fade-in-up-effect animate-wave ${isSecondImageLoaded ? "opacity-100 block" : "opacity-0"}`}>
                <img src="https://metasky.me/wp-content/uploads/2022/05/Group-344-1024x574.png" alt="" />
                </div>
            </div >
        </>
    )
}

export default Main