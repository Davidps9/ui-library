import { CardVariantProps } from "../../@types/cardTypes";
import assignBackgroundColor from "../assignBackgroundColor";


export default function assignCardStyles(props: CardVariantProps) {
    const { size, rounded, hoverable, backgroundColor } = props;
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
    if (hoverable) cardStyles += ' transition duration-300 ease-in-out cursor-pointer transform hover:scale-105';

    if (rounded) cardStyles += ' rounded-md';
    cardStyles = assignBackgroundColor(backgroundColor, cardStyles);

    return cardStyles;

}