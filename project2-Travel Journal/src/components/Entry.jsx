import japan from "./japan.jpg";
import marker from "../assets/marker.png"

export default function Entry(){
    return(
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={japan} alt="mount-fuji" />
            </div>

            <div className="main-content">
                <div className="location">
                    <img className="marker-image" src= {marker} alt="map marker icon"/>
                    <span>Japan</span>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/
                    @35.3572019,138.7178474,14.47z/data=!4m6!3m5!1s0x6019629a42fdc899
                    :0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?
                    authuser=0&entry=ttu&g_ep=EgoyMDI1MDkxNC4wIKXMDSoASAFQAw%3D%3D">View on Google Maps</a>
                </div>
                <h2>Mount Fuji</h2>
                <p>12 Jan, 2023 - 24 Jan 2023</p>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters, and is an active
                     stratovolcano. It is a sacred symbol in Japanese culture and a popular destination 
                     for pilgrims and tourists alike. The mountain is especially admired for its 
                     symmetrical snow-capped peak, which has inspired countless artworks and poems.</p>
            </div>
        </article>
    )
}