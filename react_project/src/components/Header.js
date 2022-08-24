import{NavLink} from 'react-router-dom';

function Header() {
    return (
      <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
      <NavLink className="navbar-brand font-weight-bold" to="/">
      <img src="/logo.png" alt="" height="30"  className="d-inline-block align-text-top"/>
        <b>Note</b>Share</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link " to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/note">Note</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/create">Create</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


      </div>
    );
  }
  
  export default Header;
  