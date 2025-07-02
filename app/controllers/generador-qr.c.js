import { ajax } from "../helpers/ajax.js";
import { urlHTML } from "../helpers/wp_apis.js";

export const generadorQR = async ($main) => {
  await ajax({
    url: urlHTML.QR,
    cbSuccess: (html) => {
      $main.innerHTML = html;

      const logica = () => {
        const $qrContainer = document.querySelector("#contenedorQR");
        const $qrForm = document.querySelector("#qr-form");

        const qrGenerator = new QRCode($qrContainer);

        $qrForm.addEventListener("submit", (e) => {
          e.preventDefault();
          qrGenerator.makeCode($qrForm.link.value);
        });
      };
      logica();
    },
  });
};
