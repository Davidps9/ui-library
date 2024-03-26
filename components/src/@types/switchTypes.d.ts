import { Colors, Size } from "./generics"

export type SSwitchProps = {
    color?: Colors,
    checked?: boolean,
    onChange?: (checked: boolean) => void,
    disabled?: boolean,
    size?: Size,
}

export type SwitchVariantProps = {
    SSwitchclass: string,
    color?: Colors,
    checked?: boolean,
    disabled?: boolean,
    size?: Size,
}