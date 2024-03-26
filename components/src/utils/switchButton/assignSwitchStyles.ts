import { SwitchVariantProps } from "../../@types/switchTypes";
import assignSwitchSGenerics from "./assingSwitchGenerics";


export default function assignSwitchStyles(props: SwitchVariantProps) {

    let switchStyles = props.SSwitchclass + '';
    const { color, checked, disabled, size } = props;


    if (disabled) {
        switchStyles += ' bg-slate-400';
    }

    if (disabled) {
        switchStyles += ' opacity-50 pointer-events-none';
    }
    switchStyles = assignSwitchSGenerics(size || "medium", false, color || "blue", switchStyles);
    return switchStyles;
}