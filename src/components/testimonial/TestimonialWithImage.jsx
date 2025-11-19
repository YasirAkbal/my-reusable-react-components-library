import clsx from 'clsx';

export default function TestimonialWithImage({ platform, children, img, icon, quote, name, position, ...rest }) { 
    const resolvedPlatform = ["desktop", "mobile"].includes(platform) ? platform : "desktop";

    return (
            <section className={clsx("testimonial-with-image", resolvedPlatform)} {...rest}>
                {children ?? (
                    <>
                        <img src={img.src} alt={img.alt} className={clsx("testimonial-image", resolvedPlatform)} />   
                        <div className={clsx("testimonial-content", resolvedPlatform)}>
                            <img src={icon} alt="Testimonial Icon" className="testimonial-icon" />
                            <p className="testimonial-quote">“{quote}”</p>
                            <div className="testimonial-author">
                                <h3 className="testimonial-name">{name}</h3>
                                <p className="testimonial-position">{position}</p>
                            </div>
                        </div>
                    </>
                )}

            </section>
    )
}