import { useState, useEffect } from "react";
import Combo from "./Combo";
import comments from "../comments.js";

export default function Login({setLoginProcessStep, userInfo,setCombo}) {
	const [email, setEmail] = useState("");
	

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
							required
						/>
					</div>
					<div className="login-component--grid_lock">
						<Combo />
					</div>
					<div className="login-component--grid_buttons">
						<div className="buttons-group">
							<button id="sign-in" className="signin-button">
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
