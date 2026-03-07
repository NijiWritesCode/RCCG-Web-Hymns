import React from 'react'

const HymnCard = ({hymnTitle, hymnLyrics}) => {
  return (
    <div className="w-90 h-25 flex flex-col justify-center bg-blue-300 text-blue-800 rounded-lg px-3 py-2">
        <h2 className="text-xl text-blue-700 font-semibold">
            {hymnTitle}
        </h2>
        <p className="text-sm mt-3 text-blue-700">
            {hymnLyrics}
        </p>
    </div>
  )
}

export default HymnCard