

export default function Dashboard({email}){
	const nameStr = Array.from(email.split("@",1)).toString();
	const capFirstLetter = nameStr.charAt(0).toUpperCase() + nameStr.slice(1)

	console.log(capFirstLetter)
	return (<>
		<div className="dashboard-component">
			<div id="dashboard-header">Thank you for playing along, {capFirstLetter}</div>
			<div className="dashboard-boxes-container">
				<div className="dashboard-boxes-container--grid">
					<div className="dashboard-boxes-container--grid__box"></div>
					<div className="dashboard-boxes-container--grid__box"></div>
					<div className="dashboard-boxes-container--grid__box"></div>
					<div className="dashboard-boxes-container--grid__box"></div>
					<div className="dashboard-boxes-container--grid__box"></div>
				</div>	
			</div>
		</div>
	</>)
}