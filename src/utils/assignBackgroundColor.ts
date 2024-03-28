export default function assignBackgroundColor(color: string, style: string) {
    switch (color) {
        case 'red':
            style += ' bg-red-600';
            break;
        case 'blue':
            style += ' bg-blue-600';
            break;
        case 'green':
            style += ' bg-green-600';
            break;
        case 'yellow':
            style += ' bg-yellow-600';
            break;
        case 'purple':
            style += ' bg-purple-600';
            break;
        case 'pink':
            style += ' bg-pink-600';
            break;
        case 'indigo':
            style += ' bg-indigo-600';
            break;
        case 'teal':
            style += ' bg-teal-600';
            break;
        case 'cyan':
            style += ' bg-cyan-600';
            break;
        case 'orange':
            style += ' bg-orange-600';
            break;
        case 'amber':
            style += ' bg-amber-600';
            break;
        case 'lime':
            style += ' bg-lime-600';
            break;
        case 'emerald':
            style += ' bg-emerald-600';
            break;
        case 'rose':
            style += ' bg-rose-600';
            break;
        case 'fuchsia':
            style += ' bg-fuchsia-600';
            break;
        case 'violet':
            style += ' bg-violet-600';
            break;
        case 'lightBlue':
            style += ' bg-lightBlue-600';
            break;
        case 'sky':
            style += ' bg-sky-600';
            break;
        case 'coolGray':
            style += ' bg-coolGray-600';
            break;
        case 'trueGray':
            style += ' bg-trueGray-600';
            break;
        case 'warmGray':
            style += ' bg-warmGray-600';
            break;
        case 'blueGray':
            style += ' bg-blueGray-600';
            break;
        default:
            style += ' bg-blue-600';
            break;

    }
    return style;
}