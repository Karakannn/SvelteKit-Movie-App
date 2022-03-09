<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${
                import.meta.env.VITE_API
            }&language=en-US&query=${params.id}&page=1&include_adult=false`
		);
		const data = await res.json();
        console.log(data);

		if (res.ok) {
			return {
				props: { searchedMovie: data.results }
			};
		}

	}
</script>

<script>
	import MovieCard from '../../components/MovieCard.svelte';
    export let searchedMovie;
    import.meta.env.VITE_API
</script>

{#if searchedMovie.length > 0}
<div class="popular-movies">
	{#each searchedMovie as movie}
		<MovieCard {movie} />
	{/each}
</div>
{:else}
<h2 class="no-match">
	No match any movie
</h2>
{/if}

<style>
    .popular-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-row-gap: 2rem;
	}

    .no-match {
        width:100%;
        text-align: center;
        

}
</style>
