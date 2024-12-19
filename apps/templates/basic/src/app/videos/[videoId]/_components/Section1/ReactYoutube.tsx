"use client";

import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

import "@abroad/tailwind-config/player.css";

const opts: YouTubeProps["opts"] = {
  playerVars: {
    autoplay: 0,
  },
};

interface IProps {
  videoId: string;
}

const ReactYoutube: React.FC<IProps> = ({ videoId }) => {
  return (
    <div className="my-4 flex justify-center">
      <div className="player">
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
};

export default ReactYoutube;
