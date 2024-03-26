import { SAvatarProps } from '../src/@types/avatarTypes';
import assignAvatarStyles from '../src/utils/avatar/assignAvatarStyles';
import assignTextStyles from '../src/utils/text/assignTextStyles';

export default function SAvatar({ hoverable = false, block = false, border = false, size = 'medium', fontColor = 'white', borderColor = 'white', focusable = false, rounded = true, src = '', name = '', alt = '', uppercase = false }: SAvatarProps) {

    const avatarStyles = assignAvatarStyles({ size, hoverable, borderColor, focusable, rounded, border });

    const textStyles = assignTextStyles(fontColor, size);

    return (
        <div className="flex flex-col justify-center items-center w-fit">
            <img className={avatarStyles} src={src} alt={alt} />
            {name && <p className={textStyles}>{uppercase ? name.toUpperCase() : name}</p>}
        </div>
    )
}
