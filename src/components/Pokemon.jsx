import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/Pokemon.css';

const Pokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => setPokemon(response.data))
        .catch(error => console.error('Error fetching data: ', error));
    }
  }, [id]);

  const handleNavigate = (newId) => {
    navigate(`/pokemon/${newId}`);
  };

  return (
    <div className="container mt-5 text-center">
      
      {pokemon ? (
        <div>
          <h1 className="mb-4">{pokemon.name.toUpperCase()}</h1>
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} className="img-fluid pokemon-image" />
            </div>
            <div className="ms-4">
              <h2>Habilidades:</h2>
              <ul>
                {pokemon.abilities.map(ability => (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
              </ul>
              <h2>Estadísticas:</h2>
              <ul>
                {pokemon.stats.map(stat => (
                  <li key={stat.stat.name}>
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <button 
              onClick={() => handleNavigate(Number(id) - 1)} 
              className="btn btn-primary me-2"
              disabled={Number(id) === 1}
            >
              Anterior
            </button>
            <button 
              onClick={() => handleNavigate(Number(id) + 1)} 
              className="btn btn-primary"
            >
              Siguiente
            </button>
          </div>
          <button onClick={() => navigate('/')} className="btn btn-danger mb-3">Ir a Home</button>
        </div>
        
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Pokemon;





