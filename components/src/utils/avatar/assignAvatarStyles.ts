import { AvatarVariantProps } from "../../@types/avatarTypes";
import assignBorderColor from "../assignBorderColor";



export default function assignAvatarStyles(props: AvatarVariantProps) {

    let avatarStyles = '';
    const { size, borderColor, border, rounded, focusable, hoverable } = props;

    avatarStyles += assignBorderColor(borderColor, avatarStyles);
    if (rounded) {
        avatarStyles += ' rounded-full';
    }
    if (border) {
        avatarStyles += ' border-2';
    }

    switch (size) {
        case 'small':
            avatarStyles += ' h-8 w-8';
            break;
        case 'medium':
            avatarStyles += ' h-12 w-12';
            break;
        case 'large':
            avatarStyles += ' h-16 w-16';
            break;
        default:
            avatarStyles += ' h-12 w-12';
            break;
    }
    if (!focusable) {
        avatarStyles += ' focus:outline-none';
    }
    if (hoverable) {
        avatarStyles += ' hover:scale-105 transition duration-200';
    }
    return avatarStyles;
}