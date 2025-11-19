import CardIcon from '../../assets/card-icon.svg';
import './Card.css';

export default function Card({ children, title, description, icon=CardIcon, ...rest }) {   
    return (
        <section className="card" {...rest}> 
            <div className="card-bottom"/>
            <div className="card-middle">
                <img src={icon} alt="Card Icon" /> 
                {children ??
                    <>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </>
                }
            </div>
        </section>

    )
}