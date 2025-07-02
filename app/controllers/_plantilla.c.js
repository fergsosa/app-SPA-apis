import { ajax } from "../helpers/ajax.js";
import { urlHTML } from "../helpers/wp_apis.js";

export const plantilla = async ($main) => {
  await ajax({
    url: urlHTML.VISTA,
    cbSuccess: (html) => {
      $main.innerHTML = html; // ✅ sobrescribír el contenido de $main

      //* Código Logica...
      const logica = () => {
        const $botonHTML = document.getElementById("miBotonHTML");
        if ($botonHTML) {
          $botonHTML.addEventListener("click", () => {
            alert("¡Botón desde el HTML clickeado!");
          });
        }
      };

      logica();
    },
  });
};
