import { Size, BorderColors, FontColors } from './generics';


export type SAvatarProps = {
    size?: Size,
    borderColor?: BorderColors,
    rounded?: boolean,
    focusable?: boolean,
    uppercase?: boolean,
    fontColor?: FontColors,
    border?: boolean,
    src?: string,
    alt?: string,
    name?: string,
    hoverable?: boolean
    block?: boolean
}

export interface AvatarVariantProps {
    size: Size;
    borderColor: BorderColors;
    rounded: boolean;
    border: boolean;
    focusable: boolean;
    hoverable: boolean;
}
