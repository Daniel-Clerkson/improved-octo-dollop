import React from "react";

const Video = () => {
  return (
    <div className="flex items-center justify-center m-4 md:m-10">
      <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/ss816P3SvfU?si=l8vGCey0qEiJrOLA&amp;controls=0&amp;start=24"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;