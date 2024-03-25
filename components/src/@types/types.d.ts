export type SbuttonProps = {
    text: string,
    onClick?: () => void,
    className?: string,
    disabled?: boolean,
    variant?: ButtonContainVariant,
    size?: Size,
    focusable?: boolean,
    uppercase?: boolean
    borderColor?: ButtonBorderColors
}

export type ButtonContainVariant = "text" | "outlined" | "contained"

export type Size = "small" | "medium" | "large";

export type ButtonBorderColors = "blue" | "red" | "green" | "yellow" | "gray" | "black" | "white" | "purple" | "pink" | "indigo" | "teal" | "cyan" | "orange" | "amber" | "lime" | "emerald" | "rose" | "fuchsia" | "violet" | "lightBlue" | "sky" | "cyan" | "coolGray" | "trueGray" | "warmGray" | "blueGray" | "orange" | "amber" | "lime" | "emerald" | "rose" | "fuchsia" | "violet" | "lightBlue" | "sky" | "cyan" | "coolGray" | "trueGray" | "warmGray" | "blueGray" | "orange" | "amber" | "lime" | "emerald" | "rose" | "fuchsia" | "violet" | "lightBlue" | "sky" | "cyan" | "coolGray" | "trueGray" | "warmGray" | "blueGray" | "orange" | "amber" | "lime" | "emerald" | "rose" | "fuchsia" | "violet" | "lightBlue" | "sky" | "cyan" | "coolGray" | "trueGray" | "warmGray" | "blueGray" | "orange" | "amber" | "lime" | "emerald" | "rose" | "fuchsia" | "violet" | "lightBlue" | "sky" | "cyan" | "coolGray" | "trueGray" | "warmGray" | "blueGray" | "orange" | "amber" | "lime" | "emerald" | "rose" | "fuchsia" | "violet" | "lightBlue" | "sky" | "cyan" | "coolGray" | "trueGray" | "warmGray" | "blueGray" | "orange" | "amber" | "lime" | "emerald" | "rose" | "fuchsia" | "violet" | "lightBlue" | "sky" | "cyan" | "coolGray" | "trueGray" | "warmGray" | "blueGray" | "orange";