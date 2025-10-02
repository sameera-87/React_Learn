import {useActionState, useState} from "react"
import {useEffect} from "react"

export default function Main(){

    const [meme, setMeme] = useState({
        topText:"One does not simply",
        bottomText:"Walk into mordor",
        imageUrl:"http://i.imgflip.com/1big.jpg"
    })

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => console.log(data.data.memes))
    }, [])

    function handleChange(event){
        const {value, name} = event.target
        setMeme(prevMeme => ( {
            ...prevMeme,
            [name] : value
        }))
    }

    return(
        <main>
            <div className="form">
                <label>Top Text
                    <input 
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input 
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button>Get a new meme image </button>
            </div>

            <div className="meme">
                <img src={meme.imageUrl} alt="Meme"/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}