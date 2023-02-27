import { useRouter } from 'next/router';

export default function Dashboard({email}){
	const nameStr = Array.from(email.split("@",1)).toString();
	const displayName = nameStr.charAt(0).toUpperCase() + nameStr.slice(1)
	const router = useRouter();

	const signOutHandler = async()=>{
		router.reload(window.location.pathname);
	}

	console.log(displayName)
	return (<>
		<div className="dashboard-component">
			<div id="dashboard-header">Thank you for playing along, <span style={{"font-weight":"bold","font-size":"1.25rem"}}>{displayName}</span></div>
			<div className="dashboard-box-message-group">
				<div className="dashboard-boxes-container">
					<div className="dashboard-boxes-container--grid">
						<div className="dashboard-boxes-container--grid--box__navbar"></div>
						<div className="dashboard-boxes-container--grid--box__leftbar"></div>
						<div className="dashboard-boxes-container--grid--box__topMid"></div>
						<div className="dashboard-boxes-container--grid--box__bottomLeft"></div>
						<div className="dashboard-boxes-container--grid--box__bottomRight"></div>
						<div className="dashboard-boxes-container--grid--box__rightbar"></div>
					</div>	
				</div>
				<div className="dashboard-message-area">
					<div className="dashboard-text">Now we can <span className="dashboard-strong">finally</span> see <br/><em>what's in the box.</em> </div>
					<button id="dashboard-signout-button" onClick={signOutHandler}>Signout</button>
				</div>
			</div>
		</div>
	</>)
}