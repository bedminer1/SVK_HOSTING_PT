<script>
    export let data
    const { username } = data
</script>

<div class="flex flex-col justify-center h-full text-2xl">
    <h1 class="text-3xl">Featured Products for {username}</h1>
    <div>
        <p><a href="/products/1">Product 1</a></p>
    </div>
    <div>
        <p><a href="/products/2">Product 2</a></p>
    </div>
    <div>
        <p><a href="/products/3">Product 3</a></p>
    </div>
    <div>
        <p><a href="/products/4">Product 4</a></p>
    </div>
</div>
