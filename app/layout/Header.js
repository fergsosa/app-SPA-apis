import { Menu } from "../components/menu.js";

export function Header() {
  const $header = document.createElement("header");

  $header.appendChild(Menu());

  return $header;
}
