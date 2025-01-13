import FeedToggle from './_components/FeedToggle'
import ArticleList from './_components/ArticleList'
import PopularTags from '@/components/popular-tags/PopularTags'
import { getTranslations } from 'next-intl/server'

interface HomeProps {
  searchParams: {
    page?: string
    tag?: string
    feed?: string
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const page = Number(searchParams.page) || 1
  const tag = searchParams.tag
  const feed = searchParams.feed

  const tHome = await getTranslations('Home')

  const tHeader = await getTranslations('Header')

  return (
    <>
      <div className="home-page">
        <div className="mb-2 py-10 bg-brand text-white">
          <div className="container text-center">
            <h1 className="text-5xl logo-font mb-4">{tHeader('app-name')}</h1>
            <p>{tHome('description')}</p>
          </div>
        </div>

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <FeedToggle tag={tag} feed={feed} />
              <ArticleList page={page} tag={tag} feed={feed} />
            </div>
            <div className="col-md-3">
              <PopularTags />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
