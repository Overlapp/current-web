import { ReactNode } from "react"

export interface IPostCard {
    imagePath: string
    postId: string
    title: string
    // description: string
    category: string
}

export interface ITextProps {
    children: ReactNode | string
    isLight?: boolean
    className?: string
}

