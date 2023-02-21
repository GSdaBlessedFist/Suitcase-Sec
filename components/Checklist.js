export default function Checklist(){
	
	return (<>
		<div className="checklist-component">
		  <div className="checklist--grid">
		  	<div className="checklist--grid_noEmailNoPIN">
		  		<div className="checkbox">
		  			<img src="/images/checkmark(green).svg" className="checkmark"/>
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
		  				<img src="/images/checkmark(green).svg" className="checkmark"/>
		  			</div>
		  			<div>Valid Email</div>
		  		</div>
		  		<div className="checklist-event">
		  			<div className="checkbox">
		  				<img src="/images/checkmark(green).svg" className="checkmark"/>
		  			</div>
		  			<div>New Account Success</div>
		  		</div>
		  		<div className="checklist-event">
		  			<div className="checkbox">
		  				<img src="/images/checkmark(green).svg" className="checkmark"/>
		  			</div>
		  			<div>New Account Success</div>
		  		</div>
		  	</div>
		  	<div className="checklist--grid_failure">
		  		<div className="checklist-title">Failure</div>
		  	</div>
		  	<div className="checklist--grid_signinStatus">
		  		<div className="checklist-title">Signin Status</div>
		  	</div>
		  </div>
		</div>
	</>)
}