import "./App.css";

import Game from "./components/Game";

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

function App() {
  return (
    <>
      <Game items={items}></Game>
    </>
  );
}

export default App;
