import React from "react"
import Image from "next/image"
import Link from "next/link"
// import { FaStar } from "react-icons/fa"
import { IPostCard } from "apps/interfaces/index"

const PostCard: React.FC<IPostCard> = ({ imagePath, postId, title }) => {
    return (
        <React.Fragment>
            <div className="w-full p-10">
                <div className="h-40 relative">
                    <Image src={imagePath} alt="cover post" layout="fill" className="w-full object-cover object-center rounded-2xl shadow-md" />
                    {/* <div className="flex absolute top-4 right-4 items-baseline">
                        <span className="bg-indigo-200 flex items-center text-primary-main uppercase text-xs px-4 py-2 rounded-full font-gilroy-bold tracking-wide">
                            <FaStar size={16} className="mr-1" /> New!
                        </span>
                    </div> */}
                </div>
                <div className="h-40 flex flex-col flex">
                    <div className="bg-white p-5 rounded-2xl shadow-lg">
                        <h4 className="text-xl font-gilroy-bold leading-tight">{title}</h4>
                        {/* <div className="mt-1 mb-4">
                            <span className="text-gray-600 text-sm leading-[1.1]">{description}</span>
                        </div> */}
                        <br></br>
                        <Link href={`/posts/${postId}`}>
                            <button className="button-primary-sm bg-indigo-600 hover:bg-indigo-500">Read Post</button>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PostCard


