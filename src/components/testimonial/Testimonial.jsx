import TestimonialWithImage from './TestimonialWithImage.jsx';
import TestimonialWithoutImage from './TestimonialWithoutImage.jsx';
import "./Testimonial.css"

const TYPE_MAP = {
  'with-image': TestimonialWithImage,
  'without-image': TestimonialWithoutImage
}

export default function Testimonial({ children, platform, type, ...rest }) {
    const resolvedType = Object.keys(TYPE_MAP).includes(type) ? type : "with-image";
    const ResolvedComponent = TYPE_MAP[resolvedType]
    
    return (
        <ResolvedComponent platform={platform} {...rest}>{children}</ResolvedComponent>
    )
}   