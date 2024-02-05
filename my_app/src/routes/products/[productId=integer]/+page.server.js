import { error } from '@sveltejs/kit'

export const load = async ({ fetch, params }) => {
    const { productId } = params

    if(productId > 3) {
        throw error(404, {
            message: 'Product unavailable :( ',
            hint: 'Try a different product'
        })
    }

    const title = 'Product Features'
    const response = await fetch(`http://localhost:4000/products/${productId}`)
    const product = await response.json()
    return {
        title,
        product
    }
}