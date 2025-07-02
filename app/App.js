import { Router } from "./routers/router.r.js";
import { InfiniteScroll } from "./helpers/infinete-scroll.js";
import { Header } from "./layout/Header.js";
import { Main } from "./layout/Main.js";
import { Loader } from "./layout/Loader.js";

export default function App() {
  const $root = document.getElementById("root");

  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Loader());

  Router();
  InfiniteScroll();
}
