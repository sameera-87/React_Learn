
export default function Contact( props ){
    return(
        <article className="contact-card">
            <img className="contact-image" src={props.img} alt=""/>
            <h3> {props.name} </h3>
            <div className="info-group">
                <img src="" alt=""/>
                <p>{props.phone}</p>
            </div> 
            <div className="info-group">
                <img src="" alt=""/>
                <p>{props.email}</p>
            </div> 

        </article>
    )
}