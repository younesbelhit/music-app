import React, { 
  useEffect,
  useState, 
  useRef
} from "react";
import AudioControls from "./AudioControls";

const AudioPlayer = ({ 
  tracks, 
  toPrevTrack, 
  toNextTrack, 
  trackIndex 
}) => {

  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { name, artist, cover, audio } = tracks[trackIndex];
  const audioRef = useRef(new Audio(audio));

  const { duration } = audioRef.current;

  const intervalRef = useRef();
  const isReady = useRef(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audio);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      setIsPlaying(false);
    }
  }, [trackIndex, audio]);

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTrackProgress(audioRef.current.currentTime);
    }, [1000]);
  };

  return (
    <div className="audio-player">
      <div className="track-info">
        <img
          className="artwork"
          src={cover}
          alt={`track ${name} by ${artist}`}
        />
        <h2 className="title text-center">{name}</h2>
        <h3 className="artist text-center">{artist}</h3>
      </div>
      <input
        type="range"
        value={trackProgress}
        step="1"
        min="0"
        max={duration ? duration : `${duration}`}
        className="progress"
        readOnly
      />
      <AudioControls
        isPlaying={isPlaying}
        onPrevClick={toPrevTrack}
        onNextClick={toNextTrack}
        onPlayPauseClick={setIsPlaying}
      />
    </div>
  );
};

export default AudioPlayer;
