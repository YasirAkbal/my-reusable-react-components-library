import success from '../../assets/success.svg'
import { getCssColorVar } from '../../utils/colors';
import IconSuccess from '../../assets/success.svg'
import IconWarning from '../../assets/warning.svg'
import IconError from '../../assets/error.svg'
import IconNeutral from '../../assets/neutral.svg'
import clsx from 'clsx';
import './Banner.css';

const ICONS = {
    success: IconSuccess,
    warning: IconWarning,
    error: IconError,
    neutral: IconNeutral    
}
const VALID_TYPES = Object.keys(ICONS);
const DEFAULT_TYPE = 'neutral';

export default function Banner({ children, title, description, type, ...rest }) {
    const resolvedType = VALID_TYPES.includes(type) ? type : DEFAULT_TYPE;
    const icon = ICONS[resolvedType]
    const backgroundColor = getCssColorVar(`${resolvedType}-banner-bg`)
    const color = getCssColorVar(`${resolvedType}-banner-font-color`)

    const style = {backgroundColor, color};
    const className = clsx("banner")

    return (
        <section className={className} style={style} {...rest}>    
            {
                children ?? (
                    <>
                        <img src={icon} alt={`${resolvedType} Icon`} className="banner-icon" />
                        <div className="banner-content">  
                            {title && <h1>{title}</h1>}
                            {description && <p>{description}</p>}
                        </div>
                    </>
                )
            }    
        </section>
    )
}