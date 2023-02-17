import { useState, useEffect,useRef } from "react";
import Combo from "./Combo";
import comments from "../comments.js";
import bcrypt from 'bcryptjs';
import User from "../models/userModel";
import axios from 'axios';
const p = console.log;
const t = console.table;

const saltRounds = 10;

export default function Login({loginProcessStep,setLoginProcessStep, userInfo}) {
	const emailInputRef = useRef();
	const [email, setEmail] = useState("");//sample@test.com
	const [slotA,setSlotA]=useState();
	const [slotB,setSlotB]=useState();
	const [slotC,setSlotC]=useState();
	const [slotD,setSlotD]=useState();
	const [message,setMessage] =useState("");
	const [lockActivated,setLockActivated]=useState(false);

	const updateEmail = (e) => {
		let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		if (!e.target.value.match(pattern)) {
			setLoginProcessStep("InvalidEmail")
			console.log(comments.userFeedback.InvalidEmail);
		} else {
			setEmail(e.target.value);
			setLoginProcessStep("EmailUpdate")
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
			if(!email )return null;
			const signIn = await axios.post("/api/signin",user)
			.then(response =>{ 
				setLoginProcessStep(response.data.loginStep)
				console.log(`%c${response.data.message}`,"font-size:1.25rem")	
			})
			
		}catch(err){
			console.log(err)
		}
		
	}

	const newAccountHandler = async ()=>{
		
		let combination = [slotA,slotB,slotC,slotD].join('');
		let user = new User({email:email,password:combination})
		try{
			if(!email )return null;
			const newAccount = await axios.post("/api/newaccount",user)
			.then(response =>{ 
				setLoginProcessStep(response.data.loginStep)
				setMessage(response.data.message);
				
				if(loginProcessStep === "NewAccountFail"){
					setEmail("")
				}
			})		

		}catch(err){
			console.log(err)
		}
	}

	useEffect(()=>{
		console.log(message)
	},[message])
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
							<button id="sign-in" onClick={signInHandler} className="signin-button" >
								Sign in
							</button>
							<button id="newaccount" onClick={newAccountHandler} className="newaccount-button" >
								New Account
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
