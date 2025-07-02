import { Menu } from "../components/Menu.js";

export function Header() {
  const $header = document.createElement("header");

  $header.appendChild(Menu());

  return $header;
}
