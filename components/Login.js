import { useState, useEffect } from "react";
import Combo from "./Combo";
import comments from "../comments.js";
import bcrypt from 'bcryptjs';
import User from "../models/userModel";
import axios from 'axios';
const p = console.log;
const t = console.table;

const saltRounds = 10;

export default function Login({setLoginProcessStep, userInfo}) {
	const [email, setEmail] = useState("sample@test.com");//sample@test.com
	const [slotA,setSlotA]=useState();
	const [slotB,setSlotB]=useState();
	const [slotC,setSlotC]=useState();
	const [slotD,setSlotD]=useState();
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
	const signInHandler = ()=>{
		//1 check if email is entered
		//2 combo: gather posisitions into string
		//3 hash the combo
		//4 check user object against db or local userInfo

		if(!email) return;
		const combination = [slotA,slotB,slotC,slotD].join('');


		async function hashPassword(plainCombo){
			const hash = await bcrypt.hash(plainCombo,saltRounds);
			return hash
		}

		const user = { email: email, hashWord: hashPassword(combination) }

		setLoginProcessStep("SigninAttempt")
		console.log(comments.userFeedback.SigninAttempt)
		console.log("%cUser: %o","font-weight:bold;color: green;",user)

		//4 check user object against db 
		const filtered =  function(userInfo){
			return  userInfo.filter(u=>u.email===user.email)
		}
		if(filtered(userInfo).length >0){
			if(user.hashWord === filtered(userInfo)[0]['hashWord'] ){
					setLoginProcessStep("SigninSuccess")
					console.log("Found it")
			}
		}else{
			setLoginProcessStep("SigninFail")
			console.log("Email does not exist")
		}
	}
	const newAccountHandler = async ()=>{
		
		let combination = [slotA,slotB,slotC,slotD].join('');
		p(combination)
		let user = new User({
			email: email,
			password: combination
		})
		try{
			const newAccount = await axios.post("/api/newaccount",user)
			.then(response =>{ setLoginProcessStep(response.data.loginStep)	})
		}catch(err){
			console.log(err)
		}
	}
	
	useEffect(() => {
		console.log(email);
		//console.log(comments)
	}, [email]);
	return (
		<>
			<div id="login-component" className="login-component">
				<div className="login-component--grid">
					<div className="login-component--grid_email">
						<input
							id="email-input"
							onBlur={updateEmail}
							className="email-input"
							type="text"
							name="email"
							placeholder="Please enter your email"
							defaultValue={email}
							required
						/>
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
