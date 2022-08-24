import { useState } from "react";
import env from '../env.json';

function Create() {
    const [url, setUrl]=useState('');
    const [lineClass, setlineClass]=useState('hide');
    const [formClass, setformClass]=useState('');
    
    const sendData=(obj)=>{
      setformClass('hide');
      setlineClass('');
      fetch(env.urlBackend,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(obj)
      })
      .then(response=>response.json())
      .then(response=>{
        console.log(response);
        if (response.result){
          setUrl(response.url)
        }
      })
    }

    const loadDataFromForm = (event) =>{
      event.preventDefault();
      let note = event.target.elements.note.value;
      note = note.trim();
      if (note===''){
        alert('Заполните поля')
        return false;
      }
      sendData({"note":note})
    }

    return (
      <div className="container mt-5">
        <form action="" onSubmit={loadDataFromForm} className={formClass}>
          <p className="fs-4">Enter the <b>Note</b> you want to share!</p>
          <div><textarea name="note" id="note" rows="4" className="form-control" placeholder="Note..."></textarea></div>
          <div className="d-flex justify-content-end"><button className="btn btn-outline-success mt-2 " type="submit">Create</button></div>
        </form>
        <div className={lineClass}>
        <p className="fs-4">Copy the HASH and pass it to the recipient. Attention, a note can only be read once!</p>
        <div className="bg-success p-2 bg-opacity-25 " style={{color:"#096a43",borderRadius:"5px",padding:"10px!important"}}>
        {url}
        </div>
        <div className="d-flex justify-content-end"><button className="btn btn-outline-success mt-2 " type="submit" onClick={function(){window.location.reload()}}>Create new note</button></div>
        </div>
      </div>
    );
  }
  
  export default Create;
  