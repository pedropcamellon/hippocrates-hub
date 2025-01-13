import { prisma } from '@/libs/prisma'
import { userMapper } from '@/app/api/mapper'

interface IArticleParams {
  slug: string
}

export async function getComments(params: IArticleParams) {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        article: {
          slug: params.slug,
        },
        del: false,
      },
      include: {
        author: true,
      },
    })

    return comments.map((comment) => {
      return {
        ...comment,
        createdAt: comment.createdAt.toISOString(),
        updatedAt: comment.updatedAt.toISOString(),
        author: userMapper(comment.author),
      }
    })
  } catch (error) {
    console.error(`(getComments) ${error}`)
    return null
  }
}
