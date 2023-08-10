import React, {useState} from 'react';

 export default function textform(props) {
    const handleUPclick = ()=>{
        //console.log("uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAler("convert to the uppercase", "success");
    }
    const handleloclick = ()=>{
        //console.log("uppercase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAler("convert to the lowercase", "success");
    }
    const handleclearclick = ()=>{
        //console.log("uppercase was clicked" + text);
        let newtext = "";
        setText(newtext);
        props.showAler("convert to the clear", "success");
    }
    const handleUPchange = (event)=>{
        //console.log("on change");
        setText(event.target.value);
    }
    const handlecopy = ()=>{
        var text = document.getElementById("mybox");
        text.select();
        //text.setselectionRange(0.9999);
        navigator.clipboard.writeText(text.value);
        props.showAler("convert to the seletion", "success");
        }
         
        const handelspace = () =>{
            let newtext = text.split(/[ ]+/);
            setText(newtext.join(""))
            props.showAler("convert to the space", "success");
        }

    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="form-floating">
  <textarea className="form-control" value={text} onChange={handleUPchange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="mybox"></textarea>
</div>
<button className="btn btn-primary my-3 mx-2" onClick={handleUPclick}>convert to Uppercase</button>
<button className="btn btn-primary my-3 mx-2" onClick={handleloclick}>convert to Lovercase</button>
<button className="btn btn-primary my-3 mx-2" onClick={handleclearclick}>clear</button>
 <button className="btn btn-primary my-3 mx-2" onClick={handlecopy}>copy text</button> 
 <button className="btn btn-primary my-3 mx-2" onClick={handelspace}>Remove Extra spaces</button> 
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
