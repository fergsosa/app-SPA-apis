import { ajax } from "./ajax.js";
import { urlWordpress } from "./wp_apis.js";
import { PostCard } from "../components/PostCard.js";

export async function InfiniteScroll() {
  const d = document;
  let apiURL;
  let Components; //High Order Component

  window.addEventListener("scroll", async (e) => {
    let { scrollTop, clientHeight, scrollHeight } = d.documentElement;
    let { hash } = window.location;
    const loader = d.querySelector(".loader");

    if (scrollTop + clientHeight >= scrollHeight) {
      urlWordpress.page++;

      if (!hash || hash === "#/") {
        apiURL = `${urlWordpress.POSTS}&page=${urlWordpress.page}`;
        Components = PostCard;
      } else return false;

      loader.style.display = "block";

      await ajax({
        url: apiURL,
        cbSuccess: (posts) => {
          let html = "";
          posts.forEach((posts) => (html += Components(posts)));
          d.getElementById("main").insertAdjacentHTML("beforeend", html);
          loader.style.display = "none";
        },
      });
    }
  });
}
