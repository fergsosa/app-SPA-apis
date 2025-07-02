export function Menu() {
  const $menu = document.createElement("div");

  $menu.classList.add("menu");
  $menu.innerHTML = `
    <nav class="menu-nav">
    <a href="#/">Wordpress Blog</a>
    <a href="#/selects-anidados">Selects Anidados</a>
    <a href="#/pelicula;*Ps">Películas</a>
    <a href="#/generador-qr">Generador QR</a>
    </nav>
    `;
  // <a href="#/logica,">✅Lógica</a>
  // <a href="#/clima">Clima</a>
  // <a href="#/moneda-de-cambio">Moneda de Cambio</a>

  const updateActiveLink = () => {
    // const hash = window.location.hash;
    let { hash } = location;

    const $links = $menu.querySelectorAll("a");

    $links.forEach((link) => {
      if (link.getAttribute("href") === hash) {
        link.classList.add("active");
      } else link.classList.remove("active");
    });
  };
  updateActiveLink();

  //* Actualizar cuando cambia el hash
  window.addEventListener("hashchange", updateActiveLink);

  return $menu;
}
