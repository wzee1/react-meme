import React, { useState } from "react"
import memesData from "../memesData.js"

export default function Meme() {
    
    // Handling the image change
    const [memeImageURL, setMemeImageURL] = useState("https://i.imgflip.com/30b1gx.jpg")
    const memesArray = memesData.data.memes
    
    function getRandomIndex(max) {
        return Math.floor(Math.random() * max)
    }
    
    function generateNewMeme() {
        const randomIndex = getRandomIndex(memesArray.length)
        setMemeImageURL(memesArray[randomIndex].url)
    }
    
    // Handling the text change
    const [topText, setTopText] = useState("Enter your text!")
    const [bottomText, setBottomText] = useState("Enter your text!")
    
    function changeTopText(e) {
        setTopText(e.target.value)
    }
    
    function changeBottomText(e) {
        setBottomText(e.target.value)
    }
    
    // JSX
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    onChange={changeTopText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={changeBottomText}
                />
                <button 
                    className="form--button"
                    onClick={generateNewMeme}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            
            <div>
                <p className="meme-image--top">{topText}</p>
                <img src={memeImageURL} alt="Meme" className="meme-image"/>
                <p className="meme-image--bottom">{bottomText}</p>
            </div>
        </main>
    )
}