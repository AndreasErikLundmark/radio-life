import React from "react";

interface Props {
  detectPlay: () => void;
  detectPause: () => void;
  listItems: React.ReactNode;
}
export default function FoldOutPlayer({
  detectPlay,
  detectPause,
  listItems,
}: Props) {
  return (
    <div className="" id="foldOut">
      <ul className="radioButtons">{listItems}</ul>

      <audio
        className="audioPlayer"
        id="radio"
        controls
        onPlay={detectPlay}
        onPause={detectPause}
      >
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
