import { ajax } from "../helpers/ajax.js";
import { urlHTML } from "../helpers/wp_apis.js";

export const selectsAnidados = async ($main) => {
  await ajax({
    url: urlHTML.ANIDADOS,
    cbSuccess: (html) => {
      $main.innerHTML = html;

      const logica = () => {
        const d = document,
          $selectProvincia = d.getElementById("select-primary"),
          $selectDepartamento = d.getElementById("select-secondary"),
          $selectBarrio = d.getElementById("select-third");

        const url = urlHTML.ANIDADOS_API_GOB;

        function loadStates() {
          fetch(`${url}/provincias?campos=id,nombre`)
            .then((res) => (res.ok ? res.json() : Promise.reject(res)))
            .then((json) => {
              // console.log([json.provincias]);
              let $options = `<option value="">Elige un Provincia</option>`;
              json.provincias.forEach(
                (el) =>
                  ($options += `<option value="${el.id}">${el.nombre}</option>`)
              );
              $selectProvincia.innerHTML = $options;
            })
            .catch((err) => {
              console.log(err);
              let message = err.statusText || "Ocurrió un error";
              $selectProvincia.nextElementSibling.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
            });
        }

        function loadTowns(provincia) {
          // console.log({ provincia });
          fetch(`${url}/departamentos?provincia=${provincia}&max=100`)
            .then((res) => (res.ok ? res.json() : Promise.reject(res)))
            .then((json) => {
              // console.log(json.departamentos);
              let $options = `<option value="">Elige un Departamentos</option>`;
              json.departamentos.forEach(
                (el) =>
                  ($options += `<option value="${el.id}">${el.nombre}</option>`)
              );
              $selectDepartamento.innerHTML = $options;
            })
            .catch((err) => {
              console.log(err);
              let message = err.statusText || "Ocurrió un error";
              $selectDepartamento.nextElementSibling.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
            });
        }

        function loadSuburbs(provincia) {
          // console.log({ provincia });
          fetch(`${url}/municipios?provincia=${provincia}&max=100`)
            .then((res) => (res.ok ? res.json() : Promise.reject(res)))
            .then((json) => {
              // console.log(json.municipios);
              let $options = `<option value="">Elige una Municipio</option>`;
              json.municipios.forEach(
                (el) =>
                  ($options += `<option value="${el.id}">${el.nombre}</option>`)
              );
              $selectBarrio.innerHTML = $options;
            })
            .catch((err) => {
              console.log(err);
              let message = err.statusText || "Ocurrió un error";
              $selectBarrio.nextElementSibling.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
            });
        }

        loadStates();

        $selectProvincia.addEventListener("change", (e) => {
          loadTowns(e.target.value);
        });

        $selectProvincia.addEventListener("change", (e) => {
          loadSuburbs(e.target.value);
        });
      };

      logica();
    },
  });
};
