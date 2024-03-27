import { SAvatarProps } from '../@types/avatarTypes';
import assignAvatarStyles from '../utils/avatar/assignAvatarStyles';
import assignTextStyles from '../utils/text/assignTextStyles';

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
