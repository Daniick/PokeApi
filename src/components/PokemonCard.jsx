import React, { useEffect, useState } from "react";
import axios from "axios";
import { colorByType } from "../constants/pokemon";

const PokemonCard = ({ pokemonURL, onClick }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(pokemonURL)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err));
  }, [pokemonURL]);

  if (!pokemon) {
    return null;
  }

  return (
    <article
      onClick={() => onClick(pokemon)}
      className={`text-black text-center backdrop-blur-sm rounded-[30px] relative font-semibold capitalize pb-4 
      shadow-xl shadow-zinc-500/60 border-2 border-transparent hover:border-black cursor-pointer group grid gap-2
      ${colorByType[pokemon.types[0].type.name].card}`}
    >
      <header className="h-8">
        <img
          className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 group-hover:scale-110 transition-transform pixelated"
          src={
            pokemon.sprites.versions["generation-v"]["black-white"]
              .front_default
          }
          alt={`Front view of ${pokemon.name}`}
        />
      </header>
      <span className="text-sm text-slate-400">Nº {pokemon.id}</span>
      <h4 className="text-lg">{pokemon.name}</h4>
      <ul className="flex gap-2 justify-center">
        {pokemon.types.map((type) => (
          <li
            className={`text-white p-1 rounded-md px-2 ${
              colorByType[type.type.name].listItem
            }`}
            key={type.type.name}
          >
            {type.type.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PokemonCard;
