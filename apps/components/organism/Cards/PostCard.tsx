import React from "react"
import Image from "next/image"
import Link from "next/link"
import { IPostCard } from "apps/interfaces/index"

const PostCard: React.FC<IPostCard> = ({ imagePath, postId, title }) => {
    return (
        <React.Fragment>
            <div className="w-full p-10">
                <div className="h-40 relative">
                    <Image src={imagePath} alt="cover post" layout="fill" className="w-full object-cover object-center rounded-2xl shadow-md" />
                </div>
                <div className="h-40 flex flex-col flex">
                    <div className="bg-white p-5 rounded-2xl shadow-lg">
                        <h4 className="text-xl font-gilroy-bold leading-tight">{title}</h4>
                        <br></br>
                        <Link href={`/posts/${postId}`}>
                            <button className="button-primary-sm hover:bg-indigo-500">Read Post</button>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PostCard


