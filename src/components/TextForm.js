import React ,{useState} from 'react'

function TextForm(props) {
    const handle=()=>{
        let n = text.toUpperCase();
        setText(n);

    }
    const lower=()=>{
        let d=text.toLowerCase();
        setText(d);
    }


    const handleOnChange=(event)=>{
    setText(event.target.value)
    }
    const [text, setText] = useState('');

    return (
        <div>
         
            <div className="mb-3">
               <label for="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
               <textarea  className="form-control" value={text} id="exampleFormControlTextarea1" onChange={handleOnChange} rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handle}>Uppercase π</button>
            <button className="btn btn-secondary my-2" onClick={lower}>Lowercase π</button>

            <h3>Your text summary</h3>
            <p>Words : {text.split(" ").length-1} πΊοΈ</p>
            <p>Alphabets/Icons/Numbers : {text.length} π°οΈ</p>
            <p>{31.9 * text.length} seconds required to read this ! π</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    )
}

export default TextForm
