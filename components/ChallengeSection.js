import {useEffect,useState} from "react";
import aboutSiteInfo from '../about-site-info';

export default function ChallengeSection({challenges,setChallenge,challenge}){
	
	

	const updateChallengeDisplayed = (e)=>{
		
		setChallenge(e.currentTarget.innerHTML)
		
	}
	useEffect(()=>{
		console.log(challenge)
	},[challenge])
	return (<>
		<div className="challenge-component">
			<h1 className="challenge-title">Features/Challenges</h1>
			<div className="challenge-text">
				{challenges.map((ch,i)=>{
					
					return (
						<div key={i} onClick={updateChallengeDisplayed} className="challenge-link">{ch}</div>
					)
				})}
			</div>
		</div>
	</>)
}