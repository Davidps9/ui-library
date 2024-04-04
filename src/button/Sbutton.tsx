import assignButtonStyles from "../utils/button/assignButtonStyles";
import { Colors, Size } from "../../index";
import { Children } from "react";

export type SbuttonProps = {
    onClick?: () => void,
    disabled?: boolean,
    variant?: ButtonContainVariant,
    size?: Size,
    focusable?: boolean,
    uppercase?: boolean,
    borderColor?: Colors,
    rounded?: boolean,
    fontColor?: Colors,
    children: string
}

export type ButtonContainVariant = "text" | "outlined" | "contained"



export default function Sbutton({ children, fontColor = 'white', rounded = false, focusable = false, borderColor = 'blue', uppercase, onClick, disabled = false, variant = "outlined", size = 'medium' }: SbuttonProps) {

    const SButtonclass = ' hover:scale-105 transition duration-200 font-bold m-2';
    const buttonProps = {
        variant,
        fontColor,
        size,
        disabled,
        borderColor,
        rounded,
        focusable,
        SButtonclass
    }
    const buttonStyles = assignButtonStyles(buttonProps);



    return (
        < button className={buttonStyles} onClick={onClick} >
            {uppercase ? children?.toUpperCase() : children}
        </button >
    )
}
