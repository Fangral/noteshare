
function Main() {
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-around">
          <div><a href="/create"><button className="btn btn-outline-success" type="submit">Create note</button></a></div>
          <div><a href="/note"><button className="btn btn-outline-success" type="submit">View the note</button></a></div>   
        </div>
        <div className="mt-5">
      <p className="lh-1"><b>Note</b>Share - note sharing service. Create a note, send it to a HASH friend and he will be able to view it!
      After viewing, the note will be deleted either 15 minutes after its creation.</p>
      <p className="lh-1">How create the note?</p>
      <ul>
        <li>Follow the link</li>
        <li>Write a note and click button «Create»</li>
        <li>Send the generated hash to a friend</li>
      </ul>
      <p className="lh-1">How create the note? <br /> Сlick the button «View the note» and insert the hash passed to you.</p>
     </div>  </div>
    );
  }
  
  export default Main;
  