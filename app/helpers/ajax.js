export async function ajax(props) {
  let { url, cbSuccess } = props;

  await fetch(url)
    // .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then(async (res) => {
      const contentType = res.headers.get("content-type");
      if (!res.ok) {
        const errorText = await res.text();
        return Promise.reject(errorText);
      }
      if (contentType && contentType.includes("application/json")) {
        return res.json();
      } else return res.text();
    })
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let message = err.statusText || "Ocurrio un error al acceder a la API";

      document.getElementById("main").innerHTML = `
      <div class="error">
        <p>Error ${err.status}: ${message}</p>
      </div>
      `;

      document.querySelector(".loader").style.display = "none";

      // console.log(err);
    });
}
