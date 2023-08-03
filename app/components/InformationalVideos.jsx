import React from "react";
import Link from "next/link";
const InformationalVideos = () => {
  return (
    <div className="p-4">
      <p className="text-center font-bold text-xl">
        Featured Informational Videos
      </p>
      <p className="text-center font-bold text-2xl">_____</p>
      <div className="flex items-center justify-center flex-wrap gap-6">
        <div className="p-2 border shadow-md w-[350px]">
          <iframe className="m-auto md:h-[290px] md:w-[290px]"
            
            width="250"
            height="315"
            src="https://www.youtube.com/embed/1B979zACFjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <p className="text-center mt-2 font-semibold">Health Equity Animated: Race (Center for Prevention MN)</p>
        </div>
        <div className="p-2 border shadow-md w-[350px]">
          <iframe className="m-auto  md:h-[290px] md:w-[290px]"
            width="250"
            height="315"
            src="https://www.youtube.com/embed/1B979zACFjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <p className="text-center mt-2 font-semibold">Health Equity Animated: Race (Center for Prevention MN)</p>
        </div>
        <div className="p-2 border shadow-md w-[350px]">
          <iframe className="m-auto  md:h-[290px] md:w-[290px]"
            width="250"
            height="315"
            src="https://www.youtube.com/embed/1B979zACFjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <p className="text-center mt-2 font-semibold">Health Equity Animated: Race (Center for Prevention MN)</p>
        </div>
      </div>
    </div>
  );
};

export default InformationalVideos;
