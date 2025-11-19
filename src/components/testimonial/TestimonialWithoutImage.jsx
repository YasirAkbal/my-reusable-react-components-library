import clsx from 'clsx';
import DotPattern from '../../assets/dot-pattern.png';

export default function Testimonial({ children, platform, img, icon, quote, name, position, ...rest }) { 
    const resolvedPlatform = ["desktop", "mobile"].includes(platform) ? platform : "desktop";

    return (
        <section className={clsx("testimonial-no-image", resolvedPlatform)}>
            {children ?? (<>
                <img src={DotPattern} alt="Dot Pattern Background" className={clsx("testimonial-no-image-bg-pattern", resolvedPlatform)} />  
                <div className={clsx("testimonial-no-image-content", resolvedPlatform)}>
                    <img src={img.src} className="testimonial-no-image-logo" alt={img.alt}/>
                    <p className={clsx("testimonial-no-image-quote", resolvedPlatform)}>“{quote}”</p>
                    <div className={clsx("testimonial-no-image-author", resolvedPlatform)}>
                        <h3 className="testimonial-no-image-name">{name}</h3>
                        {resolvedPlatform === "desktop" && <span className="testimonial-no-image-separator">/</span>}
                        <p className="testimonial-no-image-position">{position}</p>
                    </div>
                </div>
            </>)}
        </section>
    )
}