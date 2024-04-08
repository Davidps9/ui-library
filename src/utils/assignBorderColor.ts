
export default function assignBorderColor(borderColor: string, styles: string) {

    switch (borderColor) {
        case 'white':
            styles += ' border-white';
            break;
        case 'black':
            styles += ' border-black';
            break;
        case 'blue':
            styles += ' border-blue-400';
            break;
        case 'red':
            styles += ' border-red-400';
            break;
        case 'green':
            styles += ' border-green-400';
            break;
        case 'yellow':
            styles += ' border-yellow-400';
            break;
        case 'purple':
            styles += ' border-purple-400';
            break;
        case 'pink':
            styles += ' border-pink-400';
            break;
        case 'indigo':
            styles += ' border-indigo-400';
            break;
        case 'teal':
            styles += ' border-teal-400';
            break;
        case 'cyan':
            styles += ' border-cyan-400';
            break;
        case 'orange':
            styles += ' border-orange-400';
            break;
        case 'amber':
            styles += ' border-amber-400';
            break;
        case 'lime':
            styles += ' border-lime-400';
            break;
        case 'emerald':
            styles += ' border-emerald-400';
            break;
        case 'rose':
            styles += ' border-rose-400';
            break;
        case 'fuchsia':
            styles += ' border-fuchsia-400';
            break;
        case 'violet':
            styles += ' border-violet-400';
            break;
        case 'lightBlue':
            styles += ' border-lightBlue-400';
            break;
        case 'gray':
            styles += ' border-gray-400';
            break;
        case 'sky':
            styles += ' border-sky-400';
            break;
        case 'coolGray':
            styles += ' border-coolGray-400';
            break;
        case 'trueGray':
            styles += ' border-trueGray-400';
            break;
        case 'warmGray':
            styles += ' border-warmGray-400';
            break;
        case 'blueGray':
            styles += ' border-blueGray-400';
            break;
        default:
            styles += ' border-blue-400';
            break;
    }
    return styles;

}
