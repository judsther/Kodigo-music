import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";


export function Library() {
  const [songs, setSongs] = useState([
    { id: 1, title: 'Honey From the Rock', artist: 'Kelsey Breedlove' },
    { id: 2, title: 'Still Rolling Stones', artist: 'Lauren Daigle' },
    { id: 3, title: 'Stars', artist: 'Skillet' },
  ]);

  return (
    <>
 <Navbar/>
 <div className="container mt-5 mb-4">
    <div className="animate__animated animate__fadeIn">
      <h2 className="mb-4 text-light">Library</h2>
      <ul className="list-group">
        {songs.map((song) => (
          <li key={song.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{song.title} - {song.artist}</span>
            <button className="btn btn-outline-success">Play</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
   
    <Footer/>
   
    </>
  );
};


