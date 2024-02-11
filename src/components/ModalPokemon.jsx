import { IconX } from "@tabler/icons-react";
import React from "react";
import { backgroundColorByType, colorByType } from "../constants/pokemon";
import Evolutions from "./Evolutions";
import PokemonDetail from "./PokemonDetail";

const colorByStat = {
  HP: "[&>div]:bg-red-500 bg-slate-100",
  ATK: "[&>div]:bg-orange-500 bg-slate-100",
  DEF: "[&>div]:bg-yellow-500 bg-slate-100",
  SpA: "[&>div]:bg-blue-300 bg-slate-100",
  undefined: "[&>div]:bg-green-300 bg-slate-100",
  SPD: "[&>div]:bg-pink-300 bg-slate-100",
  TOT: "[&>div]:bg-blue-500 bg-blue-300",
};

const ModalPokemon = ({ showModal, onCloseModal, pokemon }) => {
  console.log(pokemon);

  return (
    <section
      className={`fixed lg:hidden top-0 left-0 right-0  h-screen transition-all duration-300 ${
        showModal ? "visible opacity-100" : "invisible opacity-0"
      } ${backgroundColorByType[pokemon?.types[0]]}`}
    >
      <button
        onClick={onCloseModal}
        className="bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity"
      >
        <IconX size={32} stroke={4} />
      </button>

      <article
        className={`bg-white h-[85%] absolute w-full   rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-700   ${
          showModal ? "bottom-0" : "-bottom-full"
        }`}
      >
        <PokemonDetail pokemon={pokemon} />
      </article>
    </section>
  );
};

export default ModalPokemon;
