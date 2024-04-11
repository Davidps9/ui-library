import assignButtonStyles from "../utils/button/assignButtonStyles";
import { Colors, Size } from "../../index";

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
    children: string[] | string,
    type?: "button" | "submit" | "reset",
    backgroundColor?: Colors
}

export type ButtonContainVariant = "text" | "outlined" | "contained"



export default function Sbutton({ children, type, fontColor = 'white', backgroundColor = 'blue', rounded = false, focusable = false, borderColor = 'blue', uppercase, onClick, disabled = false, variant = "outlined", size = 'medium' }: SbuttonProps) {

    const SButtonclass = ' hover:scale-105 transition duration-200 font-bold m-2 cursor-pointer';
    const buttonProps = {
        variant,
        fontColor,
        size,
        disabled,
        borderColor,
        rounded,
        focusable,
        SButtonclass,
        backgroundColor
    }
    const buttonStyles = assignButtonStyles(buttonProps);



    return (
        < button type={type} className={buttonStyles} onClick={onClick} >
            {uppercase ?
                children.toString().toUpperCase()
                :
                children
            }
        </button >
    )
}
