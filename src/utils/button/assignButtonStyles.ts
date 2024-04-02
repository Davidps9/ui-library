import { Size } from "../../../index";
import assignBorderColor from "../assignBorderColor";
import assignFontColor from "../text/assignFontColor";

export type ButtonContainVariant = "text" | "outlined" | "contained"


export interface ButtonVariantProps {
    variant: ButtonContainVariant;
    fontColor: string;
    size: Size;
    disabled: boolean;
    borderColor: string;
    rounded: boolean;
    focusable: boolean;
    SButtonclass: string;

}

export default function assignButtonStyles(props: ButtonVariantProps) {


    let buttonStyles = props.SButtonclass + '';
    const { variant, fontColor, size, disabled, borderColor, rounded, focusable } = props;

    buttonStyles += assignFontColor(fontColor, buttonStyles);
    if (!disabled) {
        buttonStyles += assignBorderColor(borderColor, buttonStyles);
    }
    else {
        buttonStyles += ' opacity-50 pointer-events-none border-gray-400';
    }
    if (rounded) {
        buttonStyles += ' rounded-full';
    }
    switch (variant) {
        case 'text':
            buttonStyles += ' bg-transparent border-none';
            break;
        case 'outlined':
            buttonStyles += ' bg-transparent border-2';
            break;
        case 'contained':
            buttonStyles += ' bg-blue-400 border-none';
            break;
        default:
            buttonStyles += ' bg-transparent border-2';
            break;
    }
    switch (size) {
        case 'small':
            buttonStyles += ' px-2 py-1 text-sm';
            break;
        case 'medium':
            buttonStyles += ' px-4 py-2 text-md';
            break;
        case 'large':
            buttonStyles += ' px-8 py-4 text-lg';
            break;
        default:
            buttonStyles += ' px-4 py-2 text-md';
            break;
    }
    if (!focusable) {
        buttonStyles += ' focus:outline-none';
    }
    return buttonStyles;
}