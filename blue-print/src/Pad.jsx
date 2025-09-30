export default function Pad(props){

    console.log(props.on)

    return (
        <button 
            style={{backgroundColor: props.color}}
            className={props.on ? "on" : null}
        ></button>
        
    )
}