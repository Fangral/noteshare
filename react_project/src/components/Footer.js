
function Footer() {
  let year=new Date();
    return (
<footer className="footer fixed-bottom py-3 bg-light">
  <div className="container">
    <div className="d-flex justify-content-end">

    <span className="text-muted">©{year.getFullYear()}</span>
    </div>
  </div>
</footer>
    );
  }
  
  export default Footer;
  