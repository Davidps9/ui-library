import { Colors, Size } from "../../@types/generics";

export default function assignSwitchSGenerics(size: Size, parent: boolean, color: Colors, switchStyles: string) {

    if (parent) {
        switch (size) {
            case 'small':
                switchStyles += ' w-12 h-6';
                break;
            case 'medium':
                switchStyles += ' w-16 h-8';
                break;
            case 'large':
                switchStyles += ' w-20 h-10';
                break;
            default:
                switchStyles += ' w-14 h-8';
                break;
        }

        switch (color) {
            case 'red':
                switchStyles += ' bg-red-400';
                break;
            case 'blue':
                switchStyles += ' bg-blue-400';
                break;
            case 'green':
                switchStyles += ' bg-green-400';
                break;
            case 'yellow':
                switchStyles += ' bg-yellow-400';
                break;
            case 'purple':
                switchStyles += ' bg-purple-400';
                break;
            case 'pink':
                switchStyles += ' bg-pink-400';
                break;
            case 'indigo':
                switchStyles += ' bg-indigo-400';
                break;
            case 'teal':
                switchStyles += ' bg-teal-400';
                break;
            case 'cyan':
                switchStyles += ' bg-cyan-400';
                break;
            case 'orange':
                switchStyles += ' bg-orange-400';
                break;
            case 'amber':
                switchStyles += ' bg-amber-400';
                break;
            case 'lime':
                switchStyles += ' bg-lime-400';
                break;
            case 'emerald':
                switchStyles += ' bg-emerald-400';
                break;
            case 'rose':
                switchStyles += ' bg-rose-400';
                break;
            case 'fuchsia':
                switchStyles += ' bg-fuchsia-400';
                break;
            case 'violet':
                switchStyles += ' bg-violet-400';
                break;
            case 'lightBlue':
                switchStyles += ' bg-lightBlue-400';
                break;
            case 'sky':
                switchStyles += ' bg-sky-400';
                break;
            case 'coolGray':
                switchStyles += ' bg-coolGray-400';
                break;
            case 'trueGray':
                switchStyles += ' bg-trueGray-400';
                break;
            case 'warmGray':
                switchStyles += ' bg-warmGray-400';
                break;
            case 'blueGray':
                switchStyles += ' bg-blueGray-400';
                break;
            default:
                switchStyles += ' bg-blue-400';
                break;

        }
    }
    else {
        switch (size) {
            case 'small':
                switchStyles += ' w-6 h-6';
                break;
            case 'medium':
                switchStyles += ' w-8 h-8';
                break;
            case 'large':
                switchStyles += ' w-10 h-10';
                break;
            default:
                switchStyles += ' w-8 h-8';
                break;
        }
        switch (color) {
            case 'red':
                switchStyles += ' bg-red-600';
                break;
            case 'blue':
                switchStyles += ' bg-blue-600';
                break;
            case 'green':
                switchStyles += ' bg-green-600';
                break;
            case 'yellow':
                switchStyles += ' bg-yellow-600';
                break;
            case 'purple':
                switchStyles += ' bg-purple-600';
                break;
            case 'pink':
                switchStyles += ' bg-pink-600';
                break;
            case 'indigo':
                switchStyles += ' bg-indigo-600';
                break;
            case 'teal':
                switchStyles += ' bg-teal-600';
                break;
            case 'cyan':
                switchStyles += ' bg-cyan-600';
                break;
            case 'orange':
                switchStyles += ' bg-orange-600';
                break;
            case 'amber':
                switchStyles += ' bg-amber-600';
                break;
            case 'lime':
                switchStyles += ' bg-lime-600';
                break;
            case 'emerald':
                switchStyles += ' bg-emerald-600';
                break;
            case 'rose':
                switchStyles += ' bg-rose-600';
                break;
            case 'fuchsia':
                switchStyles += ' bg-fuchsia-600';
                break;
            case 'violet':
                switchStyles += ' bg-violet-600';
                break;
            case 'lightBlue':
                switchStyles += ' bg-lightBlue-600';
                break;
            case 'sky':
                switchStyles += ' bg-sky-600';
                break;
            case 'coolGray':
                switchStyles += ' bg-coolGray-600';
                break;
            case 'trueGray':
                switchStyles += ' bg-trueGray-600';
                break;
            case 'warmGray':
                switchStyles += ' bg-warmGray-600';
                break;
            case 'blueGray':
                switchStyles += ' bg-blueGray-600';
                break;
            default:
                switchStyles += ' bg-blue-600';
                break;

        }

    }


    return switchStyles;
}