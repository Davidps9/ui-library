import { Size, Colors } from './generics';


export type SAvatarProps = {
    size?: Size,
    borderColor?: Colors,
    rounded?: boolean,
    focusable?: boolean,
    uppercase?: boolean,
    fontColor?: Colors,
    border?: boolean,
    src?: string,
    alt?: string,
    name?: string,
    hoverable?: boolean
    block?: boolean
}

export interface AvatarVariantProps {
    size: Size;
    borderColor: Colors;
    rounded: boolean;
    border: boolean;
    focusable: boolean;
    hoverable: boolean;
}
