
import assignSwitchSGenerics from "./assingSwitchGenerics";
import { Colors, Size } from "../../../index";
export type SwitchVariantProps = {
    SSwitchclass: string,
    color?: Colors,
    checked?: boolean,
    disabled?: boolean,
    size?: Size,
}

export default function assignSwitchStyles(props: SwitchVariantProps) {

    let switchStyles = props.SSwitchclass + '';
    const { color, disabled, size } = props;

    if (disabled) {
        switchStyles += ' opacity-50 pointer-events-none';
    }
    switchStyles = assignSwitchSGenerics(size || "medium", false, color || "blue", switchStyles);
    return switchStyles;
}