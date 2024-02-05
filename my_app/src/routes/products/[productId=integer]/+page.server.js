export const load = async ({ fetch, params }) => {
    const { productId } = params
    const title = 'Product Features'
    const response = await fetch(`http://localhost:4000/products/${productId}`)
    const product = await response.json()
    return {
        title,
        product
    }
}