export function MsgCompletar() {
  const d = document;
  const $msj = d.createElement("div");
  const $style = d.getElementById("dynamic-styles");

  $msj.classList.add("contact-form");

  $style.innerHTML = `
  .completar {
  padding: 1rem;
  font-size: 150%;
  font-weight: bold;
  text-align: center;
  color: #111;
  background-color: #ffcc00;
  text-shadow: 0 0 1px #000CFF;
}
  `;

  $msj.innerHTML = `
    <div class="completar">
      <p> ⚠️ Falta completar... </p>
    </div>`;
  
  return $msj;
}
