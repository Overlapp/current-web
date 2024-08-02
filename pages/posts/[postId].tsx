import fs from "fs"
import * as path from "path"
import { Fragment } from "react"
import Image from "next/image"
import { NextPage } from "next/types"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import { FaCalendarDay } from "react-icons/fa"
import { ContentHeading } from "apps/components/atoms/Text"
import MDXComponents from "apps/components/md/MDXComponents"
import PagesLayout from "apps/layouts/PagesLayout"
import Footer from "apps/components/organism/Footer"
import { Meta } from "@modules/Meta"

const PostDetail: NextPage = ({ frontMatter, mdxSource }: any) => {
    const { title, author, role, category, imageUrl, createdAt } = frontMatter
    return (
        <Fragment>
            <Meta title="Overlapp Blog" />
            <PagesLayout>
                <div className="w-full bg-neutral-10 dark:bg-primary-pressed text-neutral-10 pb-20">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-48">
                        <div className="w-full mb-5 pt-10">
                            <Image src={imageUrl} className="rounded-2xl" objectFit="cover" width={1000} height={300} alt="cover" />
                        </div>
                        <h3 className="font-gilroy-bold text-sm md:text-md text-white text-primary-pressed bg-indigo-600 py-2 px-4 w-fit rounded-xl">{category}</h3>
                        <ContentHeading isLight className="my-8">
                            {title}
                        </ContentHeading>
                        <div className="flex flex-col pt-4 md:flex-row items-start md:items-center justify-between mb-10">
                            <div className="flex items-center space-x-3">
                                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary-hover">
                                    <Image src="/images/logo.png" className="rounded-2xl" objectFit="cover" width={72} height={72} alt="cover" />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <h3 className="font-gilroy-bold text-lg dark:text-neutral-10 text-primary-pressed">{author}</h3>
                                    <h3 className="font-gilroy-normal text-sm dark:text-neutral-10 text-primary-pressed">{role}</h3>
                                </div>
                            </div>
                            <h3 className="font-gilroy-normal flex items-center text-sm mt-5 md:mt-0 dark:text-neutral-10 text-primary-pressed">
                                <FaCalendarDay size={24} className="mr-2" />
                                Created at {createdAt}
                            </h3>
                        </div>
                        <div className="post-mobile">
                            <MDXRemote {...mdxSource} components={MDXComponents} />
                        </div>
                    </div>
                </div>
            </PagesLayout>
            <Footer />
        </Fragment>
    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join("apps", "data", "posts"))

    const paths = files?.map((filename) => ({
        params: {
            postId: filename.replace(".mdx", ""),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context: any) {
    const { postId } = context.params
    const markdownWithMeta = fs.readFileSync(path.join("apps", "data", "posts", postId + ".mdx"))

    const { data: frontMatter, content } = matter(markdownWithMeta)

    const mdxSource = await serialize(content)

    return {
        props: {
            frontMatter,
            postId,
            mdxSource,
        },
    }
}

export default PostDetail

