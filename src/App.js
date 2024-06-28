import React from 'react';
import 'tailwindcss/tailwind.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import TodoPage from './components/TodoPage';
import Products from './components/Products';
import Cart from './components/Cart';
import SongList from './components/SongList';
import MusicPlayer from './components/MusicPlayer';
import Counter from './components/Counter';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/music" element={<SongList />} />
          <Route path="/music/:id" element={<MusicPlayer />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
