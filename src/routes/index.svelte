<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=15497da7dc5ad6417b2689438a50127c&language=en-US&page=1'
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
	export let popular;

</script>

<section>
	<PopularMovies {popular}/>
</section>
