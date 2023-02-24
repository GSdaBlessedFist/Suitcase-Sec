import {useEffect,useState,useContext} from "react";
import Image from "next/image";
import Link from "next/link";
import Login from "../components/Login";
import Info from "../components/Info";
import Checklist from "../components/Checklist";
import Dashboard from "../components/Dashboard";
import CodeButton from "../components/CodeButton";
import dbConnect from "mongoose";
import {LoggedInContext} from "../context/loginContext";


export default function Home() {
  /*loginProcessStep: 
  "NoEmail0000" || "InvalidEmail"
  "EmailUpdate" || "SigninSuccess"
  "SigninFail" || SigninFailEmail
  "NewAccountSuccess"||"NewAccountFail"
  "Signout"
  */
  const [email, setEmail] = useState("");
  const [loginProcessStep,setLoginProcessStep]= useState("NoEmail0000");
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  useEffect(()=>{
  },[])
  return (
    <>
      <nav className="nav">
          <div id="nav-logo" className="nav-item">
            <a href="/">
              <Image src="/images/suitcase-sec(logo).svg" layout="responsive" width={101} height={50} alt="Suitcase Security logo"/>
            </a>            
          </div>
          
          <div  className="nav-item">
            <Link id="nav-about-site" href="/about-site">about the site</Link>
          </div>
          <div id="nav-dev" className="nav-item">created by <span id="nav-dev-dark">Jason Zamora</span></div>
      </nav> 

      <main className="main-section">
          <section className="stage">
              <div className="stage--grid">
                  <div id="checklist-container" className="stage--grid_checklist">
                    <Checklist/>
                  </div>
                  {(!loggedIn)?(
                    <div id="login-container" className="stage--grid_login">
                      <Login email={email} setEmail={setEmail} loginProcessStep={loginProcessStep} setLoginProcessStep={setLoginProcessStep} />
                    </div>
                  )
                  :(
                    <Dashboard email={email}/>
                  )
                  }
                  
                  <div id="info-container" className="stage--grid_info">
                    <Info loginProcessStep={loginProcessStep}/>
                  </div>
                  <CodeButton/>
              </div>
          </section>

      </main>
    </>
  )
}
