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
const backgroundColorByType = {
  normal: "bg-gray-300",
  fighting: "bg-red-300",
  flying: "bg-blue-300",
  poison: "bg-purple-400",
  ground: "bg-yellow-700",
  rock: "bg-yellow-400",
  bug: "bg-green-400",
  ghost: "bg-indigo-500",
  steel: "bg-gray-500",
  fire: "bg-red-400",
  water: "bg-blue-400",
  grass: "bg-green-300",
  electric: "bg-yellow-300",
  psychic: "bg-purple-500",
  ice: "bg-blue-100",
  dragon: "bg-indigo-600",
  dark: "bg-gray-700",
  fairy: "bg-pink-300",
  unknown: "bg-gray-200",
  shadow: "bg-gray-600",
};

const colorByStat = {
  HP: "[&>div]:bg-red-500 bg-slate-100",
  ATK: "[&>div]:bg-orange-500 bg-slate-100",
  DEF: "[&>div]:bg-yellow-500 bg-slate-100",
  SpA: "[&>div]:bg-blue-300 bg-slate-100",
  undefined: "[&>div]:bg-green-300 bg-slate-100",
  SPD: "[&>div]:bg-pink-300 bg-slate-100",
  TOT: "[&>div]:bg-blue-500 bg-blue-300",
};

export { colorByType, backgroundColorByType, colorByStat };
