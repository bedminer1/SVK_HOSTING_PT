<script>
    import { page } from '$app/stores'
</script>

<div class="flex flex-col justify-center h-full text-2xl">
    <h1>{$page.status}: {$page.error.message}</h1>
    <p>{$page.error.hint}</p>
    <a href="/products">back</a>
</div>