import React from "react";
import "./Meme.css"
import memesData from "./memesData"

export default function Meme(){


    
    const [meme, setMeme] = React.useState({
            topText : "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(preMeme => ({...preMeme, randomImage:url}))
    } 

    function handleChange(event){
        const {name, value} = event.target;
         setMeme(preState => {
            return {...preState, [name]: value}
         })
    }
    return(
        <main>
            <div className="form">
                <input type="text" className ="form-input" placeholder="Top Text" 
                                    value={meme.topText} onChange={handleChange} name="topText"/>
                <input type="text" className ="form-input" placeholder="Bottom Text" 
                                    value={meme.bottomText} onChange={handleChange} name="bottomText"/>
                <button className ="form-button" onClick={getMemeImage}>Get a meme image</button>
            </div>

            <div className="meme">
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme-text top"> {meme.topText} </h2>
            <h2 className="meme-text bottom"> {meme.bottomText}</h2>
            </div>
        </main>
    )
}