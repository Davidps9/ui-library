import { Size, BorderColors, FontColors } from './generics';


export type SAvatarProps = {
    size?: Size,
    borderColor?: BorderColors,
    rounded?: boolean,
    focusable?: boolean,
    uppercase?: boolean,
    fontColor?: FontColors,
    src?: string,
    alt?: string,
    name?: string,
    hoverable?: boolean
}

export interface AvatarVariantProps {
    size: Size;
    borderColor: BorderColors;
    rounded: boolean;
    focusable: boolean;
    hoverable: boolean;
}
