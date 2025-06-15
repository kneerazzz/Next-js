import React, { useState } from "react";


interface MemeCardProps {
    title: string;
    imageUrl: string;
    creator: {
        username: string;
        profilePic: string;
    };
    tags?: string[];
    likes?: number;
    comments?: number;
}

const memes: MemeCardProps[] = [
    {
        title: "Lock in",
        imageUrl: "memes/meme1.jpg",
        creator: {
            username: "troyy",
            profilePic: "profile.jpg"
        },
        tags: ["cat", "funny", "study"],
        likes: 0,
        comments: 0

    },

    {
        title: "chillin fr",
        imageUrl: "memes/meme2.jpg",
        creator: {
            username: "troyy",
            profilePic: "profile.jpg"
        },
        tags: ["chill", "heaven", "cool"],
        likes: 0,
        comments: 0

    },

    {
        title: "My typa humor fr🤓",
        imageUrl: "memes/meme3.jpg",
        creator: {
            username: "troyy",
            profilePic: "profile.jpg"
        },
        tags: ["indian", "funny", "whatsapp"],
        likes: 0,
        comments: 0
    },

    {
        title: "Overcooked fr",
        imageUrl: "memes/meme4.jpg",
        creator: {
            username: "troyy",
            profilePic: "profile.jpg"
        },
        tags: ["cat", "study", "cooked"],
        likes: 0,
        comments: 0
    },

    {
        title: "type shii sir",
        imageUrl: "memes/meme5.jpg",
        creator: {
            username: "troyy",
            profilePic: "profile.jpg"
        },
        tags: ["chill", "goated", "twin"],
        likes: 0,
        comments: 0
    },


    {
        title: "mahito is me!!",
        imageUrl: "memes/meme6.jpg",
        creator: {
            username: "troyy",
            profilePic: "profile.jpg"
        },
        tags: ["jjk", "funny", "love"],
        likes: 0,
        comments: 0
    },

    {
        title: "typa shii to say in gcs",
        imageUrl: "memes/meme7.jpg",
        creator: {
            username: "troyy",
            profilePic: "profile.jpg"
        },
        tags: ["dickriding", "hate", "funny"],
        likes: 0,
        comments: 0
    },
    
    {
        title: "unc always ready to help me",
        imageUrl: "memes/meme8.jpg",
        creator: {
            username: "troyy",
            profilePic: "profile.jpg"
        },
        tags: ["disabled", "car", ""],
        likes: 0,
        comments: 0
    },
]


export default memes;