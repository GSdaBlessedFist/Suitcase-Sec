import { useState, useEffect,useRef,useContext } from "react";
import { useRouter } from 'next/router';
import Image from 'next/image';
import Combo from "./Combo";
import comments from "../comments.js";
import User from "../models/userModel";
import axios from 'axios';
import {LoggedInContext} from "../context/loginContext";
import {ChecklistContext} from "../context/checklistContext";

const p = console.log;
const t = console.table;

export default function Login({email,setEmail,loginProcessStep,setLoginProcessStep, userInfo}) {
	const router = useRouter();
	const emailInputRef = useRef();
	//const [email, setEmail] = useState("");//sample@test.com
	const [slotA,setSlotA]=useState();
	const [slotB,setSlotB]=useState();
	const [slotC,setSlotC]=useState();
	const [slotD,setSlotD]=useState();
	const [message,setMessage] =useState("");
	const [lockActivated,setLockActivated]=useState(false);
	const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
	const { checklistStatuses, setChecklistStatuses } = useContext(ChecklistContext);

	const updateEmail = (e) => {
		let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		if (!e.target.value.match(pattern)) {
			setLoginProcessStep("InvalidEmail")
			setChecklistStatuses({
				noEmailnoPIN:false,
				invalidEmail:true,
				newAccountFail:false,
				emailNotFound:false,
				incorrectEmailPIN:false,
				validEmail:false,
				newAccountSuccess:false,
				authenticated:false,
				signedIn:false,
				signedOut:true
			})
			console.log(comments.userFeedback.InvalidEmail);
		} else {
			setEmail(e.target.value);
			setLoginProcessStep("EmailUpdate")
			setChecklistStatuses({
				noEmailnoPIN:false,
				invalidEmail:false,
				newAccountFail:false,
				emailNotFound:false,
				incorrectEmailPIN:false,
				validEmail:true,
				newAccountSuccess:false,
				authenticated:false,
				signedIn:false,
				signedOut:true
			})
			console.log(comments.userFeedback.EmailUpdate)
		}
	};

	const signInHandler = async()=>{
		
		if(!email) return;
		let combination = [slotA,slotB,slotC,slotD].join('');
		
		let user = new User({
			email: email,
			password: combination
		})
		try{
			const signIn = await axios.post("/api/signin",user)
			.then(response =>{ 
				setLoginProcessStep(response.data.loginStep);
				console.log(`%c${response.data.message}`,"font-size:1.25rem");	
				return
			})
			
		}catch(err){
			console.log(err)
		}
		
	}

	const signOutHandler = async()=>{
		setLoggedIn(false)
		setChecklistStatuses({
			noEmailnoPIN:true,
			invalidEmail:false,
			newAccountFail:false,
			emailNotFound:false,
			incorrectEmailPIN:false,
			validEmail:false,
			newAccountSuccess:false,
			authenticated:false,
			signedIn:false,
			signedOut:true
		})
		setEmail("email");
		setMessage(response.data.message);
		router.reload(window.location.pathname);
	}

	const newAccountHandler = async ()=>{
		
		let combination = [slotA,slotB,slotC,slotD].join('');
		
		console.log(`newAccountHandler:: email:${email}`)
		try{
			if(!email ){
				setLoginProcessStep("InvalidEmail")
				setChecklistStatuses({
					noEmailnoPIN:false,
					invalidEmail:true,
					newAccountFail:true, 
					emailNotFound:false,
					incorrectEmailPIN:false,
					validEmail:false,
					newAccountSuccess:false,
					authenticated:false,
					signedIn:false,
					signedOut:false
				})
			};
			let user = new User({email:email,password:combination})
			const newAccount = await axios.post("/api/newaccount",user)
			.then(response =>{ 
				setLoginProcessStep(response.data.loginStep);
				// console.log("line:132"+loginProcessStep);
				setMessage(response.data.message);
			})		

		}catch(err){
			console.log(err)
		}
	}

	useEffect(()=>{
		switch(loginProcessStep){
			case "SigninFailEmail":
				setLoggedIn(false);
				setChecklistStatuses({
					noEmailnoPIN:false,
					invalidEmail:false,
					newAccountFail:false,
					emailNotFound:true,
					incorrectEmailPIN:false,
					validEmail:true,
					newAccountSuccess:false,
					authenticated:false,
					signedIn:false,
					signedOut:true
				})
				break;
			case "SigninFail":
				setLoggedIn(false);
				setChecklistStatuses({
					noEmailnoPIN:false,
					invalidEmail:false,
					newAccountFail:false,
					emailNotFound:true,
					incorrectEmailPIN:false,
					validEmail:true,
					newAccountSuccess:false,
					authenticated:false,
					signedIn:false,
					signedOut:true
				})
				break;
			case "SigninSuccess":
				setLoggedIn(true);
				setChecklistStatuses({
					noEmailnoPIN:false,
					invalidEmail:false,
					newAccountFail:false,
					emailNotFound:false,
					incorrectEmailPIN:false,
					validEmail:true,
					newAccountSuccess:false,
					authenticated:true,
					signedIn:true,
					signedOut:false
				})
				break;
			case "NewAccountFail":
				//setEmail("")
				setLoggedIn(false);
				setChecklistStatuses({
					noEmailnoPIN:false,
					invalidEmail:true,
					newAccountFail:true,
					emailNotFound:false,
					incorrectEmailPIN:false,
					validEmail:false,
					newAccountSuccess:false,
					authenticated:false,
					signedIn:false,
					signedOut:true
				})
				break;
			case "NewAccountSuccess":
				setLoggedIn(true);
				setChecklistStatuses({
					noEmailnoPIN:false,
					invalidEmail:false,
					newAccountFail:false, 
					emailNotFound:true,
					incorrectEmailPIN:false,
					validEmail:true,
					newAccountSuccess:true,
					authenticated:true,
					signedIn:true,
					signedOut:false
				})
				break;	
		}
	// },[email,message,loginProcessStep,checklistStatuses,loggedIn])
	},[loginProcessStep])
	return (
		<>
			<div id="login-component" className="login-component">
				<div className="login-component--grid">
					<div className="login-component--grid_email">
						<input
							id="email-input"
							ref={emailInputRef}
							onBlur={updateEmail}
							className="email-input"
							type="text"
							name="email"
							placeholder="Please enter your email"
							defaultValue={email}
							required
						/>
					<div className="pin-message"><em>the default PIN is 0000</em></div>
					</div>
					<div className="login-component--grid_lock">
						<Combo setSlotA={setSlotA} setSlotB={setSlotB} setSlotC={setSlotC} setSlotD={setSlotD} setLockActivated={setLockActivated} lockActivated={lockActivated}/>
					</div>
					<div className="login-component--grid_buttons">
						<div className="buttons-group">
							{(loggedIn === true)?(
								<button id="sign-out" onClick={signOutHandler} className="signout-button" >Sign out</button>
							):(
								<button id="sign-in" onClick={signInHandler} className="signin-button" >Sign in</button>
							)}
							<button id="newaccount" onClick={newAccountHandler} className="newaccount-button" >
								New Account
							</button>
						</div>
					</div>
				</div>
			</div>
			<Image src="/images/suitcase.svg" width={300.5} height={272.5} alt="Suitcase Sec logo" className="logo"/>
		</>
	);
}
