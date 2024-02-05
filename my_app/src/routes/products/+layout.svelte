<script>
    export let data
    const { featuredProducts } = data
</script>

<div class="flex flex-col justify-center">
    <div>
        <slot />
    </div>
    <br>
    <div class="flex gap-10 align-bottom w-80 justify-evenly">
        {#each featuredProducts as featuredProduct}
            <div class="p-20 m-20 align-text-bottom w-30">
                <h2>{featuredProduct.title}</h2>
                <p>{featuredProduct.description}</p>
            </div>
        {/each}
    </div>
</div>