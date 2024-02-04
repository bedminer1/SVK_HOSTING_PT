<script>
	import '../app.css';

	let title = 'Sample Title'
	import '$lib/global.css'
	import Footer from '../lib/Footer.svelte';
</script>

<div class="flex flex-col items-center justify-center h-screen text-center">
	<nav class="flex w-screen gap-8 px-4 text-4xl justify-right">
		<a href="/about">about</a>
		<a href="blog">blog</a>
		<a href="contact">contact</a>
	</nav>
	<div class="flex justify-center h-full">
		<slot />	
	</div>
	<Footer />
</div>
