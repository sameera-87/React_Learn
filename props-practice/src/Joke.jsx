export default function Joke(props){
    // console.log(props)
    return(
        <>
            <p>Setup: {props.setup} </p>
            <p>Punchline: {props.punchline} </p>
            <hr />
        </>
    )
}