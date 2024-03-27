import { CardVariantProps } from "../../@types/cardTypes";
import assignBackgroundColor from "../assignBackgroundColor";
import assignBorderColor from "../assignBorderColor";


export default function assignCardStyles(props: CardVariantProps) {
    const { size, rounded, hoverable, backgroundColor, borderColor } = props;
    let cardStyles = ' flex flex-col';

    switch (size) {
        case 'small':
            cardStyles += ' min-w-40 h-auto gap-4 max-w-60';
            break;
        case 'medium':
            cardStyles += ' min-w-60 h-auto gap-4 max-w-80';
            break;
        case 'large':
            cardStyles += ' min-w-80 h-auto gap-4 max-w-96';
            break;
        default:
            cardStyles += ' w-60 h-auto gap-4 max-w-80';
            break;
    }
    if (rounded) cardStyles += ' rounded-md';
    cardStyles = assignBackgroundColor(backgroundColor, cardStyles);
    cardStyles = assignBorderColor(borderColor, cardStyles);
    if (hoverable) cardStyles += ' hover:shadow-lg';

    return cardStyles;

}