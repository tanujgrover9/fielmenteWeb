import logo from '../src/images/images-removebg-preview.png';
export default function Header() {
    return(
      <header>
        <nav className="nav">
        <img src={logo}></img>
            

          {/* <h1 class="hed">company name </h1> */}
          <ul className="nav-item">
          <li className="docs">About Us |</li>
            <li className="tut">Industry we Serve |</li>
            <li className="service">Service |</li>
            <li>Blogs |</li>
           
            <li>Contact us</li>
          </ul>
          <button className="phone">📞+919501868775</button>
        </nav>
        
      </header>
    
    )
  }