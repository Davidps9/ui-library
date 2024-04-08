import { Colors } from "../..";

export default function assignShadowColor(shadowColor : Colors, style : string){
    switch (shadowColor) {
        case 'red':
            style += ' shadow-red-400 hover:shadow-red-400';
            break;
        case 'blue':
            style += ' shadow-blue-400 hover:shadow-blue-400';
            break;
        case 'green':
            style += ' shadow-green-400 hover:shadow-green-400';
            break;
        case 'yellow':
            style += ' shadow-yellow-400 hover:shadow-yellow-400';
            break;
        case 'purple':
            style += ' shadow-purple-400 hover:shadow-purple-400';
            break;
        case 'pink':
            style += ' shadow-pink-400 hover:shadow-pink-400';
            break;
        case 'indigo':
            style += ' shadow-indigo-400 hover:shadow-indigo-400';
            break;
        case 'teal':
            style += ' shadow-teal-400 hover:shadow-teal-400';
            break;
        case 'cyan':
            style += ' shadow-cyan-400 hover:shadow-cyan-400';
            break;
        case 'orange':
            style += ' shadow-orange-400 hover:shadow-orange-400';
            break;
        case 'amber':
            style += ' shadow-amber-400 hover:shadow-amber-400';
            break;
        case 'lime':
            style += ' shadow-lime-400 hover:shadow-lime-400';
            break;
        case 'emerald':
            style += ' shadow-emerald-400 hover:shadow-emerald-400';
            break;
        case 'rose':
            style += ' shadow-rose-400 hover:shadow-rose-400';
            break;
        case 'fuchsia':
            style += ' shadow-fuchsia-400 hover:shadow-fuchsia-400';
            break;
        case 'violet':
            style += ' shadow-violet-400 hover:shadow-violet-400';
            break;
        case 'lightBlue':
            style += ' shadow-lightBlue-400 hover:shadow-lightBlue-400';
            break;
        case 'sky':
            style += ' shadow-sky-400 hover:shadow-sky-400';
            break;
        case 'coolGray':
            style += ' shadow-coolGray-400 hover:shadow-coolGray-400';
            break;
        case 'trueGray':
            style += ' shadow-trueGray-400 hover:shadow-trueGray-400';
            break;
        case 'warmGray':
            style += ' shadow-warmGray-400 hover:shadow-warmGray-400';
            break;
        case 'blueGray':
            style += ' shadow-blueGray-400 hover:shadow-blueGray-400';
            break;
        case 'gray':
            style += ' shadow-gray-400 hover:shadow-gray-400';
            break;
        case 'black':
            style += ' shadow-black hover:shadow-black';
            break;
        case 'white':
            style += ' shadow-white hover:shadow-white';
            break;
        default:
            style += ' shadow-blue-400 hover:shadow-blue-400'; 
            break;
    }
    
    return style;
}