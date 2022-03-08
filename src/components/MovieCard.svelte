<script>
	export let movie;
</script>

<div class="movie-card">
	<img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} />
	<div class="description">
		<h2>{movie.title}</h2>
		<p>{movie.release_date}</p>
	</div>
</div>

<style>
	img {
		width: 100%;
	}
</style>
