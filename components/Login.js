import Combo from "./Combo";

export default function Login(){
	
	return (<>
		<div id="login-component" className="login-component">
			<form action="#">
				<input id="email-input" className="email-input" type="text" name="email" placeholder="Email" required/>
				<Combo/>
				<button id="sign-in" className="signin-button">Sign in</button>
				<button id="newaccount" className="newaccount-button">New Account</button>
			</form>
		</div>
	</>)
}