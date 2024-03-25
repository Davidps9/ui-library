import { Size } from "../../@types/generics";
import assignFontColor from "./assignFontColor";




export default function createTextStyles(fontColor: string, size: Size) {

    let textStyles = '';
    textStyles += assignFontColor(fontColor, textStyles);
    switch (size) {
        case 'small':
            textStyles += ' text-xs';
            break;
        case 'medium':
            textStyles += ' text-base';
            break;
        case 'large':
            textStyles += ' text-lg';
            break;
        default:
            textStyles += ' text-base';
            break;
    }
    return textStyles;
}
