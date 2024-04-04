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
    children: string,
    type?: "button" | "submit" | "reset"
}

export type ButtonContainVariant = "text" | "outlined" | "contained"



export default function Sbutton({ children, type, fontColor = 'white', rounded = false, focusable = false, borderColor = 'blue', uppercase, onClick, disabled = false, variant = "outlined", size = 'medium' }: SbuttonProps) {

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
        < button type={type} className={buttonStyles} onClick={onClick} >
            {uppercase ? children?.toUpperCase() : children}
        </button >
    )
}
