<script>
	import '../app.css';
	import { goto } from '$app/navigation'

	export let data
	const { user, username } = data

	const handleClick = () => {
		goto('/products')
	}
</script>

<div class="flex flex-col items-center justify-center w-full h-full">
	<h2 class="text-5xl text-center">Hello {user ?? ''}!</h2>
	<button on:click={handleClick}>Start Shopping</button>
</div>
