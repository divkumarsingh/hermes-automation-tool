import { ReactElement } from "react"

type Variants = "primary" | "secondary" | "tertiary"

interface ButtonProps {
    variant: Variants,
    text: string,
    onClick?: () => void,
    loading?: boolean,
    startIcon?: ReactElement
    endIcon?: ReactElement
    className?: string
}

const defaultStyles = "text-center cursor-pointer font-semibold focus:none hover:opacity-90 overflow:hidden text-md px-3 py-1.5 mr-2 "

const variantsStyles: Record<Variants, string> = {
    "primary": "bg-primary-color",
    "secondary": "bg-secondary-color",
    "tertiary": "bg-tertiary-color",
}

export const Button = ({
    variant,
    text,
    onClick,
    className,
    startIcon
} : ButtonProps) => {
    return(
        <button onClick={onClick}
        className={
            `${variantsStyles[variant]}
            ${defaultStyles}
            ${className}
            `}>
            {startIcon}
            {text}
        </button>
    )
}