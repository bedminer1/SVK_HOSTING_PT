<script>
    export let form
</script>


<div class="flex items-center justify-center h-full text-2xl">
    <form method="post" class="flex flex-col gap-2">
        <p>{form?.message || ''}</p>
        <input type="text" name="username" placeholder="Username" class="px-2 text-gray-700">
        <input type="password" name="password" placeholder="Password" class="px-2 text-gray-700">
        <button type='submit'>Login</button>
    </form>
</div>