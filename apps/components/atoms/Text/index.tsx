import clsx from "clsx"
import { ITextProps } from "apps/interfaces/index"

export const HeadingText: React.FC<ITextProps> = ({ children, isLight, className }) => {
    return (
        <h1
            className={clsx(
                isLight ? "text-transparent bg-clip-text pb-2 to-blue-100" : "text-transparent bg-clip-text bg-gradient-to-r from-purple-800 pb-2 to-blue-400",
                "font-gilroy-bold text-5xl",
                className
            )}
        >
            {" "}
            {children}
        </h1>
    )
}

export const PageText: React.FC<ITextProps> = ({ children, isLight, className }) => {
    return <h1 className={clsx(isLight ? "text-primary-pressed dark:text-neutral-10" : "text-primary-pressed", "font-gilroy-bold text-2xl md:text-4xl", className)}>{children}</h1>
}

export const ParagraphText: React.FC<ITextProps> = ({ children }) => {
    return <p className="dark:text-neutral-10 text-heading-7 font-gilroy-normal"> {children}</p>
}

export const ContentText: React.FC<ITextProps> = ({ children }) => {
    return <p className="text-heading-7 md:text-heading-6 py-2 dark:text-neutral-10 text-primary-pressed">{children}</p>
}

export const ContentTitle: React.FC<ITextProps> = ({ children }) => {
    return <p className="text-primary-pressed dark:text-neutral-10 text-gray-600 text-heading-3 md:text-heading-8 py-6 font-gilroy-normal">{children}</p>
}

export const ContentHeading: React.FC<ITextProps> = ({ children, isLight, className }) => {
    return <h1 className={clsx(isLight ? "text-primary-pressed dark:text-neutral-10" : "text-neutral-70", "font-gilroy-bold text-4xl md:text-6xl", className)}>{children}</h1>
}

export const PointHeading: React.FC<ITextProps> = ({ children, isLight, className }) => {
    return <h1 className={clsx(isLight ? "text-primary-pressed dark:text-neutral-10" : "text-neutral-70", "font-gilroy-bold text-xl md:text-3xl", className)}>{children}</h1>
}

export const ErrorText: React.FC<any> = ({ children }) => {
    return <h1 className="py-1 px-2 bg-red-100 w-fit rounded-md mt-1 font-gilroy-medium text-xs text-red-600">{children}</h1>
}

