import assignFontColor from "./assignFontColor";
import { Size } from "../../../index";



export default function createTextStyles(fontColor: string, size: Size) {

    let textStyles = 'text-center ';
    textStyles += assignFontColor(fontColor, textStyles);
    switch (size) {
        case 'small':
            textStyles += ' text-xs w-fit';
            break;
        case 'medium':
            textStyles += ' text-base w-fit';
            break;
        case 'large':
            textStyles += ' text-lg w-fit';
            break;
        default:
            textStyles += ' text-base w-fit';
            break;
    }
    return textStyles;
}
