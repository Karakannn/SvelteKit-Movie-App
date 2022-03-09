import { c as create_ssr_component, a as add_attribute, e as escape, b as each, v as validate_component } from "../../chunks/index-13c0de55.js";
var MovieCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "img.svelte-e129gn{width:100%;height:40vh;object-fit:cover;border-radius:1rem;margin-bottom:1rem}h2.svelte-e129gn{font-size:0.9rem}.description.svelte-e129gn{height:5vh}p.svelte-e129gn{font-size:0.7rem}.movie-card.svelte-e129gn{display:flex;flex-direction:column;justify-content:space-around;padding:1rem}",
  map: null
};
const MovieCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movie } = $$props;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  $$result.css.add(css$1);
  return `<div class="${"movie-card svelte-e129gn"}"><a${add_attribute("href", "movie/" + movie.id, 0)}><img${add_attribute("src", "https://image.tmdb.org/t/p/w500" + movie.poster_path, 0)}${add_attribute("alt", movie.title, 0)} class="${"svelte-e129gn"}"></a>
	<div class="${"description svelte-e129gn"}"><h2 class="${"svelte-e129gn"}">${escape(movie.title)}</h2>
		<p class="${"svelte-e129gn"}">${escape(movie.release_date)}</p></div>
</div>`;
});
var PopularMovies_svelte_svelte_type_style_lang = "";
const css = {
  code: "h3.svelte-1go3mcu{padding:0 1rem}.popular-movies.svelte-1go3mcu{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-row-gap:2rem}",
  map: null
};
const PopularMovies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { popular } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  $$result.css.add(css);
  return `<h3 class="${"svelte-1go3mcu"}">Popular Movies</h3>
<div class="${"popular-movies svelte-1go3mcu"}">${each(popular, (movie) => {
    return `${validate_component(MovieCard, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}
</div>`;
});
async function load({ fetch }) {
  const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=15497da7dc5ad6417b2689438a50127c&language=en-US");
  const data = await res.json();
  if (res.ok) {
    return {
      props: {
        popular: new Array(1e3).fill(data.results[0])
      }
    };
  }
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { popular } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  return `<section>${validate_component(PopularMovies, "PopularMovies").$$render($$result, { popular }, {}, {})}</section>`;
});
export { Routes as default, load };
