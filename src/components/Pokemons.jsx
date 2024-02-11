import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { IconSearch } from "@tabler/icons-react";
import PokemonList from "./PokemonList";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const INITIAL_LIMIT = 40;
const INCRASE_LIMIT = 20;

export default function Pokemons() {
  const [allPokemons, setAllPokemos] = useState([]);
  const [pokemonName, setpokemonName] = useState("");
  const [limit, setlimit] = useState(INITIAL_LIMIT);

  const targetObserver = useRef(null);
  const entry = useIntersectionObserver(targetObserver, {});
  const isVisible = !!entry?.isIntersecting;

  const pokemosByName = allPokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName)
  );

  const handleChangePokemonName = (e) =>
    setpokemonName(e.target.value.toLowerCase());

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=898")
      .then(({ data }) => setAllPokemos(data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const maxPokemons = pokemosByName.length;
    if (isVisible && maxPokemons != 0) {
      const newLimit = limit + INCRASE_LIMIT;
      newLimit > maxPokemons ? setlimit(maxPokemons) : setlimit(newLimit);
    }
  }, [isVisible]);

  useEffect(() => {
    setlimit(INITIAL_LIMIT);
  }, [pokemonName]);

  return (
    <section className="p-4 py-5 ">
      <form action="">
        <div className="bg-white p-4 flex rounded-2xl text-lg ">
          <input
            type="text"
            autoComplete="off"
            className="outline-none flex-1"
            placeholder="Search your Pokemon"
            name="pokemonName"
            onChange={handleChangePokemonName}
          />
          <button
            type="button"
            className="bg-red-500 p-2 rounded-xl shadow-lg shadow-red-500/50 hover:bg-red-400 transition-colors"
          >
            <IconSearch color="white" stroke={3} />
          </button>
        </div>
      </form>
      <PokemonList pokemons={pokemosByName.slice(0, limit)} />
      {/* observer*/}
      <span ref={targetObserver}></span>
    </section>
  );
}
//? forma no controlada
// const handleSubmit = (e) => {
//   e.preventDefault();
//   setpokemonName(e.target.pokemonName.value.toLowerCase());
// };
