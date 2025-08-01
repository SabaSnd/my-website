import cn from 'classnames'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import slugify from 'slugify'
import BlogPostCard from '../components/BlogPostCard'
import Container from '../components/Container'
import { getMainPages } from '../lib/get-main-pages'
import { getRecentPosts } from '../lib/get-recent-posts'
import { BlogItems, Pages } from '../lib/types'
import avatar from '../public/avatar.jpg'

interface Props {
  pages: Pages
  recentPosts: BlogItems
}

const Home: NextPage<Props> = ({ pages, recentPosts }) => {

  return (
    <Container pages={pages}>
      <main className="max-w-2xl mx-auto md:px-4 px-8 mt-5">
        <div className="flex flex-col sm:flex-row-reverse ">
          <div className="relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Saba Safarnezhad"
              height={230}
              width={230}
              src={avatar}
              placeholder='blur'
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col pr-8">
            <h1
              className={cn(
                'font-bold text-3xl md:text-5xl',
                'tracking-tight mb-1 text-black dark:text-white'
              )}
            >
              Saba Safarnezhad
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              CS Student & Data Scientist{' '}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              I study computer science, develop software projects, and write about my experience on my blog            </p>
          </div>
        </div>
        <h3
          className={cn(
            'font-bold text-2xl md:text-4xl',
            'tracking-tight mb-6 text-black dark:text-white'
          )}
        >
          Recent Posts
        </h3>
        <div className="flex flex-col gap-3">
          {recentPosts.map(item => (
            <Link
              key={slugify(item.name).toLowerCase()}
              href={`blog/${slugify(item.name).toLowerCase()}`}
            >
              <a
                className={cn(
                  'sm:border-b-2 border-background-200',
                  'dark:border-background-700 pb-3'
                )}
              >
                <BlogPostCard postData={item} />
              </a>
            </Link>
          ))}
        </div>
        <div className="mt-3 font-mono transition ease-out transform hover:translate-x-4 hover:scale-105">
          <Link href="/blog">
            <a>{`View all post ->`}</a>
          </Link>
        </div>

      </main>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  // Get children blocks of the root page
  const pages: Pages = await getMainPages()
  // Get recent posts
  const recentPosts: BlogItems = await getRecentPosts(pages, 3, preview)
  return {
    props: {
      pages,
      recentPosts,
    },
    revalidate: 10,
  }
}

export default Home
