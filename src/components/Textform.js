import React,{useState} from 'react'

export default function Textform(props) {
    const[text,setText]=useState(""); //This means text initial state or value is Enter Text Here but in order to change it setText function will be used
    //text="Hello Text"; //Incorrect Way of Changing text...
    //setText("Hello Text"); //Correct Way Of Changing text...

    

    const handleClick=()=>{
        //alert("This BUUTON WAS CLICKED");
        let val=text.toUpperCase();
        setText(val);
      props.showAlert("Text Converted To Upper","success");

    }

    const handleChange=(event)=>{ //event is an object and this function indicates event handling
        console.log("On Change");
        setText(event.target.value); // it allows user to type into text area as setText sets the text as text+value entered by user
       
    }

    const copyText=()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Text copied","success");

    }

    const clearText=()=>{
     setText("");

    }

    const removeSpace=()=>{
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showAlert("Extra spaces removed","success");

    }

    const ToLower=()=>{
     let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Text Converted To Lower","success");
    }
    return (
       
    <>
     <h1 className="mb-3" style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
     <div className="container">
      <div className="mb-3">
        
        <textarea className="form-control mb-3" value={text} onChange={handleChange} style={{backgroundColor: props.mode==='light'?'white':'dimgrey',color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={ToLower}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearText}>CLear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={copyText}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={removeSpace}>Remove Extra Spaces</button>
        {/* <button className="btn btn-primary mx-2" onClick={clearText}>Number</button> */}
     
      </div>
     </div>
      
     <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      
       
       <h2 >Your Text Summary</h2>
       <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
       <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} seconds To Read</p>
       {/* <p>{text.split(".").length} sentences</p> */}
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter Something To Preview It"}</p>
     </div>
      
    </>  
    )
}
