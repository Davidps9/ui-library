import { ButtonContainVariant, Size } from "../@types/types";

export const createButtonVariants = (variant: ButtonContainVariant, fontColor: string, size: Size, disabled: boolean, borderColor: string, rounded: boolean, focusable: boolean, className: string) => {
    let buttonStyles = className + '';

    if (fontColor === 'white') {
        buttonStyles += ' text-white';
    }
    else {
        buttonStyles += ` text-${fontColor}-400`;
    }
    if (!disabled) {
        buttonStyles += ` border-${borderColor}-400`;
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
            buttonStyles += ' px-2 py-1';
            break;
        case 'medium':
            buttonStyles += ' px-4 py-2';
            break;
        case 'large':
            buttonStyles += ' px-6 py-3';
            break;
        default:
            buttonStyles += ' px-4 py-2';
            break;
    }

    if (!focusable) {
        buttonStyles += ' focus:outline-none';
    }

    return buttonStyles;
}