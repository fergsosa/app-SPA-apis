// import
export function Loader() {
  const $loader = document.createElement("img");

  $loader.src = "app/assets/img/tail-spin.svg";
  $loader.alt = "Cargando...";
  $loader.classList.add("loader");
  return $loader;
}
