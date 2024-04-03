import assignAvatarStyles from '../utils/avatar/assignAvatarStyles';
import assignTextStyles from '../utils/text/assignTextStyles';
import { Colors, Size } from "../../index";

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


export default function SAvatar({ hoverable = false, block = false, border = false, size = 'medium', fontColor = 'white', borderColor = 'white', focusable = false, rounded = true, src = '', name = '', alt = '', uppercase = false }: SAvatarProps) {

    const avatarStyles = assignAvatarStyles({ size, hoverable, borderColor, focusable, rounded, border });

    const textStyles = assignTextStyles(fontColor, size);

    return (
        <div className={(block ? "flex " : "inline-flex ") + "w-fit justify-center items-center flex-col"}>
            <img className={avatarStyles} src={src} alt={alt} />
            {name && <p className={textStyles}>{uppercase ? name.toUpperCase() : name}</p>}
        </div>
    )
}
