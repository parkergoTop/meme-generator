import React from "react";
import "./Meme.css"

export default function Meme(){
    return(
        <main>
            <form className="form">
                <input type="text" className ="form-input" value ="Top Text"/>
                <input type="text" className ="form-input" value ="Button Text"/>
                <input type="submit" className ="" value ="Get a meme image"/>
            </form>
        </main>
    )
}