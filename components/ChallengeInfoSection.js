import aboutSiteInfo from '../about-site-info';
import {useEffect,useState} from "react";

export default function ChallengeInfoSection({challenge}){

	const [challengeDescription,setChallengeDescription] = useState();
	useEffect(()=>{

		setChallengeDescription(aboutSiteInfo.challengeDescriptions[challenge])
	},[challenge])
	return (<>
		<div className="challengeInfo-component">
			<h1 className="challengeInfo-title">{challenge}</h1>
			<div dangerouslySetInnerHTML={{ __html: challengeDescription }} className="challengeInfo-text"></div>
			{/*<div className="challengeInfo-text">{challengeDescription}</div>*/}
		</div>
	</>)
}