import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("upper case was clicked");
        let newText = text.toUpperCase();     // text change to uppercase
        setText(newText);       // button click hote hi uppercase m ho jayega
        props.showAlert("Converted to upper case!","success");
    }

    const handleLowClick =() =>{
        let newText2= text.toLowerCase();
        setText(newText2);
        props.showAlert("Converted to lower case!","success");
    }
    const handleClear=()=>{
        let newText= "";
        setText(newText)
        props.showAlert("Cleared text!","success")
    }
    const Capitalize=(word)=>{
        const lower= word.toLowerCase();
        return lower.charAt(0).toUpperCase+ lower.slice(1);
    }
    const handleOnChange = (event) => {
        // console.log("on change");           // jaisi text type krenge consolem on change ayega
        setText(event.target.value);        // we can write in textarea
    }

    const [text, setText] = useState("");
    // text= "new text"      => wrong way to change the text
    // setText("new text");   => right way to change the text
    return (
        <>
            <div className='container' style={{color:props.mode==='dark'? 'white': '#080A24'}}>
                <h1 className="my-5">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? 'grey': 'white',color:props.mode==='dark'?'white':'#080A24'}} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-info mx-2 ' onClick={handleUpClick} >Convert to Uppercase</button>
                <button className='btn btn-info mx-2 ' onClick={handleLowClick} >Convert to Lowercase</button>
                <button className='btn btn-info mx-2 ' onClick={handleClear} >Clear text</button>
                <button className='btn btn-info mx-2 ' onClick={Capitalize} >Capitalize text</button>
            </div>
            <div className="container my-5" style={{color:props.mode==='dark'? 'white': '#080A24'}}>
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} words and {text.length} chracters</p>
                <p>{text.split(" ").length * 0.008}Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0 ? text: "Enter something to preview it here"}</p>
            </div>
        </>
    )
}
