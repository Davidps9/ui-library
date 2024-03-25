import { useState } from "react"

export default function SSwitch() {
    const [checked, setChecked] = useState(false);
    return (
        <div onClick={() => setChecked(!checked)} className={"flex " + (checked ? "flex-row-reverse " : "flex-row ") + "cursor-pointer rounded-full w-10 bg-slate-600 transition-all duration-200"}>
            <div className={"relative  h-4 w-4 rounded-full bg-blue-400 "}></div>
        </div>
    )
}
