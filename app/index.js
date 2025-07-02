import { urlWordpress } from "./helpers/wp_apis.js";
import App from "./App.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", () => {
  urlWordpress.page = 1;
  App();
});
