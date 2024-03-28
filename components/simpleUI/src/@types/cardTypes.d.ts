import { Colors, Size } from "./generics";



export type SCardsProps = {
    backgroundColor?: Colors,
    rounded?: boolean,
    hoverable?: boolean,
    image?: string,
    text?: string,
    title?: string,
    subtitle?: string,
    size?: Size,
    textColor?: Colors,
    limitText?: number,

}

export type CardVariantProps = {
    size: Size, rounded: boolean, hoverable: boolean, backgroundColor: Colors, cardStyles: string
}