import assignBackgroundColor from "../assignBackgroundColor";
import { Colors, Size } from "../../../index";
import { CardVariant } from "../../card/SCard";
import assignBorderColor from "../assignBorderColor";
import assignShadowColor from "../assignShadowColor";

export type CardVariantProps = {
    size: Size, rounded: boolean, hoverable: boolean, backgroundColor: Colors, variant: CardVariant, borderColor: Colors, shadowColor: Colors ,cardStyles: string
}



export default function assignCardStyles(props: CardVariantProps) {
    const { size, rounded, hoverable, backgroundColor, variant, borderColor, shadowColor } = props;
    let cardStyles = ' flex flex-col';
    if(variant == 'outlined'){ cardStyles += " border"; cardStyles += assignBorderColor(borderColor,cardStyles);}
    switch (size) {
        case 'small':
            if(variant == 'elevated'){ cardStyles += " shadow-md hover:shadow-md";}
            cardStyles += ' min-w-40 h-auto gap-4 max-w-60';
            break;
        case 'medium':
            if(variant == 'elevated'){ cardStyles += " shadow-lg hover:shadow-lg";}
            cardStyles += ' min-w-60 h-auto gap-4 max-w-80';
            break;
        case 'large':
            if(variant == 'elevated'){ cardStyles += " shadow-lg hover:shadow-lg";}
            cardStyles += ' min-w-80 h-auto gap-4 max-w-96';
            break;
        default:
            cardStyles += ' w-60 h-auto gap-4 max-w-80';
            if(variant == 'elevated'){ cardStyles += " shadow-md hover:shadow-md";}

            break;
    }

    if(variant == 'elevated'){
        cardStyles = assignShadowColor(shadowColor, cardStyles);
    }

    if (hoverable) cardStyles += ' transition duration-300 ease-in-out cursor-pointer transform hover:scale-105';

    if (rounded) cardStyles += ' rounded-md';
    cardStyles = assignBackgroundColor(backgroundColor, cardStyles);

    return cardStyles;

}