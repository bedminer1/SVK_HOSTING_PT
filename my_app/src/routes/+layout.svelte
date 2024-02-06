<script>
	import '../app.css';
	import '$lib/global.css'
	import Footer from '../lib/Footer.svelte';
	import { page } from '$app/stores'
</script>

<svelte:head>
	<title>{$page.data.title || `bed's shop`}</title>
</svelte:head>

<div class="flex flex-col items-center justify-center h-screen text-center">
	<nav class="flex justify-between w-screen gap-8 px-4 text-3xl">
		<div class="flex gap-4">
			<a href="/">home</a>
			<a href="/about">about</a>
			<a href="/blog">blog</a>
			<a href="/contact">contact</a>
		</div>
		<div class="flex gap-4">
			<a href="/login">login/register</a>
		</div>
	</nav>
	<div class="flex justify-center h-full">
		<slot />	
	</div>
	<Footer />
</div>
