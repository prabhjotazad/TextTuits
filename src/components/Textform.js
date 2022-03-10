import React, {useState} from 'react'

const Textform = (props) => {
    const handleOnChange = (event) => {
            setText(event.target.value);
    }
    const handleClear = () => {
       setText('');
}
    const handleUpperClick = () => {

        let upparText = text.toUpperCase();
        setText(upparText);
    }
    const handleextraspace = () => {

      let extraSpace = text.split(/[ ]+/);
      setText(extraSpace.join(" "))
  }
    const handleLowerClick = () => {

        let upparText = text.toLowerCase();
        setText(upparText);
    }
    const handleCopyText = () => {

      let copyText = document.getElementById('exampleFormControlTextarea1');
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
      
  }
    const [text, setText]= useState('')

  return (
      <>
      <h1>{props.headline}</h1>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
    <button type="button" className="btn btn-primary my-2" onClick={handleUpperClick}>Convert to UpperCase</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleLowerClick}>Convert to LowerCase</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleClear}>Clear the text</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleextraspace}>Remove extra space</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleCopyText}>Copy text</button>
    <h3 className='my-3'>{props.subheadline}</h3>
    <div>Total words: {text.split(' ').length} | Total character: {text.length}</div>
    <div>Total time required to read this text: {0.008 * text.split(' ').length}</div>
    <div className="alert alert-secondary my-3" role="alert">{text}</div>
    </>
  )
}

export default Textform