export const urlWordpress = {
  // NAME: "css-tricks",
  // NAME: "techcrunch",
  NAME: "blog.ted",
  // NAME: "blog.playstation",
  // NAME: "blogs.nasa",
  // NAME: "news.harvard",
  PER_PAGE: 8,
  page: 1,

  get DOMAIN() {
    return `https://${this.NAME}.com`;
    // return `https://${this.NAME}.gov`; //nasa
    // return `https://${this.NAME}.edu`; //harvard
  },
  get SITE() {
    return `${this.DOMAIN}/wp-json`;
  },
  get API_WP() {
    return `${this.SITE}/wp/v2`;
  },
  get POSTS() {
    return `${this.API_WP}/posts?_embed&per_page=${this.PER_PAGE}`;
  },
  get POST() {
    return `${this.API_WP}/posts`;
  },
  get SEARCH() {
    return `${this.API_WP}/search?_embed&per_page=${this.PER_PAGE}&search=`;
  },
};

export const urlHTML = {
  VISTA: "/app/pages/vista-html.html",
  QR: "/app/pages/generador-qr.html",
  PELIS: "./app/pages/api-tv.html",
  ANIDADOS: "../../app/pages/selects-anidados.html",
  ANIDADOS_API_GOB: "https://apis.datos.gob.ar/georef/api",
};

// 🔻 En local
// export const urlHTML = {
//   VISTA: "../../app/pages/vista-html.html",
//   QR: "../../app/pages/generador-qr.html",
//   PELIS: "../../app/pages/api-tv.html",
//   ANIDADOS: "../../app/pages/selects-anidados.html",
//   ANIDADOS_API_GOB: "https://apis.datos.gob.ar/georef/api",
// };
