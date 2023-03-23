import Image from "next/image"
import { useState, useEffect,useRef,useContext } from "react";
import {LoggedInContext} from "../context/loginContext";
import {ChecklistContext} from "../context/checklistContext";

export default function Checklist(){
	
	const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
	const { checklistStatuses, setChecklistStatuses } = useContext(ChecklistContext);

	return (<>
		<div className="checklist-component">
		  <div className="checklist--grid">
		  	<div className="checklist--grid_noEmailNoPIN">
		  		<div className="checkbox">
		  			{(checklistStatuses.noEmailnoPIN)?<Image src="/images/checkmark(green).svg" width={25} height={23.53} className="checkmark" alt="checkmark"/>:<div></div>}
		  		</div>
		  		<div>
		  			<div className="checklist-title">
		  				<div>No Email/</div>
		  				<div>No PIN</div>
		  			</div>
		  		</div>
		  	</div>

		  	<div className="checklist--grid_success">
		  		<div className="checklist-title">Success</div>
		  		<div className="checklist-event">
		  			<div className="checkbox">
		  				{(checklistStatuses.validEmail)?<Image src="/images/checkmark(green).svg" width={25} height={23.5} className="checkmark" alt="checkmark"/>:<div></div>}
		  			</div>
		  			<div>Valid Email</div>
		  		</div>
		  		<div className="checklist-event">
		  			<div className="checkbox">
		  				{(checklistStatuses.newAccountSuccess)?<Image src="/images/checkmark(green).svg" width={25} height={23.5} className="checkmark" alt="checkmark"/>:<div></div>}
		  			</div>
		  			<div>New Account Success</div>
		  		</div>
		  		<div className="checklist-event">
		  			<div className="checkbox">
		  				{(checklistStatuses.authenticated)?
		  					<Image src="/images/checkmark(green).svg" width={25} height={23.5} className="checkmark" alt="checkmark"/>:<div></div>}
		  			</div>
		  			<div>Authenticated</div>
		  		</div>
		  	</div>
		  	<div className="checklist--grid_failure">
		  		<div className="checklist-title">Failure</div>
		  		<div className="checklist-event">
		  			<div className="checkbox">
		  				{(checklistStatuses.invalidEmail)?
		  					<Image src="/images/checkmark(green).svg" width={25} height={23.5} className="checkmark" alt="checkmark"/>:<div></div>}
		  			</div>
		  			<div>Invalid Email</div>
		  		</div>
		  		<div className="checklist-event">
		  			<div className="checkbox">
		  				{(checklistStatuses.newAccountFail)?
		  					<Image src="/images/checkmark(green).svg" width={25} height={23.5} className="checkmark" alt="checkmark"/>:<div></div>}
		  			</div>
		  			<div>New Account Failure</div>
		  		</div>
		  		<div className="checklist-event">
		  			<div className="checkbox">
		  				{(checklistStatuses.emailNotFound)?
		  					<Image src="/images/checkmark(green).svg" width={25} height={23.5} className="checkmark" alt="checkmark"/>:<div></div>}
		  			</div>
		  			<div>Email not found</div>
		  		</div>
		  		<div className="checklist-event">
		  			<div className="checkbox">
		  				{(checklistStatuses.incorrectEmailPIN)?
		  					<Image src="/images/checkmark(green).svg" width={25} height={23.5} className="checkmark" alt="checkmark"/>:<div></div>}
		  			</div>
		  			<div>Incorrect Email/PIN</div>
		  		</div>
		  	</div>
		  	<div className="checklist--grid_signinStatus">
		  		<div className="checklist-title">Signin Status</div>
		  		<div className="checklist-event">
		  			<div className="checkbox">
		  				{(checklistStatuses.signedIn)?<Image src="/images/checkmark(green).svg" width={25} height={23.5} className="checkmark" alt="checkmark"/>:<div></div>}
		  			</div>
		  			<div>Signed in</div>
		  		</div>
		  		<div className="checklist-event">
		  			<div className="checkbox">
		  				{(checklistStatuses.signedOut)?<Image src="/images/checkmark(green).svg" width={25} height={23.5} className="checkmark" alt="checkmark"/>:<div></div>}
		  			</div>
		  			<div>Signed out</div>
		  		</div>
		  	</div>
		  </div>
		</div>
	</>)
}