import React from "react";
import memes from "./memeArray";
import MemeCard from "../Shared/memeCard";
import Masonry from "react-masonry-css";
export default function MemeGrid(){


    const breakpointColumnObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    }
    return (
        <Masonry
            className="flex gap-x-5 gap-y-8"
            breakpointCols={breakpointColumnObj}
            columnClassName="masonry-column"
        >
            {memes.map((meme, index) => (
                <MemeCard key={index} {...meme} />
            ))}
        </Masonry>
    )
}