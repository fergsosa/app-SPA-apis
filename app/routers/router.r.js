import { blogPost, blogPostCargar } from "../controllers/wordpress.c.js";
import { peliShow } from "../controllers/peli-show.c.js";
import { selectsAnidados } from "../controllers/selects-anidados.c.js";
import { generadorQR } from "../controllers/generador-qr.c.js";
// import { plantilla } from "../controllers/_plantilla.c.js";
// import { faltaCompletar } from "../controllers/faltaCompletar.c.js";

export async function Router() {
  const $main = document.getElementById("main");
  let { hash } = location;
  // console.log(hash);

  $main.innerHTML = null;

  if (!hash || hash === "#/") blogPost($main);
  else if (hash.includes("/peliculas")) peliShow($main);
  else if (hash.includes("/selects-anidados")) selectsAnidados($main);
  else if (hash.includes("/generador-qr")) generadorQR($main);
  // else if (hash.includes("/logica,")) plantilla($main);
  else blogPostCargar($main);
  //! 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
  // else if (hash.includes("/clima")) faltaCompletar($main);
  // else if (hash.includes("/moneda-de-cambio")) faltaCompletar($main);

  document.querySelector(".loader").style.display = "none";
}
