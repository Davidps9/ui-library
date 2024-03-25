import { ButtonContainVariant, Size } from "../@types/types";

export const createButtonVariants = (variant: ButtonContainVariant, size: Size, disabled: boolean, borderColor: string, focusable: boolean, className: string) => {
    let buttonStyles = className + ' ';

    switch (variant) {
        case 'text':
            buttonStyles += 'bg-transparent border-none';
            break;
        case 'outlined':
            buttonStyles += 'bg-transparent border-2';
            break;
        case 'contained':
            buttonStyles += 'bg-blue-400 border-2';
            break;
        default:
            buttonStyles += 'bg-transparent border-2';
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
    if (!disabled) {

        buttonStyles += ` border-${borderColor}-400 hover:border-${borderColor}-400 hover:text-white`;
    }
    else {
        buttonStyles += ' opacity-50 pointer-events-none border-gray-400';

    }
    if (focusable) {
        buttonStyles += ` focus:outline-none focus:ring-2 focus:ring-${borderColor}-400`;
    }
    else {
        buttonStyles += ' focus:outline-none';
    }

    return buttonStyles;
}