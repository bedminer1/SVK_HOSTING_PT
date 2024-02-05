export const load = async ({ fetch }) => {
    const title = 'Featured Products'
    const response = await fetch('http://localhost:4000/featured-products')
    const featuredProducts = await response.json()
    return {
        featuredProducts,
        title
    }
}