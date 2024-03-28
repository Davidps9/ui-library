export default function assignBorderColor(borderColor, buttonStyles) {
    switch (borderColor) {
        case 'white':
            buttonStyles += ' border-white';
            break;
        case 'black':
            buttonStyles += ' border-black';
            break;
        case 'blue':
            buttonStyles += ' border-blue-400';
            break;
        case 'red':
            buttonStyles += ' border-red-400';
            break;
        case 'green':
            buttonStyles += ' border-green-400';
            break;
        case 'yellow':
            buttonStyles += ' border-yellow-400';
            break;
        case 'indigo':
            buttonStyles += ' border-indigo-400';
            break;
        case 'purple':
            buttonStyles += ' border-purple-400';
            break;
        case 'pink':
            buttonStyles += ' border-pink-400';
            break;
        case 'teal':
            buttonStyles += ' border-teal-400';
            break;
        case 'cyan':
            buttonStyles += ' border-cyan-400';
            break;
        case 'orange':
            buttonStyles += ' border-orange-400';
            break;
        case 'amber':
            buttonStyles += ' border-amber-400';
            break;
        case 'lime':
            buttonStyles += ' border-lime-400';
            break;
        case 'emerald':
            buttonStyles += ' border-emerald-400';
            break;
        case 'rose':
            buttonStyles += ' border-rose-400';
            break;
        case 'fuchsia':
            buttonStyles += ' border-fuchsia-400';
            break;
        case 'violet':
            buttonStyles += ' border-violet-400';
            break;
        case 'lightBlue':
            buttonStyles += ' border-lightBlue-400';
            break;
        default:
            buttonStyles += ' border-blue-400';
            break;
    }
    return buttonStyles;
}
