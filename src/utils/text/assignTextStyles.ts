import assignFontColor from "./assignFontColor";
import { FontWeight, Size } from "../../../index";
import assignfontWheight from "../assingFontWheight";



export default function createTextStyles(fontColor: string, fontWeight: FontWeight, size: Size) {

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
    textStyles += assignfontWheight({ fontWeight, style: textStyles });
    return textStyles;
}
