import React from "react";

const AudioList = ({ tracks, onTrackClick, trackIndex }) => {
  return (
    <ul className="list-container">
      {tracks.map((track, index) => (
        <li
          key={track.id}
          className={`track-item ${index === trackIndex && "active"}`}
          onClick={() => onTrackClick(track.id)}
        >
          <div className="cover">
            <img
              alt={`track ${track.title} by ${track.artist}`}
              src={track.cover}
              className="track-cover"
            />
          </div>
          <div className="track-info">
            <h4 className="title">{track.name}</h4>
            <span className="artist">{track.artist}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AudioList;
