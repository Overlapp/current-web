import fs from "fs"
import * as path from "path"
import { Fragment } from "react"
import { NextPage } from "next/types"
import matter from "gray-matter"
import { Meta } from "@modules/Meta"
import PagesLayout from "apps/layouts/PagesLayout"
import PostCard from "apps/components/organism/Cards/PostCard"
import { PageText } from "apps/components/atoms/Text"
import Footer from "apps/components/organism/Footer"

const Posts: NextPage = ({ posts }: any) => {
    return (
        <Fragment>
            <Meta title="Blog Posts" />
            <PagesLayout>
                <div className="w-full bg-neutral-10 dark:bg-primary-pressed pb-80">
                    <div className="max-w-[1440px] mx-auto py-10 px-6 md:px-24">
                        <PageText isLight className="md:text-center">
                            Blog Posts
                        </PageText>
                        <div className="flex flex-col md:text-center md:text-3xl items-start md:items-center md:te justify-between mb-5">
                            <br></br>
                            <PageText isLight className="text-3xl">
                                Get to Know Overlapp!
                            </PageText>
                            <PageText isLight>
                                Stay updated on how we're transforming the way you manage fun and connect with others.<br></br>
                                Discover our latest features and behind-the-scenes stories.
                            </PageText>
                        </div>
                        <div className="blogs md:flex-1 md:grid md:gap-4 md:grid-cols-3 md:grid-rows-3 flex flex-col">
                            {posts.map((post: any, idx: number) => (
                                <PostCard key={idx} imagePath={post.frontMatter.imageUrl} postId={post.postId} title={post.frontMatter.title} category={post.frontMatter.category} />
                            ))}
                        </div>
                    </div>
                </div>
            </PagesLayout>
            <Footer />
        </Fragment>
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join("apps", "data", "posts"))

    const posts = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(path.join("apps", "data", "posts", filename))

        const { data: frontMatter } = matter(markdownWithMeta)

        const postId = filename.split(".")[0]

        return {
            frontMatter,
            postId,
        }
    })

    return {
        props: {
            posts,
        },
    }
}

export default Posts





