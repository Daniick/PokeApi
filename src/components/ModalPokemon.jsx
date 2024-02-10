import { IconX } from "@tabler/icons-react";
import React from "react";
import { backgroundColorByType, colorByType } from "../constants/pokemon";
import Evolutions from "./Evolutions";

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
      className={`fixed top-0 left-0 right-0  h-screen transition-all duration-300 ${
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
        <header className="absolute  left-1/2 -translate-x-1/2 -translate-y-[80%] scale-[200%]">
          <img src={pokemon?.Image} className="pixelated" alt="" />
        </header>
        <div className="hidden-scroll overflow-y-auto px-4 pt-12 grid gap-2 content-start h-full">
          <span className="text-slate-400 text-sm font-semibold">
            Nº{pokemon?.id}
          </span>
          <h2 className="font-bold text-2xl capitalize">{pokemon?.name}</h2>
          <ul className="flex gap-2 justify-center">
            {pokemon?.types.map((type) => (
              <li
                className={`text-black p-1 rounded-md px-2 ${colorByType[type]?.listItem}`}
                key={type}
              >
                {type}
              </li>
            ))}
          </ul>
          <div>
            <h4 className="font-bold capitalize">Pokedex Entry</h4>
            <p className="text-slate-400 ">{pokemon?.description}</p>
          </div>
          {/* altura y peso */}
          <section className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <h4 className="font-bold capitalize">Height</h4>
              <span className="bg-slate-100 block rounded-full p-1">
                {pokemon?.height}m
              </span>
            </div>
            <div className="grid gap-2">
              <h4 className="font-bold capitalize">Weight</h4>
              <span className="bg-slate-100 block rounded-full p-1">
                {pokemon?.weight}kg
              </span>
            </div>
          </section>
          {/* habilidades */}
          <section className="grid gap-2">
            <h4 className="font-bold capitalize">Abilities</h4>
            <ul className="grid grid-cols-2 gap-4">
              {pokemon?.abilities.map((ability) => (
                <li
                  key={ability}
                  className="bg-slate-100 block rounded-full p-1 capitalize"
                >
                  <span>{ability}</span>
                </li>
              ))}
            </ul>
          </section>
          {/* stats */}
          <section className="grid gap-2">
            <h4 className="font-bold capitalize">stats</h4>
            <ul className="flex justify-center gap-3 flex-wrap">
              {pokemon?.stats.map((stat) => (
                <li
                  key={stat.name}
                  className={` p-1  rounded-full ${colorByStat[stat.name]}`}
                >
                  <div className=" rounded-full w-[28px] aspect-square grid place-content-center">
                    <span className="text-xs text-white font-semibold">
                      {stat.name}
                    </span>
                  </div>
                  <span className="font-semibold text-sm">
                    {stat.base_stat}
                  </span>
                </li>
              ))}
            </ul>
          </section>
          <section className="grid gap-2">
            <h4 className="font-bold capitalize mt-2">Evolutions</h4>
            <Evolutions evolutions={pokemon?.evolutions ?? []} />
          </section>
        </div>
      </article>
    </section>
  );
};

export default ModalPokemon;
