import { c as create_ssr_component } from "../../../chunks/index-13c0de55.js";
async function load({ fetch, params }) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=15497da7dc5ad6417b2689438a50127c&language=en-US`);
  const movieDetail = await res.json();
  console.log(movieDetail);
  if (res.ok) {
    return { props: { popular: movieDetail } };
  }
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
export { U5Bidu5D as default, load };
