import React from "react";
import Link from "next/link";
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

const MemeCard: React.FC<MemeCardProps> = ({
  title,
  imageUrl,
  creator,
  tags = [],
  likes = 0,
  comments = 0,
}) => {
  return (
    <Link 
        href={`/memes/${title}`}
    >
        <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-md mx-auto hover:shadow-lg transition duration-300">
        {/* Image section with aspect ratio maintained */}
            <div className="w-full aspect-[4/3] bg-gray-300">
                <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-contain"
                />
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <button className="p-5 bg-red-500 hover:bg-red-600 text-white cursor-pointer">
                    Save
                </button>
                <button className="p-5 bg-white hover:bg-gray-400 text-white cursor-pointer">
                    ...
                </button>
            </div>
        </div>
    </Link>
  );
};

export default MemeCard;
