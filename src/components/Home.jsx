import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Bienvenido MAESTRO Pokemon</h1>
      <img src="../pokemon.jpg" alt="Pokemon" className="img-fluid" />
      <NavLink to="/pokemon/1" className="btn btn-danger mt-3">Ver Pokemones</NavLink>
    </div>
  );
};

export default Home;

