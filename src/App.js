import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes ,
  Route
} from "react-router-dom";
import Details from './components/Details';
import Login from './components/Login';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="detail-doctor-strange-in-the-multiverse-of-madness" element={
              <Details bg="https://images7.alphacoders.com/121/thumb-1920-1213558.jpg" title="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/078277ed-5380-4deb-b166-997beba79634/df0bvfh-a800000f-1d9d-42e0-b1d6-bccab4cef2f3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3ODI3N2VkLTUzODAtNGRlYi1iMTY2LTk5N2JlYmE3OTYzNFwvZGYwYnZmaC1hODAwMDAwZi0xZDlkLTQyZTAtYjFkNi1iY2NhYjRjZWYyZjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iM8oJp_L9pLRomQ0E-QIZ9CAQzUuPyVOjmGcxnFL3fE" subtitle="2 hr 6 min • 2022 • Superhero 13+" description="When the Multiverse is unlocked, Doctor Strange must enlist help form old and new allies in order to confront a surprising adversary."/>} 
            />
            <Route path="detail-loki" element={
              <Details bg="https://terrigen-cdn-dev.marvel.com/content/prod/1x/online_9.jpg" title="https://cdn140.picsart.com/301416800148211.png" subtitle="1 Season • 6 Episodes • Action • 13+ • Marvel" description='Loki resumes his role as the God of Mischief in a new series that takes place after the events of "Avengers: Endgame" '/>}  
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
