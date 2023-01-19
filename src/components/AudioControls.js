import React from "react";
import { ReactComponent as Play } from "../assets/svg/play.svg";
import { ReactComponent as Pause } from "../assets/svg/pause.svg";
import { ReactComponent as Next } from "../assets/svg/next.svg";
import { ReactComponent as Prev } from "../assets/svg/prev.svg";

const AudioControls = ({
  isPlaying,
	onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => (
  <div className="audio-controls">
    <button
      type="button"
      className="prev"
      onClick={onPrevClick}
    >
      <Prev />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
      >
        <Pause />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
      >
        <Play />
      </button>
    )}
    <button
      type="button"
      className="next"
      onClick={onNextClick}
    >
      <Next />
    </button>
  </div>
);

export default AudioControls;
