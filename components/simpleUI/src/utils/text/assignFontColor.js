export default function assignFontColor(fontColor, buttonStyles) {
    switch (fontColor) {
        case 'white':
            buttonStyles += ' text-white';
            break;
        case 'black':
            buttonStyles += ' text-black';
            break;
        case 'blue':
            buttonStyles += ' text-blue-600';
            break;
        case 'red':
            buttonStyles += ' text-red-600';
            break;
        case 'green':
            buttonStyles += ' text-green-600';
            break;
        case 'yellow':
            buttonStyles += ' text-yellow-600';
            break;
        case 'indigo':
            buttonStyles += ' text-indigo-600';
            break;
        case 'purple':
            buttonStyles += ' text-purple-600';
            break;
        case 'pink':
            buttonStyles += ' text-pink-600';
            break;
        case 'teal':
            buttonStyles += ' text-teal-600';
            break;
        case 'cyan':
            buttonStyles += ' text-cyan-600';
            break;
        case 'orange':
            buttonStyles += ' text-orange-600';
            break;
        case 'amber':
            buttonStyles += ' text-amber-600';
            break;
        case 'lime':
            buttonStyles += ' text-lime-600';
            break;
        case 'emerald':
            buttonStyles += ' text-emerald-600';
            break;
        case 'rose':
            buttonStyles += ' text-rose-600';
            break;
        case 'fuchsia':
            buttonStyles += ' text-fuchsia-600';
            break;
        case 'violet':
            buttonStyles += ' text-violet-600';
            break;
        case 'lightBlue':
            buttonStyles += ' text-lightBlue-600';
            break;
        case 'sky':
            buttonStyles += ' text-sky-600';
            break;
        case 'coolGray':
            buttonStyles += ' text-coolGray-600';
            break;
        case 'trueGray':
            buttonStyles += ' text-trueGray-600';
            break;
        case 'warmGray':
            buttonStyles += ' text-warmGray-600';
            break;
        case 'blueGray':
            buttonStyles += ' text-blueGray-600';
            break;
        default:
            buttonStyles += ' text-white';
            break;
    }
    return buttonStyles;
}
