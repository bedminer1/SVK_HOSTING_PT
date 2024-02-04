<script>
    import { goto, beforeNavigate, afterNavigate } from '$app/navigation'

    export let featureName = 'Routing'
    export let featureNameTwo = 'Rendering'

    const handleClick = () => {
        goto('/docs/Rendering')
    }

    // can be used to hide a loading spinner
    beforeNavigate((navigation) => {
        console.log({ before:navigation})
    })
</script>

<div class="text-5xl">
    <p><a href="/docs/{featureName}">Click to view docs for: {featureName}</a></p>

    <button on:click={handleClick} class="w-1/2 p-2 text-xl bg-green-900 border-2 border-black">Click button to view docs for: {featureNameTwo}</button>
</div>