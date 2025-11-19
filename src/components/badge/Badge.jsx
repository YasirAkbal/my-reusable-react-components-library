import clsx from 'clsx';
import { getCssColorVar } from '../../utils/colors';
import './Badge.css';

export default function Badge({ children, type, color, ...rest }) {
    const backgroundColor = getCssColorVar(getBackgroundColor(color)) ?? getBackgroundColor("gray");
    const fontColor = getCssColorVar(getFontColor(color)) ?? getFontColor("gray");

    const style = { backgroundColor, color: fontColor };
    const typeClassName = ["square", "pill"].includes(type) ? type : "square";
    const className = clsx("badge", typeClassName)
    
    function getBackgroundColor(color) {
        return `${color}-badge-bg`
    }

    function getFontColor(color) {
        return `${color}-badge-font-color`
    }

    return (
        <section className={className} style={style} {...rest}>
            { children }
        </section>
    )
}