import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { songs } from '../constants/songsData';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const songId = parseInt(id);

  const initialSongIndex = songs.findIndex(song => song.id === songId);
  const [currentSongIndex, setCurrentSongIndex] = useState(initialSongIndex !== -1 ? initialSongIndex : 0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const playSong = useCallback((index) => {
    setCurrentSongIndex(index);
    audioRef.current.src = songs[index].audio;
    audioRef.current.load();
    audioRef.current.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(error => {
        console.log("Play error:", error);
        setIsPlaying(false);
      });
  }, []);

  const handlePlayPause = () => {
    if (!isPlaying) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(error => {
          console.log("Play error:", error);
          setIsPlaying(false);
        });
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const playNextSong = () => {
    const newIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(newIndex);
    audioRef.current.src = songs[newIndex].audio;
    setIsPlaying(true);
    audioRef.current.load();
    audioRef.current.oncanplaythrough = () => {
      audioRef.current.play();
    };
    setCurrentTime(0);
  };

  const playPreviousSong = () => {
    let newIndex = currentSongIndex - 1;
    if (newIndex < 0) {
      newIndex = songs.length - 1;
    }
    setCurrentSongIndex(newIndex);
    audioRef.current.src = songs[newIndex].audio;
    setIsPlaying(true);
    audioRef.current.load();
    audioRef.current.oncanplaythrough = () => {
      audioRef.current.play();
    };
    setCurrentTime(0);
  };

  const handleVolumeChange = (event) => {
    const volume = parseFloat(event.target.value);
    setVolume(volume);
    audioRef.current.volume = volume;
  };

  const updateTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSongEnded = () => {
    playNextSong();
  };

  const handleSliderChange = (event) => {
    const seekTime = (event.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (songId) {
      playSong(initialSongIndex);
    }
  }, [songId, initialSongIndex, playSong]);

  const currentSong = songs[currentSongIndex];

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const formatVolume = (volume) => {
    return `${Math.round(volume * 100)}%`;
  };

  return (
    <div
      className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage: `url(${currentSong.image})`,
      }}
    >
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
      >
        Back to List
      </button>
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900">{currentSong.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{currentSong.artist}</p>
          <div className="flex justify-between items-center mb-4">
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              onClick={playPreviousSong}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={handlePlayPause}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              onClick={playNextSong}
            >
              Next
            </button>
          </div>
          <div className="mb-4">
            <label htmlFor="volume-slider" className="block text-sm font-medium text-gray-700">
              Volume ({formatVolume(volume)})
            </label>
            <input
              id="volume-slider"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-100px"
            />
          </div>
          <div>
            <label htmlFor="progress-slider" className="block text-sm font-medium text-gray-700">
              Progress ({formatTime(currentTime)}/{formatTime(duration)})
            </label>
            <input
              id="progress-slider"
              type="range"
              min="0"
              max="100"
              value={duration ? (currentTime / duration) * 100 : 0}
              onChange={handleSliderChange}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onEnded={handleSongEnded}
        preload="auto"
      />
    </div>
  );
};

export default MusicPlayer;
