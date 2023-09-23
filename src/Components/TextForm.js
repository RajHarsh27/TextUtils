import React, {useState} from "react";

export default function TextForm(props){
    const handleUpClick=()=>{
        console.log("Clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLoClick=()=>{
        let lowerText=text.toLowerCase();
        setText(lowerText);
    }

    const handleOnChange=(event)=>{
        console.log("on Change");
        setText(event.target.value)
    }

    const [text, setText]=useState();
    return(
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label"></label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary" onClick={handleLoClick}>Convert to LowerCase</button>
        </div>
    )
}