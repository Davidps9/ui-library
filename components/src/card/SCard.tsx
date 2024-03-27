import { SCardsProps } from '../@types/cardTypes';
import assignCardStyles from '../utils/card/assignCardStyles';
import assignFontColor from '../utils/text/assignFontColor';

export default function SCard({ backgroundColor = 'black', limitText = 0, textColor = 'white', borderColor = 'white', rounded = true, hoverable = true, image, text, title, subtitle, size = 'medium' }: SCardsProps) {

    const cardstyle = assignCardStyles({ backgroundColor, borderColor, rounded, hoverable, size, cardStyles: '' });
    return (
        <div className={cardstyle + ' text-left'}>
            {image && <img className={' object-cover h-1/2 w-full ' + (rounded ? 'rounded-t-md' : null)} src={image} alt="card image" />}
            <span className='px-4 py-2 flex flex-col gap-4'>
                {title && <h2 className={assignFontColor(textColor, '') + ' font-bold'}>{title}</h2>}
                {subtitle && <h3 className={assignFontColor(textColor, '')}>{subtitle}</h3>}
                {text && <p className={assignFontColor(textColor, '')}>{limitText > 0 ? text.slice(0, limitText).concat('...') : text}</p>}
            </span>
        </div>
    )
}
