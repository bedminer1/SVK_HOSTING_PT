<script>
    export let data
    const { title, product } = data
</script>

<div class="flex flex-col justify-center h-full text-2xl">
    <h1>{title}</h1>
    <h2>{product.title} - {product.price}</h2>
    <p>{product.description}</p>
</div>