<script lang="ts">
	import Auth from '$lib/firebase-auth.svelte'
</script>
<nav>
	<a href="/">Home</a>
	<a href="/login">Login Page</a>

	<Auth />
</nav>

<main>
	<slot></slot>
</main>