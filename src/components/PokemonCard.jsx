import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonCard = ({ pokemonURL }) => {
  const [pokemon, setPokemon] = useState(null);
  const colorByType = {
    normal: {
      card: "bg-gray-300",
      listItem: "bg-gray-400",
    },
    fighting: {
      card: "bg-red-300",
      listItem: "bg-red-600",
    },
    flying: {
      card: "bg-blue-300",
      listItem: "bg-blue-400",
    },
    poison: {
      card: "bg-purple-400",
      listItem: "bg-purple-500",
    },
    ground: {
      card: "bg-yellow-700",
      listItem: "bg-yellow-800",
    },
    rock: {
      card: "bg-yellow-400",
      listItem: "bg-yellow-500",
    },
    bug: {
      card: "bg-green-400",
      listItem: "bg-green-500",
    },
    ghost: {
      card: "bg-indigo-500",
      listItem: "bg-indigo-600",
    },
    steel: {
      card: "bg-gray-500",
      listItem: "bg-gray-600",
    },
    fire: {
      card: "bg-red-400",
      listItem: "bg-red-500",
    },
    water: {
      card: "bg-blue-400",
      listItem: "bg-blue-500",
    },
    grass: {
      card: "bg-green-300",
      listItem: "bg-green-400",
    },
    electric: {
      card: "bg-yellow-300",
      listItem: "bg-yellow-400",
    },
    psychic: {
      card: "bg-purple-500",
      listItem: "bg-purple-600",
    },
    ice: {
      card: "bg-blue-100",
      listItem: "bg-blue-200",
    },
    dragon: {
      card: "bg-indigo-600",
      listItem: "bg-indigo-700",
    },
    dark: {
      card: "bg-gray-700",
      listItem: "bg-gray-800",
    },
    fairy: {
      card: "bg-pink-300",
      listItem: "bg-pink-400",
    },
    unknown: {
      card: "bg-gray-200",
      listItem: "bg-gray-300",
    },
    shadow: {
      card: "bg-gray-600",
      listItem: "bg-gray-700",
    },
  };

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
