
export default function Contact( { img, name, phone, email} ){
    return(
        <article className="contact-card">
            <img className="contact-image" src={img} alt=""/>
            <h3> {name} </h3>
            <div className="info-group">
                <img src="" alt=""/>
                <p>{phone}</p>
            </div> 
            <div className="info-group">
                <img src="" alt=""/>
                <p>{email}</p>
            </div> 

        </article>
    )
}