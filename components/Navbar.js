import Link from "next/link";
import Image from "next/image";

export default function Navbar(){
	
	return (<>
		<nav className="nav-component">
          <div id="nav-logo-about-group" className="nav-logo-about-group">
            <div id="nav-logo" className="nav-item">
              <a href="/">
                <Image src="/images/suitcase-sec(logo).svg" width={101} height={50} alt="Suitcase Security logo"/>
              </a>            
            </div>
            <div  className="nav-item">
              <Link id="nav-about-site" href="/about-site">about the site</Link>
            </div>
          </div>
          <div id="nav-dev" className="nav-item">created by <span id="nav-dev-dark">Jason Zamora</span></div>
      	</nav> 
	</>)
}