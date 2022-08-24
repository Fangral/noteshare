import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import env from "../env.json";

function Note() {
  let{noteURL}= useParams();//хранятся ссылка после note/
  const [noteText, setnoteText]=useState('');
  const [lineClass, setlineClass]=useState('hide');
  const [formClass, setformClass]=useState('hide');
  const [errorClass, seterrorClass]=useState('hide');

  useEffect(()=>{// используется до отрисовки страницы
      if(noteURL!==undefined){
      fetch(env.urlBackend,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({"url":noteURL})
      })
      .then(response=>response.json())
      .then(response=>{
        if (response.result){
         setnoteText(response.note)
         setlineClass('');
         setformClass('hide');
         seterrorClass('hide');
        }
        else if (!response.result){
          setlineClass('hide');
          setformClass('hide');
          seterrorClass('');
        }
      })
    }
    else{
      setlineClass('hide');
      setformClass('');
      seterrorClass('hide');
    }
  },[noteURL])

  function getNote(event){
    event.preventDefault();
    let url=event.target.elements.url.value;
    url=url.trim();
    if (url===''){
      alert('Заполните поля')
      return false;
    }
   noteURL=url;
   window.location.href=env.url+'/'+url;
  }
  function searchNote(){
    window.location.href=env.url;
  }

    return (
      <div className="container-fluid">
        <div className={lineClass}>
          <div className="container mt-5">
            <div className="bg-success p-2 bg-opacity-25" style={{color:"#006400",borderRadius:"5px"}}>
              <b>Note: {noteText}</b>
              <hr />
              <p className="mb-0 text-decoration-underline">Attention! Copy the note. After viewing it, it will be deleted.</p>
            </div>
            <div className="d-flex justify-content-end"><button className="btn btn-outline-primary mt-2" onClick={searchNote} type="submit">Search other Note</button></div>
          </div>
        </div>
        <div className={errorClass}>
          <div className="container mt-5">
          <div className="d-flex flex-column ">
            <div className="align-self-center"> <img src="/dfind.png" alt="error" /></div>
            <div className="align-self-center mt-2"><p className="fs-4 ">Sorry, the note was not found</p></div>
          </div>
          </div>
        </div>
        <div className={formClass}>
          <div className="container mt-5">
            <p className="fs-4">Enter the <b>Hash</b> of the sent note and paste it into the field below</p>
            <form className="d-flex" onSubmit={getNote}>
              <input className="form-control me-2" name="url" id="url" type="search" placeholder="Hash..." aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
        
        
      </div>
    );
  }
  
  export default Note;
  