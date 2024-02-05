<script>
	import '../app.css';
	import { goto } from '$app/navigation'

	const handleClick = () => {
		goto('/products')
	}
</script>

<div class="flex flex-col items-center justify-center w-1/2 h-full">
	<h2 class="text-5xl text-center">Hello!</h2>
	<button on:click={handleClick}>Start Shopping</button>
</div>
