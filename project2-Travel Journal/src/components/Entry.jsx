// import japan from "./japan.jpg";
import marker from "../assets/marker.png"

export default function Entry( props ){
    console.log(props)
    return(
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" 
                    src={ props.img.src } 
                    alt={ props.img.alt } 
                />
            </div>

            <div className="main-content">
                <div className="location">
                    <img className="marker-image" src= {marker} alt="map marker icon"/>
                    <span className="country">{props.country}</span>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p>{props.date}</p>
                <p>{props.text}</p>
            </div>
        </article>
    )
}