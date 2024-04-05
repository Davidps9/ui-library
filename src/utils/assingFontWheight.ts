import { FontWeight } from "../../index";

export default function assignfontWheight({ fontWeight, style }: { fontWeight: FontWeight, style: string }) {

    switch (fontWeight) {
        case "thin":
            return style + " font-thin";
        case "extralight":
            return style + " font-extralight";
        case "light":
            return style + " font-light";
        case "normal":
            return style + " font-normal";
        case "medium":
            return style + " font-medium";
        case "semibold":
            return style + " font-semibold";
        case "bold":
            return style + " font-bold";
        case "extrabold":
            return style + " font-extrabold";
        case "black":
            return style + " font-black";
        case "100":
            return style + " font-hairline";
        case "200":
            return style + " font-thin";
        case "300":
            return style + " font-light";
        case "400":
            return style + " font-normal";
        case "500":
            return style + " font-medium";
        case "600":
            return style + " font-semibold";
        case "700":
            return style + " font-bold";
        case "800":
            return style + " font-extrabold";
        case "900":
            return style + " font-black";
        default:
            return style + " font-normal";
    }

}