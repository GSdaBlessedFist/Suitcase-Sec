import Combo from "./Combo";

export default function Login(){
	
	return (<>
		<div id="login-component" className="login-component">
			<div className="login-component--grid">
				<div className="login-component--grid_email">
					<input id="email-input" className="email-input" type="text" name="email" placeholder="Email" required/>
				</div>
				<div className="login-component--grid_lock">
					<Combo/>
				</div>
				<div className="login-component--grid_buttons">
					<div className="buttons-group">
						<button id="sign-in" className="signin-button">Sign in</button>
						<button id="newaccount" className="newaccount-button">New Account</button>
					</div>
				</div>
				
			</div>
			{/*
				
				<Combo/>
				
			</form>*/}
		</div>
	</>)
}