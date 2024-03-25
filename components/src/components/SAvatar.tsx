import { SAvatarProps } from '../@types/avatarTypes';
import assignAvatarStyles from '../utils/avatar/assignAvatarStyles';
import assignTextStyles from '../utils/text/assignTextStyles';

export default function SAvatar({ hoverable = false, size = 'medium', fontColor = 'white', borderColor = 'white', focusable = false, rounded = true, src = '', name = '', alt = '', uppercase = false }: SAvatarProps) {

    const avatarStyles = assignAvatarStyles({ size, hoverable, borderColor, focusable, rounded });

    const textStyles = assignTextStyles(fontColor, size);

    return (
        <span className='flex-col inline-flex w-fit justify-center items-center'>
            <img className={avatarStyles} src={src} alt={alt} />
            {name && <p className={textStyles}>{uppercase ? name.toUpperCase() : name}</p>}
        </span>
    )
}
