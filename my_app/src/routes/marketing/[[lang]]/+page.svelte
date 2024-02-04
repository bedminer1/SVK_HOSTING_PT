<!-- lesson on optional parameters,
usually used for languages (with a default 
lanugage eg english) -->

<script>
    import { page } from '$app/stores'

    const greetings = {
        en: 'Hello!',
        kr: '안녕!',
        cn: '你好！',
    }

    // set default to en
    const { lang = 'en' } = $page.params
    const greeting = greetings[lang]
</script>

<div class="flex items-center h-full">
    <h1 class="text-4xl">{greeting}</h1>
</div>