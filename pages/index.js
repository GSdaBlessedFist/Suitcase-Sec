import {useEffect,useState} from "react";
import Login from "../components/Login";
import Info from "../components/Info";
import Checklist from "../components/Checklist";
import dbConnect from "mongoose";


export default function Home() {
  /*loginProcessStep: 
  "NoEmail0000" || "InvalidEmail"
  "EmailUpdate" || "SigninSuccess"
  "SigninFail" || SigninFailEmail
  "NewAccountSuccess"||"NewAccountFail"
  "Signout"
  */
  const [loginProcessStep,setLoginProcessStep]= useState("NoEmail0000");

  useEffect(()=>{
  },[])
  return (
    <>
      <nav className="nav">
          <div className="nav-item">Title</div>
          <div className="nav-item">developed by</div>
          <div className="nav-item">about the site</div>
      </nav> 

      <main className="main-section">
          <section className="stage">
              <div className="stage--grid">
                  <div id="checklist-container" className="stage--grid_checklist">
                    <Checklist/>
                  </div>
                  <div id="login-container" className="stage--grid_login">
                    <Login loginProcessStep={loginProcessStep} setLoginProcessStep={setLoginProcessStep} />
                  </div>
                  <div id="info-container" className="stage--grid_info">
                    <Info loginProcessStep={loginProcessStep}/>
                  </div>
              </div>
          </section>

      </main>     
    </>
  )
}
