import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Info from "../components/Info";
import Checklist from "../components/Checklist";
import Dashboard from "../components/Dashboard";
import CodeButton from "../components/CodeButton";
import dbConnect from "mongoose";
import { LoggedInContext } from "../context/loginContext";

export default function Home() {
  /*loginProcessStep: 
  "NoEmail0000" || "InvalidEmail"
  "EmailUpdate" || "SigninSuccess"
  "SigninFail" || SigninFailEmail
  "NewAccountSuccess"||"NewAccountFail"
  "Signout"
  */
  const [email, setEmail] = useState("");
  const [loginProcessStep, setLoginProcessStep] = useState("NoEmail0000");
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  useEffect(() => {
    //console.log(loggedIn);
  }, [loggedIn]);
  return (
    <>
      <Navbar />

      <main className="main-section">
        <section className="stage">
          <div className="stage--grid">
            <div id="checklist-container" className="stage--grid_checklist">
              <Checklist />
            </div>

            {loggedIn !== true ? (
              <div id="login-container" className="stage--grid_login">
                <Login
                  email={email}
                  setEmail={setEmail}
                  loginProcessStep={loginProcessStep}
                  setLoginProcessStep={setLoginProcessStep}
                />
              </div>
            ) : (
              <Dashboard email={email} />
            )}

            <div id="info-container" className="stage--grid_info">
              <Info loginProcessStep={loginProcessStep} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
