import { useState } from "react";
import { SbuttonProps } from "../@types/types";
import { createButtonVariants } from "../utils/createButtonVariants";


export default function Sbutton({ text, fontColor = 'white', rounded = true, focusable = false, borderColor = 'blue', uppercase, onClick, disabled = false, variant = "outlined", size = 'medium' }: SbuttonProps) {

    const SButtonclass = ' hover:scale-105 transition duration-200 font-bold';
    const [buttonStyles] = useState((createButtonVariants(variant, fontColor, size, disabled, borderColor, rounded, focusable, SButtonclass)));

    return (
        <button className={buttonStyles} onClick={onClick}>
            {uppercase ? text.toUpperCase() : text}
        </button>

    )
}
