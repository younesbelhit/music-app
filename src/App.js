import React, { useState } from "react";
import AudioPlayer from "./components/AudioPlayer";
import tracks from "./db";
import AudioList from "./components/AudioList";
import "./App.css";

const App = () => {
  
  const [data] = useState(tracks);
  const [trackIndex, setTrackIndex] = useState(0);

  const onTrackClick = (uuid) => {
    const index = data.findIndex(o => o.id === uuid);
    setTrackIndex(index);
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };


  console.log(`data`, data);

  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <AudioList tracks={data} trackIndex={trackIndex} onTrackClick={onTrackClick} />
        </div>
        <div className="content">
          <AudioPlayer
            tracks={data}
            trackIndex={trackIndex}
            toPrevTrack={toPrevTrack}
            toNextTrack={toNextTrack}
          />
        </div>
      </div>
    </>
  );
};

export default App;
