import React from "react";

const HymnCard = ({ hymnTitle, hymnLyrics }) => {
  return (
    <div className="w-90 min-h-28 flex flex-col justify-center bg-blue-100 border border-blue-200 text-blue-900 rounded-xl px-4 py-3 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
      
      <h2 className="text-lg font-semibold text-blue-800 leading-snug">
        {hymnTitle}
      </h2>

      <p className="text-sm text-blue-700 mt-2 line-clamp-2">
        {hymnLyrics}
      </p>

    </div>
  );
};

export default HymnCard;