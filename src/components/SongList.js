import React from 'react';
import { Link } from 'react-router-dom';
import { songs } from '../constants/songsData';

const SongList = () => {

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">Song List</h1>
      <ul className="divide-y divide-gray-200">
        {songs.map((song) => (
          <li key={song.id} className="py-4 flex items-center">
            <img src={song.image} alt={song.title} className="w-16 h-16 object-cover rounded" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900">{song.title}</h3>
              <p className="text-sm text-gray-600">{song.artist}</p>
            </div>
            <div className="ml-auto">
              <Link
                to={`/music/${song.id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Play
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
