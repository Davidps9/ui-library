import { useState } from "react";
import { SSwitchProps } from "../src/@types/switchTypes";
import assignSwitchStyles from "../src/utils/switchButton/assignSwitchStyles";
import assignSwitchGenerics from "../src/utils/switchButton/assingSwitchGenerics";

export default function SSwitch(props: SSwitchProps) {

    const { size, color, disabled, checked, onChange } = props;

    const [isChecked, setisChecked] = useState(false);
    const defaultStyles = 'cursor-pointer rounded-full transition-all duration-200 relative';
    const styles = assignSwitchStyles({ checked, color, disabled, size, SSwitchclass: defaultStyles });
    const parentSize = assignSwitchGenerics(size || "medium", true, color || 'blue', '');
    return (
        <div onClick={() => setisChecked(!isChecked)} onChange={() => onChange} className={" inline-flex " + (isChecked ? "flex-row-reverse " : "flex-row ") + parentSize + " cursor-pointer rounded-full transition-all duration-200"}>
            <div className={styles}></div>
        </div>
    )
}
