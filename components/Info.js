import {useEffect,useState} from "react";
import comments from "../comments.js";

export default function Info({loginProcessStep}){
	
	const info = comments.processComments[`${loginProcessStep}`];

	useEffect(()=>{
	},[])

	return (<>
		<div id="info-component" className="info-component">
			<div dangerouslySetInnerHTML={{ __html: info }}></div>
		</div>
		
	</>)
}