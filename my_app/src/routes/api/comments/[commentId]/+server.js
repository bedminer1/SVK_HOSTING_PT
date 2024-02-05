import { comments } from '$lib/comments.js'
import { json } from '@sveltejs/kit'

export function GET(requestEvent){
    const { params } = requestEvent
    const { commentId } = params 
    const comment = comments.find((comment) => comment.id === parseInt(commentId))
    return json(comment)
}

export async function PATCH(requestEvent) {
    const { params, request } = requestEvent
    const { commentId } = params 
    const { text } = await request.json()
    const comment = comments.find((comment) => comment.id === parseInt(commentId))
    comment.text = text
    return json(comment)
}