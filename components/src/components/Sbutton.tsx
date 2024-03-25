import { SbuttonProps } from "../@types/types";
import { createButtonVariants } from "../utils/createButtonVariants";


export default function Sbutton({ text, focusable = false, borderColor = 'blue', uppercase, onClick, className, disabled = false, variant = "outlined", size = 'medium' }: SbuttonProps) {

    const SButtonclass = className || 'text-white rounded-full hover:scale-105 transition duration-200 font-bold';
    const buttonStyles = createButtonVariants(variant, size, disabled, borderColor, focusable, SButtonclass);
    return (
        <button className={buttonStyles} onClick={onClick}>
            {uppercase ? text.toUpperCase() : text}
        </button>

    )
}
