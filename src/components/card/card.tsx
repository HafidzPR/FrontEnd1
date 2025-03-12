import React from "react";

interface CardProps {
  imgSrc: string;
  title: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col shaodow h-[400px] rounded-xl">
      <img className="w-sm" src={imgSrc} alt={"project ${title}"} />
      <div className="py-3 px-6 space-y-2">
        <h1 className="font-semibold text-xl">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
