<script>
    import { page } from '$app/stores'

    export let form
    const redirectTo = $page.url.searchParams.get('redirectTo') || '/'
</script>


<div class="flex items-center justify-center h-full text-2xl">
    <form method="post" action="?/login&redirectTo={redirectTo}" class="flex flex-col gap-2">
        <p>{form?.message || ''}</p>
        <input type="text" name="username" placeholder="Username" class="px-2 text-gray-700" value={form?.username ?? ''}>
        <input type="password" name="password" placeholder="Password" class="px-2 text-gray-700">
        <button type='submit'>Login</button>
        <button formaction="?/register&redirectTo={redirectTo}">Register</button>
    </form>
</div>