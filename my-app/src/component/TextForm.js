import React, {useState} from "react";

// in TextForm.js we used state 

export default function TextForm(props) {
   
    const upperCase = ()=>{
        // console.log("to upperCase" + text);
        let newText = text.toUpperCase();
        setText(newText)
        // document.title = "text - uppercase"
        // setInterval (()=>{
        //   document.title = "Update the file"
        // },2000)
        
    }

    const lowerCase = ()=>{
      // console.log("to upperCase" + text);
      let newText = text.toLowerCase();
      setText(newText)
      
  }

    const handleOne = (event)=>{
        // console.log("on change")
        setText(event.target.value)  // we can change the value 
 
    }

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }

    const clear = ()=>{
      let newtext =("");
      setText(newtext)

    }

    const [text, setText] = useState(' ');

    // text = "Enter the text here"  wrong way to change the state;
    // setText = ("Enter the text here")   right way to set state;

  return (
    <> 
    <div className="container">
        <div className="mb-3">
         <h1>{props.heading}</h1>
         <textarea className="form-control" value={text} onChange={handleOne} id="myBox" rows="8"></textarea>
         </div>
         <button className="btn btn-primary mx-2" onClick={upperCase}>convert to upperCase</button>
         <button className="btn btn-primary mx-2" onClick={lowerCase}>convert to upperCase</button>
         <button className="btn btn-secondary mx-2" onClick={speak}>Speak</button>
         <button className="btn btn-primary mx-2" onClick={clear}>Clear</button>
    </div>
    <div className="container my-3">
      <h1>your text here</h1>
      <p>{text.split(" ").length} words & {text.length} characters</p>
      <p>{ 0.08 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}


