import React from "react";

export default function Logo({width = '100px'}){
    const picture = "https://i.pinimg.com/736x/c5/b1/d3/c5b1d30cf3f31852453d6cd6512e85e8.jpg";
    return (
        <div className="cursor-pointer">
            <img className="rounded-full w-10 h-10" src={picture} alt="logo" />
        </div>
    )
}
