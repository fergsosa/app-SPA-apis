import { ajax } from "../helpers/ajax.js";
import { urlWordpress } from "../helpers/wp_apis.js";

import { PostCard } from "../components/PostCard.js";
import { Post } from "../components/Post.js";

export const blogPost = async ($main) => {
  console.log(`${urlWordpress.POST}/${localStorage.getItem("wpPostId")}`);

  await ajax({
    url: urlWordpress.POSTS,
    cbSuccess: (posts) => {
      // console.log(posts);
      let { hash } = location;
      if (hash.includes("#/") || !hash.includes("/"))
        $main.classList.add("box-title");

      let html = ` 
      <h1>
        Página: <a href="${urlWordpress.DOMAIN}" target="_blank" 
        rel="noopener">  ${urlWordpress.NAME.toUpperCase()}</a>
      </h1> `;

      posts.forEach((post) => (html += PostCard(post)));

      $main.innerHTML += html;
    },
  });
};

export const blogPostCargar = async ($main) => {
  console.log(`${urlWordpress.POST}/${localStorage.getItem("wpPostId")}`);

  await ajax({
    url: `${urlWordpress.POST}/${localStorage.getItem("wpPostId")}`,
    cbSuccess: (post) => {
      $main.innerHTML = Post(post);
    },
  });
};
