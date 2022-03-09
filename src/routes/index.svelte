<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${
				import.meta.env.VITE_API
			}&language=en-US&page=1`
		);
		const data = await res.json();

		if (res.ok) {
			return {
				props: { popular: data.results }
			};
		}
	}
</script>

<script>
	import PopularMovies from '../components/PopularMovies.svelte';
	import SearchMovies from '../components/SearchMovies.svelte';
	import { fly } from 'svelte/transition';
	import.meta.env.VITE_API

	export let popular;
</script>

<section in:fly={{ y: 50, duration: 500 }} out:fly={{ duration: 500 }}>
	<SearchMovies />
	<PopularMovies {popular} />
</section>
