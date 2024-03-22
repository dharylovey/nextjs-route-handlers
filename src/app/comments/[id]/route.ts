import { comments } from "../data";
import { redirect } from "next/navigation";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    if(parseInt(params.id) > comments.length) {
        redirect('/comments')
    }

    const comment = comments.find(
        (comment) => comment.id === parseInt(params.id)
    )

    return Response.json(comment)
}


export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    const body = await request.json();
    const { text } = body
    const idx = comments.findIndex(
        (comment) => comment.id === parseInt(params.id)
    )
    comments[idx].text = text
    return Response.json(comments[idx])
}

export async function DELETE(request: Request,
    { params }: { params: { id: string } }
) {
    const idx = comments.findIndex(
        (comment) => comment.id === parseInt(params.id)
    )
    const deletedComment = comments[idx]
    comments.splice(idx, 1)
    return Response.json(deletedComment)

}