const c = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/search/[id].svelte"),
	() => import("../../src/routes/movie/[id].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/search/[id].svelte
	[/^\/search\/([^/]+?)\/?$/, [c[0], c[3]], [c[1]], (m) => ({ id: d(m[1])})],

	// src/routes/movie/[id].svelte
	[/^\/movie\/([^/]+?)\/?$/, [c[0], c[4]], [c[1]], (m) => ({ id: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];