import React,{useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState("Enter your text")
    function Uppercase() {
        let newText = text.toUpperCase()
        setText(newText)
        props.showalert("Converted to uppercase","success");
    }
    function Lowercase() {
        let newText = text.toLowerCase()
        setText(newText)
        props.showalert("Converted to lowercase","success");
    }
    function convertReverse() {
        let newText = text.split("").reverse().toString().replaceAll(",","")
        setText(newText)
    }
    function convertInverse() {
        // let newText = text.split("").reverse().toString().replaceAll(",","")
        let newText = text.split("")
        for (let i = 0; i < newText.length; i++) {
            if(i%2!==0){
                newText[i]=newText[i].toUpperCase()
            }else{
                newText[i]= newText[i].toLowerCase()
            }
        }
        newText = newText.toString().replaceAll(",","")

        setText(newText)
    }
    function handleText(event) {
        setText(event.target.value)
    }
    return (
        <>
        <div>
            <div className="my-3" style={{color: props.mode==="light"?"#042743":"white"}} >
                <div></div>
                <h2>{props.heading}</h2>
                <textarea className="form-control"  value={text} style={{backgroundColor: props.mode==="light"?"white":"grey",color:props.mode==="light"?"#042743":"white"}} onChange={handleText} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={Uppercase}>Convert to UPPERCASE</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={Lowercase}>Convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={convertReverse}>Convert to Reverse</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={convertInverse}>Convert to InVeRsE</button>
        </div>
        <div className="container" style={{color: props.mode==="light"?"#042743":"white"}}>
            <h2>Text Summary</h2>
            {/* <p>{ text.length<=0?"0":text.split(" ").length} words and {text.length} characters count</p> */}
            <p>{ text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters count</p>
            <p>Read in {0.008 * text.split(" ").length} minutes</p>
            <p>{text.length>0?text:"Enter your text to preview"}</p>
            {/* <p>{text}</p> */}
        </div>
        </>
    )
}
