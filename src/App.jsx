import "./App.css";

import Game from "./components/Game";

import { fetchItemImage } from "./api/Items";

// Transformed into
// {
//   id: {
//     name: NAME,
//     image: URL
//   }
// }

const items = {
  pufferfish_bucket: "Bucket of Pufferfish",
  tnt_minecart: "Minecart with TNT",
  saddle: "Saddle",
  diamond_sword: "Diamond Sword",
  elytra: "Elytra",
  coal: "Coal",
  nether_star: "Nether Star",
  clock: "Clock",
  emerald: "Emerald",
  creeper_spawn_egg: "Creeper Spawn Egg",
  armadillo_scute: "Armadillo Scute",
  flint: "Flint",
  leather: "Leather",
  wooden_axe: "Wooden Axe",
  netherite_hoe: "Netherite Hoe",
  name_tag: "Name Tag",
};

for (const id in items) {
  const name = items[id];

  const blob = await fetchItemImage(id);

  items[id] = {
    name: name,
    image: URL.createObjectURL(blob),
  };
}

function App() {
  return (
    <>
      <Game items={items}></Game>
    </>
  );
}

export default App;
