import {useEffect,useState} from "react";
import Login from "../components/Login";
import Info from "../components/Info";

const usersObj = [
  {
    email:"test@example.com",
    combo:"0123",
    hashedCombo:""
  },{
    email:"sample@test.com",
    combo:"0000",
    hashedCombo:""
  }
]



export default function Home() {
  /*loginProcessStep: 
  "NoEmail0000" || "InvalidEmail"
  "EmailUpdate" || "Signin Success"
  "Signin Fail" || "NewAccountSuccess"
  "NewAccountFail"
  */
  const [loginProcessStep,setLoginProcessStep]= useState("NoEmail0000");
  const [combo,setCombo]=useState("A0B0C0D0");

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
                  <div id="checklist-container" className="stage--grid_checklist">CHECKLIST</div>
                  <div id="login-container" className="stage--grid_login">
                    <Login setLoginProcessStep={setLoginProcessStep} userInfo={usersObj} setCombo={setCombo}/>
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
