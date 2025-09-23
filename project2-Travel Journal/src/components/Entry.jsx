// import japan from "./japan.jpg";
import marker from "../assets/marker.png"

export default function Entry( props ){
    console.log(props)
    return(
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" 
                    src={ props.entry.img.src } 
                    alt={ props.entry.img.alt } 
                />
            </div>

            <div className="main-content">
                <div className="location">
                    <img className="marker-image" src= {marker} alt="map marker icon"/>
                    <span className="country">{props.country}</span>
                    <a href={props.entry.googleMapsLink}>View on Google Maps</a>
                </div>
                <h2>{props.entry.title}</h2>
                <p>{props.entry.date}</p>
                <p>{props.entry.text}</p>
            </div>
        </article>
    )
}