import { useState, useEffect } from "react";
import Combo from "./Combo";
import comments from "../comments.js";
import bcrypt from 'bcryptjs';
const saltRounds = 10;

export default function Login({setLoginProcessStep, userInfo,setCombo}) {
	const [email, setEmail] = useState("");//sample@test.com
	const [slotA,setSlotA]=useState("");
	const [slotB,setSlotB]=useState("");
	const [slotC,setSlotC]=useState("");
	const [slotD,setSlotD]=useState("");
	

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

		if(!email) return;
		const combination = [slotA,slotB,slotC,slotD].join('');

		async function hashPassword(plainCombo){
			const hash = await bcrypt.hash(plainCombo,saltRounds);
			return hash
		}

		const user = {
			email: email,
			combo:combination, //dev only
			hashedCombo: hashPassword(combination)
		}

		//console.log(user)
		setLoginProcessStep("SigninAttempt")
		console.log(comments.userFeedback.SigninAttempt)
		console.log("%cUser: %o","font-weight:bold;color: green;",user)
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
						<Combo setSlotA={setSlotA} setSlotB={setSlotB} setSlotC={setSlotC} setSlotD={setSlotD}/>
					</div>
					<div className="login-component--grid_buttons">
						<div className="buttons-group">
							<button id="sign-in" onClick={signInHandler} className="signin-button" >
								Sign in
							</button>
							<button id="newaccount" className="newaccount-button" >
								New Account
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
