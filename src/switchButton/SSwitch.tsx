import { useEffect, useState } from "react";
import assignSwitchStyles from "../utils/switchButton/assignSwitchStyles";
import assignSwitchGenerics from "../utils/switchButton/assingSwitchGenerics";
import { Colors, Size } from "../../index";

export type SSwitchProps = {
    color?: Colors,
    checked?: boolean,
    onChange?: () => void,
    disabled?: boolean,
    size?: Size,
}


export default function SSwitch(props: SSwitchProps) {

    const { size, color, disabled, checked, onChange } = props;

    const [isChecked, setisChecked] = useState(false);
    const defaultStyles = 'rounded-full transition-all duration-200';
    const styles = assignSwitchStyles({ checked, color, disabled, size, SSwitchclass: defaultStyles });
    const parentSize = assignSwitchGenerics(size || "medium", true, color || 'blue', '');

    useEffect(() => {
        onChange && onChange();
    }, [isChecked])

    return (
        <div onClick={() => setisChecked(!isChecked)} className={parentSize + (isChecked ? "flex-row-reverse" : "flex-row ")}>
            <div className={styles}></div>
        </div>
    )
}
