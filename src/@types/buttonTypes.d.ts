import { Size, Colors } from './generics';

export type SbuttonProps = {
    text: string,
    onClick?: () => void,
    disabled?: boolean,
    variant?: ButtonContainVariant,
    size?: Size,
    focusable?: boolean,
    uppercase?: boolean,
    borderColor?: Colors,
    rounded?: boolean,
    fontColor?: Colors,
}

export type ButtonContainVariant = "text" | "outlined" | "contained"

export interface ButtonVariantProps {
    variant: ButtonContainVariant;
    fontColor: string;
    size: Size;
    disabled: boolean;
    borderColor: string;
    rounded: boolean;
    focusable: boolean;
    SButtonclass: string;

}